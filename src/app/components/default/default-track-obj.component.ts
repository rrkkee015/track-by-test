import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CheckDirective } from '../../directives/check.directive';

@Component({
  selector: 'app-default-track-obj',
  standalone: true,
  template: `
    <p>Default + trackBy(Obj)</p>
    <div (check)="onCheck()">
      @for (obj of arr; track obj) {
      {{ obj.id }}
      {{ obj.name }}
      <br />
      }
    </div>
    render : {{ renderCount }}
    <br />
    ngOnChanges : {{ onChangeCount }}
  `,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CheckDirective],
})
export class DefaultTrackObjComponent implements OnChanges {
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
