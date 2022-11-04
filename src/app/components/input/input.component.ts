import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';

  faMagnifyingGlass = faMagnifyingGlass;

  constructor() { }

  ngOnInit(): void {
  }

}
