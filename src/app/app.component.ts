import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-marlin';

  constructor(private router: Router) { }

  shouldShowHeader(route: string): boolean {
    return this.router.url === route;
  }
}
