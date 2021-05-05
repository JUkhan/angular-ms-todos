import { Component } from '@angular/core';

import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  states:any={}
  constructor(store: StoreService) {
    store.select((state) => state).subscribe(s=>{
      this.states=JSON.stringify(s, null, 2)
    });
    store.dispatcher$.subscribe(console.log);
  }
  title = 'mono-state-app';
}
