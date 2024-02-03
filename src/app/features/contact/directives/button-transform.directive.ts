import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[buttonTransform]',
  standalone: true,
})
export class ButtonTransformDirective {
  private readonly button: ElementRef;

  constructor (
    private eleRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.button = eleRef;
  }

  @HostListener('submit') onSubmit () {
    this.button.nativeElement.style = {
      'transform': 'translateX(100%)',
      'opacity': '0',
    };

    const newElement = this.renderer.createElement('div');
    this.renderer.setProperty(newElement, 'innerHTML', '<p>New Content</p>');

    const containerElement = this.button.nativeElement;
    this.renderer.parentNode(containerElement).replaceChild(newElement, containerElement);
  }
}
