import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { productActions } from '../../../store/product/actions';
import { selectorProducts } from '../../../store/product/selectors';
import { Observable } from 'rxjs';
import { ProductState } from '../../../store/product/state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<ProductState>;
  isEdit: boolean = false;
  nameProduct: string;
  id: string;
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

  showEdit(id) {
    this.id = id;
    this.isEdit = true;
  }

  submit() {
    const { id, nameProduct } = this;
    this.store.dispatch(productActions.editProduct({ id, name: nameProduct }));
    this.isEdit = false;
    this.nameProduct = null;
  }
}
