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

  protected change(): void {
    const newArr = [...this.arr];
    const firstId = newArr[0].id;

    for (let idx = 0; idx < newArr.length - 1; ++idx) {
      newArr[idx].id = newArr[idx + 1].id;
    }

    newArr[newArr.length - 1].id = firstId;
    this.arr = newArr;
  }

  protected onlyChangeName(): void {
    const newArr = [...this.arr];
    const alpha = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    this.arr = newArr.map((obj) => ({
      ...obj,
      name: alpha[Math.floor(Math.random() * alpha.length)],
    }));
  }
}
