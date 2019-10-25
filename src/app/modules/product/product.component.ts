import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { productActions } from '../../store/product/actions';
import { selectorProducts } from '../../store/product/selectors';
import { Observable } from 'rxjs';
import { ProductState } from '../../store/product/state';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<ProductState>;
  constructor(
    private store: Store<ProductState>
  ) {}

  ngOnInit() {
    this.actionGetProducts();
  }

  getProducts() {
    this.store.select(selectorProducts).subscribe(products => this.products = products);
  }

  actionGetProducts() {
    this.store.dispatch(productActions.getAllProducts());
    this.getProducts();
  }
}
