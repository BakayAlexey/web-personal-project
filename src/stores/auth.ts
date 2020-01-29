import { observable } from 'mobx';
import { getFromLocalStorage } from '../utils/storages';
import { APP_TOKEN } from '../constants';
import { RootStore } from '.';

export class AuthStore {
  @observable token: string = '';
  rootStore: RootStore;

  constructor(rootStore:RootStore) {
    this.rootStore = rootStore;
    this.readToken();
  }

  private readToken() {
    const token = getFromLocalStorage(APP_TOKEN);
    if (token) {
      this.token = token;
    }
  }
}

