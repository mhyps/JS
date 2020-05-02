import { Injectable } from '@angular/core';

import { Post } from './Post.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(title: string, content: string): void {
    const postData: Post = { title: title, content: content };

    this.http
      .post<{ name: string }>(
        'https://simple-app-ca3bb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (errorRes) => {
          this.error.next(errorRes.message);
        }
      );
  }

  fetchPosts(): Observable<Post[]> {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://simple-app-ca3bb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const i in responseData) {
            if (responseData.hasOwnProperty(i)) {
              postsArray.push({ ...responseData[i], id: i });
            }
          }
          return postsArray;
        })
      );
  }

  deletePosts(): Observable<any> {
    return this.http.delete(
      'https://simple-app-ca3bb.firebaseio.com/posts.json'
    );
  }
}
