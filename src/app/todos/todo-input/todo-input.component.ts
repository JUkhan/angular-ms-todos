import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  @Input() inputCSS = '';
  @Input() description = '';
  @Input() isSearching: boolean = false;

  @Output() changeValue = new EventEmitter<string>();
  @Output() onBlur = new EventEmitter();
  @Output() handleSubmit = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  textChange(text: string) {
    this.description = text;
    this.changeValue.emit(text);
  }
  blurHandler() {
    this.onBlur.emit();
  }
  submit() {
    this.handleSubmit.emit(this.description);
  }
}
