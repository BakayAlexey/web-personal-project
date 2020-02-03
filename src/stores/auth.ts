import { action, observable } from 'mobx';
import { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage } from '../utils/storages';
import { APP_TOKEN } from '../constants';
import { RootStore } from './index';

export class AuthStore {
  @observable token: string = '';

  constructor(rootStore: RootStore) {
    this.readToken();
  }

  readToken = () => {
    const token = getFromLocalStorage(APP_TOKEN);
    if (token) {
      this.token = token;
    }
  };

  @action
  setToken = (token: string) => {
    this.token = token;
    setToLocalStorage(APP_TOKEN, token);
  };

  @action
  removeToken = () => {
    this.token = '';
    removeFromLocalStorage(APP_TOKEN);
  };
}
