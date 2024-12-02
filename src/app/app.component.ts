import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultTrackIdComponent } from './components/default/default-track-id.component';
import { DefaultTrackObjComponent } from './components/default/default-track-obj.component';
import { OnPushTrackIdComponent } from './components/onpush/on-push-track-id.component';
import { OnPushTrackObjComponent } from './components/onpush/on-push-track-obj.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DefaultTrackIdComponent,
    DefaultTrackObjComponent,
    OnPushTrackIdComponent,
    OnPushTrackObjComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  arr = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' },
  ];

  protected reset(): void {
    this.arr = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' },
    ];
  }
}
