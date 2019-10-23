import { Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { productActions } from './store/product/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends OnInit {
  products: [];
  constructor(
    private store: Store<any>
  ) {
    super();
  }

  ngOnInit() {

  }

  getProduct() {
    console.log('ahihi')
    this.store.dispatch(productActions.getAllProducts());
  }
  title = 'ngrx-store';
}
