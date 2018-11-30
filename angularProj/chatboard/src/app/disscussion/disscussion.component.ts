import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm, FormsModule, FormControl } from '@angular/forms';
import { PostService } from './post.service';
import { Post, Profile } from '../domain/models/index';

@Component({
  selector: 'app-disscussion',
  templateUrl: './disscussion.component.html',
  styleUrls: ['./disscussion.component.css']
})
export class DisscussionComponent implements OnInit, OnDestroy {

@ViewChild('f') postForm: NgForm;

currentUser: Profile;
showCommentFields = false;
post;
postsArr: Post;
currentForum;
tempPost;
lastPostIndex;
postOwner: Profile;

constructor(
  private postService: PostService,
  public router: Router,
) {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}


ngOnInit() {
  this.currentForum = this.returnForum(this.currentUser);
  this.showPosts();
}

returnForum(user: Profile) {
  if (user.lastForum === undefined) {
    this.currentUser.lastForum = 1;
    return this.currentUser.lastForum;
  } else {
    return this.currentUser.lastForum;
  }
}

storePosts(form: NgForm) {
    this.post = {
      username: this.currentUser.username,
      body: this.postForm.value.newPost,
      title: this.postForm.value.postTitle,
      track: this.currentUser.track,
      gradYear: this.currentUser.gradYear,
      forumid: this.currentUser.lastForum
    };

    this.postService.storePosts(this.post)
    .subscribe(
      (response) => this.showPosts(),
      (error) => console.log(error),
    );
    this.postForm.reset();
}

ngOnDestroy() {
  console.log('ngOnDestroy');
}

showPosts() {
    this.postService.getPosts(this).subscribe(posts => {
    this.postsArr = posts;
    console.log(posts);
    for (let i = 0; i < Object.keys(this.postsArr).length; i++) {
      this.postsArr[i].id = posts[i].postID;
      this.postsArr[i].title = posts[i].title;
    }
  });
}

  postDelete(item: any) {
    this.postService.deletePosts(item)
    .subscribe(id => {
      this.showPosts();
    });
  }
}
