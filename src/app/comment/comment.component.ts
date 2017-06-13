import { Component, OnInit } from '@angular/core';
import { CommentService } from 'app/comment/comment.service';

@Component({
  selector: 'yo-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: any[];
  errorMessage: any;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments()
      .subscribe(Comments => this.comments = Comments,
      error => this.errorMessage = <any>error);
  }

}
