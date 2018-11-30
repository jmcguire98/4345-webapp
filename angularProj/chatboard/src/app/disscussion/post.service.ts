import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DisscussionComponent } from './disscussion.component';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  protected httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  storePosts(posts: any) {
    console.log(posts);
    return this.http.post('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/addPost', posts, this.httpOptions);
  }

  addComment(comments: any) {
    return this.http.post('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/addComment', comments, this.httpOptions);
  }

  getPosts(object: DisscussionComponent) {
    return this.http.get(`http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/posts/` + object.currentForum,
    this.httpOptions);
  }

  getComments(id: number) {
    return this.http.get('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/comments/' + id, this.httpOptions);
  }

  getTimeDate(id: number) {
    return this.http.get('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/posts/' + id, this.httpOptions);
  }

  deletePosts(id: number) {
    return this.http.delete('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/deletePost/' + id, this.httpOptions);
  }
}

