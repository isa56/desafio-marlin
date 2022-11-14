import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { PostComponent } from './components/post/post.component';
import { InputComponent } from './components/input/input.component';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { CreateArticleComponent } from './views/create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PostsContainerComponent,
    PostComponent,
    InputComponent,
    HomeComponent,
    DetailsComponent,
    CreateArticleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
