import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductItemComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
