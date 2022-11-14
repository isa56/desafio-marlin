import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { CreateArticleComponent } from './views/create-article/create-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalhes/:id', component: DetailsComponent },
  { path: 'criar-artigo', component: CreateArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
