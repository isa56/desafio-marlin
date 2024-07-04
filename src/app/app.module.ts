import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import * as Sentry from '@sentry/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';
import { PostComponent } from './components/post/post.component';
import { InputComponent } from './components/input/input.component';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { CreateArticleComponent } from './views/create-article/create-article.component';
import { GoBackComponent } from './components/go-back/go-back.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router } from '@angular/router';

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
    CreateArticleComponent,
    GoBackComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
