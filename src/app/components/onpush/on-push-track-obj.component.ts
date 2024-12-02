import 'zone.js';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CheckDirective } from '../../directives/check.directive';

@Component({
  selector: 'app-on-push-obj',
  standalone: true,
  template: `
    @for (obj of arr; track obj) {
    <div (check)="onCheck()">
      {{ obj.id }}
      {{ obj.name }}
    </div>
    <br />
    }
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
