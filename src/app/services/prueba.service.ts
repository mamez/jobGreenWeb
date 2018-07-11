import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PruebaService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
   
}
}
