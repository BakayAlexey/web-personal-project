import { AuthStore } from './auth';
import { Gallery } from './gallery';

export class RootStore {
  auth: AuthStore;
  gallery: Gallery;

  constructor() {
    this.auth = new AuthStore();
    this.gallery = new Gallery(this);
  }
}

export const stores = new RootStore();
