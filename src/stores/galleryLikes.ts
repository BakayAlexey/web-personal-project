import { action, computed, observable } from 'mobx';
import { Image } from '../types';
import { RootStore } from './index';
import { act } from 'react-dom/test-utils';

export interface EntitiesProps {
  // id: Image,
}

export class GalleryLikes {
  @observable _entities: EntitiesProps | {} = {};
  @observable _loading: boolean;
  @observable _loaded: boolean;
  @observable _error: string | null;
  _loadedPage: number;
  _rootStore: RootStore;
  _username: string;

  constructor(rootStore: RootStore) {
    this._loadedPage = 0;
    this._loading = false;
    this._loaded = false;
    this._error = null;
    this._rootStore = rootStore;
    this._username = '';
  }

  @computed
  get entities () {
    return this._entities;
  }

  @computed
  get isLoading() {
    return this._loading;
  }

  @computed
  get isLoaded() {
    return this._loaded;
  }

  @action
  loadEntities = async () => {
    this._loading = true;

    this._loadedPage += 1;

    try {
      // @ts-ignore
      if (!this._username) {
        const responseUser = await fetch('https://api.unsplash.com/me', { method: 'GET', headers: { Authorization: `Bearer ${this._rootStore.auth.token}` } });
        const user = await responseUser.json();
        this._username = user.username;
      }

      const url = `https://api.unsplash.com/users/${this._username}/likes?${this._loadedPage}&per_page=10`;
      const response = await fetch(url, { method: 'GET', headers: { Authorization: `Bearer ${this._rootStore.auth.token}` } });
      const res = await response.json();
      const newEntities = res.reduce((entities: EntitiesProps, item: Image) => {
        // @ts-ignore
        entities[item.id] = item;
        return entities;
      }, {});
      this._entities = {...this._entities, ...newEntities};
    } catch (e) {
      console.log(e);
      this._error = e;
    }

    this._loading = false;

    if (!this._loaded) {
      this._loaded = true;
    }
  };

  @action
  likePhoto = async (id: string) => {
    if (!this._loaded) {
      await this.loadEntities();
    }

    // @ts-ignore
    if (this._entities[id]) {
      try {
        const url = `https://api.unsplash.com/photos/${id}/like`;
        const response = await fetch(url, { method: 'DELETE', headers: { Authorization: `Bearer ${this._rootStore.auth.token}` } });
        const res = await response.json();
        // @ts-ignore
        this._entities[id] = undefined;

        // @ts-ignore
        if (this._rootStore.gallery._entities[id]) {
          // @ts-ignore
          this._rootStore.gallery._entities[id].liked_by_user = false;
        }
      } catch (e) {
        console.log(e);
        this._error = e;
      }
    }
    // @ts-ignore
    else if (!this._entities[id]) {
      try {
        const url = `https://api.unsplash.com/photos/${id}/like`;
        const response = await fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${this._rootStore.auth.token}` } });
        const res = await response.json();

        // @ts-ignore
        this._entities[id] = res.photo;

        // @ts-ignore
        if (this._rootStore.gallery.entities[id]) {
          // @ts-ignore
          this._rootStore.gallery.entities[id].liked_by_user = true;
        }
      } catch (e) {
        console.log(e);
        this._error = e;
      }
    }
  };
}