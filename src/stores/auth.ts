import { observable } from 'mobx';
import { getFromLocalStorage } from '../utils/storages';
import { APP_TOKEN } from '../constants';
import { RootStore } from './index';

export class AuthStore {
  @observable token: string = '';

  constructor(rootStore: RootStore) {
    this.readToken();
  }

  private readToken() {
    const token = getFromLocalStorage(APP_TOKEN);
    if (token) {
      this.token = token;
    }
  }
}
