import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCrtEffect]'
})
export class CrtEffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'contrast(1.2) brightness(1.1) blur(0.7px)');
    this.renderer.setStyle(this.el.nativeElement, 'text-shadow', '0 0 5px limegreen, 0 0 10px limegreen');
  }
}
