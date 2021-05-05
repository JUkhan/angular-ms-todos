import { Component } from '@angular/core';

import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(store: StoreService) {
    store.select((state) => state).subscribe(console.log);
    store.dispatcher$.subscribe(console.log);
  }
  title = 'mono-state-app';
}
