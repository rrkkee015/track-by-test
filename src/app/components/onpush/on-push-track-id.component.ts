import 'zone.js';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CheckDirective } from '../../directives/check.directive';

@Component({
  selector: 'app-on-push-track-id',
  standalone: true,
  template: `
    <div (check)="onCheck()">
      @for (obj of arr; track obj.id) {
      {{ obj.id }}
      {{ obj.name }}
      <br />
      }
    </div>
    {{ count }}
    <br />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CheckDirective],
})
export class OnPushTrackIdComponent {
  @Input() arr: any;

  count = 0;

  onCheck(): void {
    this.count++;
  }
}
