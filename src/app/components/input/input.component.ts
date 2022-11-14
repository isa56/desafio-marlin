import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faHeading,
  faImage,
  faMagnifyingGlass,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() icon: string = '';
  @Output() inputEvent = new EventEmitter();

  iconUsed!: IconDefinition;
  faMagnifyingGlass = faMagnifyingGlass;
  faImage = faImage;
  faHeading = faHeading;

  constructor() {}

  ngOnInit(): void {
    if (this.icon === 'search') {
      this.iconUsed = faMagnifyingGlass;
    }
    if (this.icon === 'image') {
      this.iconUsed = faImage;
    }
    if (this.icon === 'title') {
      this.iconUsed = faHeading;
    }
  }

  onSubmit(value: string) {
    this.inputEvent.emit(value);
  }
}
