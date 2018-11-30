import { NgForm, NgModel, FormsModule, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Comments, Profile } from '../../domain/models/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @ViewChild('f') commentForm: NgForm;

  @Input() postId: number;
  currentUser: Profile;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  comment;
  commentArr: Comments;

  ngOnInit() {
    this.showComments();
  }

  showComments() {
    this.postService.getComments(this.postId).subscribe(comments => {
      this.commentArr = comments;
    });
  }

  onEnter(form: NgForm) {
    this.comment = {
      username: this.currentUser.username,
      body: this.commentForm.value.newComments,
      postid: this.postId
    };

    this.postService.addComment(this.comment)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.commentForm.reset();
  }
}



