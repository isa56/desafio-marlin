import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from 'src/app/Post';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  post!: Post;
  faArrowLeft = faArrowLeft;

  constructor(
    private router: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];

    this.postsService.getPost(id).subscribe(
      (post: Post) => {
        this.post = post;
      },
      (error) => {
        alert(
          `Ocorreu um erro: ${error.error}. Por favor, tente mais tarde ou entre em contato com o suporte.`
        );
      }
    );
  }

  formatDate(date: string): string {
    if (date) return new Date(date).toLocaleDateString();
    return '';
  }
}
