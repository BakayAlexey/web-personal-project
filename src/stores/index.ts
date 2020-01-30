import { AuthStore } from './auth';

export class RootStore {
  auth: AuthStore;

  constructor() {
    this.auth = new AuthStore(this);
  }
}

export const stores = new RootStore();
