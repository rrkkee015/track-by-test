import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[check]',
  standalone: true,
})
export class CheckDirective {
  @Output() public check = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    const element = this.elementRef.nativeElement;
    const observer = new MutationObserver((mutations: MutationRecord[]) =>
      this.check.emit(mutations)
    );

    observer.observe(element, {
      // 자식 노드에 발생하는 변경사항 체크
      childList: true,
      // 하위 모든 노드들의 변경사항 체크
      subtree: true,
      // 해당 노드의 attribute 속성 변경사항 체크
      attributes: true,
      // node.data에서 발생하는 변경사항 체크
      characterData: true,
      // 이전 값도 콜백에 같이 포함하여 받는 기능, false시 변경된 값만 콜백에 전달
      attributeOldValue: true,
      // 이전 값도 콜백에 같이 포함하여 받는 기능, false시 변경된 값만 콜백에 전달
      characterDataOldValue: true,
    });
  }
}
