import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../services/store.service';
import { counterState } from '../states/counter';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, OnDestroy {
  counter$ = this.store.select((state) => state.counter);
  constructor(public store: StoreService) {}

  inc() {
    this.store.dispatch('inc');
  }
  ngOnInit(): void {
    setTimeout(()=>{
    this.store.registerState(counterState);
    },0)
  }
  ngOnDestroy(): void {
    this.store.unregisterState('counter');
  }
}
