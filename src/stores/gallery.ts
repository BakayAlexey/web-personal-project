import { action, computed, observable } from 'mobx';
import { Image } from '../types';
import { RootStore } from './index';

export interface EntitiesProps {
  // id: Image,
}

export class Gallery {
  @observable _entities: EntitiesProps | {} = {};
  @observable _loading: boolean;
  @observable _loaded: boolean;
  @observable _error: string | null;
  _loadedPage: number;
  _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._loadedPage = 0;
    this._loading = false;
    this._loaded = false;
    this._error = null;
    this._rootStore = rootStore;
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
    const url = `https://api.unsplash.com/photos?page=${this._loadedPage}&per_page=10`;
    try {
      const response = await fetch(url, { method: 'GET' });
      const res = await response.json();
      console.log(res);
      if (res.errors) throw new Error(res.errors);

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
}