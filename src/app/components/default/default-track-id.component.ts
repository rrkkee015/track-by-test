import 'zone.js';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CheckDirective } from '../../directives/check.directive';

@Component({
  selector: 'app-default-track-id',
  standalone: true,
  template: `
    @for (obj of arr; track obj.id) {
    <div (check)="onCheck()">
      {{ obj.id }}
      {{ obj.name }}
    </div>
    <br />
    }
    {{ count }}
    <br />
  `,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CheckDirective],
})
export class DefaultTrackIdComponent {
  @Input() arr: any;

  count = 0;

  onCheck(): void {
    this.count++;
  }
}
