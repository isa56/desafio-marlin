import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faBars = faBars;
  shouldShowSidebar: boolean = true;

  categories = [
    { name: 'Lorem ipsum dolor', id: 1 },
    { name: 'Lorem ipsum dolor', id: 2 },
    { name: 'Lorem ipsum dolor', id: 3 },
    { name: 'Lorem ipsum dolor', id: 4 },
  ];

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth <= 700) {
      this.shouldShowSidebar = false;
    }
  }

  toggleSidebar(): void {
    this.shouldShowSidebar = !this.shouldShowSidebar;
  }

  onResize(event: any): void {
    if (window.innerWidth > 700) {
      this.shouldShowSidebar = true;
    } else {
      this.shouldShowSidebar = false;
    }
  }
}
