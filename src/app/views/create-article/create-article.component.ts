import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  title: string = '';
  body: string = '';
  image: string = '';

  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.title || !this.body || !this.image) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const post: Post = {
      title: this.title,
      body: this.body,
      image: this.image,
    };

    this.postsService.createPost(post).subscribe((post: Post) => {
      this.router.navigate([`/detalhes/${post.id}`]);
    });

    this.title = '';
    this.body = '';
    this.image = '';
  }
}
