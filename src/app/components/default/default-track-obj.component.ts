import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CheckDirective } from '../../directives/check.directive';

@Component({
  selector: 'app-default-track-obj',
  standalone: true,
  template: `
    <div (check)="onCheck()">
      @for (obj of arr; track obj) {
      {{ obj.id }}
      {{ obj.name }}
      <br />
      }
    </div>
    {{ count }}
    <br />
  `,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CheckDirective],
})
export class DefaultTrackObjComponent {
  @Input() arr: any;

  count = 0;

  onCheck(): void {
    this.count++;
  }
}
