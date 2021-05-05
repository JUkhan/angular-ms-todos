import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements OnInit {
  constructor(private elm: ElementRef) {}
  ngOnInit() {
    this.elm.nativeElement.focus();
  }
}
