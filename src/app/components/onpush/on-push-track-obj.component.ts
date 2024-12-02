import 'zone.js';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CheckDirective } from '../../directives/check.directive';

@Component({
  selector: 'app-on-push-track-obj',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CheckDirective],
})
export class OnPushTrackObjComponent {
  @Input() arr: any;

  count = 0;

  onCheck(): void {
    this.count++;
  }
}
