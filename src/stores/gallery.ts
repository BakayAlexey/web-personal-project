import { action, computed, observable } from 'mobx';
import { Image } from '../types';
import { RootStore } from './index';

export class Gallery {
  @observable _entities: Map<string, Image> = new Map();
  @observable _loading: boolean;
  @observable _error: string | null;
  _loadedPage: number;
  _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this._loadedPage = 0;
    this._loading = false;
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

  @action
  loadEntities = async () => {
    this._loading = true;

    this._loadedPage += 1;
    const url = `https://api.unsplash.com/photos?page=${this._loadedPage}&per_page=10`;
    try {
      const response = await fetch(url, { method: 'GET', headers: { Authorization: `Bearer ${this._rootStore.auth.token}` } });
      const res = await response.json();
      res.reduce((map: Map<string, Image>, item: Image) => {
        map.set(item.id, item);
        return map;
      }, this._entities);
    } catch (e) {
      console.log(e);
      this._error = e;
    }
    this._loading = false;
  };
}