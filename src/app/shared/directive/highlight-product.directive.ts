import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightProduct]',
})
export class HighlightProductDirective {
  @Input('appHighlightProduct') hoverStyle: { [key: string]: string } = {};

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyles(this.hoverStyle);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.clearStyles();
  }

  ngOnInit() {}
  private applyStyles(style: { [key: string]: string }) {
    if (style) {
      for (const key in style) {
        this.renderer.setStyle(this.elementRef.nativeElement, key, style[key]);
      }
    }
  }
  private clearStyles() {
    if (this.hoverStyle) {
      for (const key in this.hoverStyle) {
        this.renderer.removeStyle(this.elementRef.nativeElement, key);
      }
    }
  }
}
