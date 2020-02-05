import { action, computed, observable } from 'mobx';
import { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage } from '../utils/storages';
import { APP_TOKEN } from '../constants';

export class AuthStore {
  @observable _token: string = '';

  constructor() {
    this.readToken();
  }

  readToken = () => {
    const token = getFromLocalStorage(APP_TOKEN);
    if (token) {
      this._token = token;
    }
  };

  @computed
  get token() {
    return this._token;
  }

  @action
  setToken = (token: string) => {
    this._token = token;
    setToLocalStorage(APP_TOKEN, token);
  };

  @action
  removeToken = () => {
    this._token = '';
    removeFromLocalStorage(APP_TOKEN);
  };
}
