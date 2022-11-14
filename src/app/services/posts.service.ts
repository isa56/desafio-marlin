import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
}
