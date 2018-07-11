import { Injectable, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

  public getToken(): string {
      return this.storage.get('Token');
  }

  public setToken(token: string): void {
      this.storage.set('Token', token);
  }

  private decodeToken(): string {
    const token: string = this.getToken();
    return atob(token);
  }

}
