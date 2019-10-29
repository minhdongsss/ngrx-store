import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productActions } from '../../../store/product/actions';
import { Store } from '@ngrx/store';
import { ProductState } from '../../../store/product/state';
import { selectorProduct } from '../../../store/product/selectors';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: {};
  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>
    ) { }

  ngOnInit() {
    this.geProduct();
  }

  setInfoProduct() {
    this.store.select(selectorProduct).subscribe(product => this.product = product);
  }

  geProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(productActions.getDetail({ id }));
    this.setInfoProduct();
  }
}
