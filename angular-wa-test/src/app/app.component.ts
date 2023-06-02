import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAllProducts } from './store/products.actions';
import { AppState } from './store/products.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAllProducts());
  }
}
