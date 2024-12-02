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
    <p>OnPush + trackBy(Id)</p>
    <div (check)="onCheck()">
      @for (obj of arr; track obj.id) {
      {{ obj.id }}
      {{ obj.name }}
      <br />
      }
    </div>
    render : {{ renderCount }}
    <br />
    ngOnChanges : {{ onChangeCount }}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CheckDirective],
})
export class OnPushTrackIdComponent implements OnChanges {
  @Input() arr: any;

  renderCount = 0;
  onChangeCount = 0;

  onCheck(): void {
    this.renderCount++;
  }

  ngOnChanges(): void {
    this.onChangeCount++;
  }
}
