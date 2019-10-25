import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  exports: [ProductComponent, ProductDetailComponent, ProductItemComponent]
})
export class ProductModule { }
