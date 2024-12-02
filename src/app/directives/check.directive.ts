import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[check]',
  standalone: true,
})
export class CheckDirective {
  @Output() public check = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    const element = this.elementRef.nativeElement;
    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      this.check.emit(mutations);
    });

    observer.observe(element, {
      childList: true,
      subtree: true,
    });
  }
}
