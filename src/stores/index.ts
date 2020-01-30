import { AuthStore } from './auth';

class RootStore {
  constructor(
    public auth: AuthStore
  ) {}
}

export const stores = new RootStore(AuthStore);
