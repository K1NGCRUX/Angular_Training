import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
  }

}
