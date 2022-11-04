import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  categories = [
    { name: 'Lorem ipsum dolor', id: 1 },
    { name: 'Lorem ipsum dolor', id: 2 },
    { name: 'Lorem ipsum dolor', id: 3 },
    { name: 'Lorem ipsum dolor', id: 4 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
