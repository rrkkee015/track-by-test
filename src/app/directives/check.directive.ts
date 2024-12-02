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
      // 하위 모든 노드들의 변경사항 체크
      subtree: true,
      // node.data에서 발생하는 변경사항 체크
      characterData: true,
    });
  }
}
