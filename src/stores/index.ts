import { AuthStore } from './auth';
import { Gallery } from './gallery';
import { GalleryLikes } from './galleryLikes';

export class RootStore {
  auth: AuthStore;
  gallery: Gallery;
  galleryLikes: GalleryLikes;

  constructor() {
    this.auth = new AuthStore();
    this.gallery = new Gallery(this);
    this.galleryLikes = new GalleryLikes(this);
  }
}

export const stores = new RootStore();
