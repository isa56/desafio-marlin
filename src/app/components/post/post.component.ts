import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  postSummary: string = '';

  constructor() {}

  ngOnInit(): void {
    this.postSummary = this.post.body.substring(0, 300) + '...';
  }

  throwSentryError(): void {
    console.error('erro');
  }
}
