import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemPosts } from '../Models/item';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ItemPosts> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  postData(data: ItemPosts) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
