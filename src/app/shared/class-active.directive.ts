import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appClassActive]'
})
export class ClassActiveDirective {

  @HostBinding('class.active') private classActive: boolean;

  constructor() {
  }

  @HostListener('mouseover') onMouseOver() {
    this.classActive = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.classActive = false;
  }

}
