import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './Post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form-http',
  templateUrl: './form-http.component.html',
  styleUrls: ['./form-http.component.scss'],
})
export class FormHttpComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit(): void {
    this.errorSub = this.postService.error.subscribe((errorMsg) => {
      this.error = errorMsg;
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post): void {
    this.postService.createPost(postData.title, postData.content);
  }

  onFetchPosts(): void {
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
      },
      (error) => {
        this.error = error.message;
        console.log(error);
      }
    );
  }

  onClearPosts(): void {
    this.postService.deletePosts().subscribe(
      (posts) => {
        console.log('posts deleted');
        this.loadedPosts = [];
      },
      (error) => {
        this.error = error.message;
        console.log(error);
      }
    );
  }
}
