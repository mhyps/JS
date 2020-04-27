import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-http',
  templateUrl: './form-http.component.html',
  styleUrls: ['./form-http.component.scss'],
})
export class FormHttpComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http
      .post('https://simple-app-ca3bb.firebaseio.com/posts.json', postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchData() {}
}
