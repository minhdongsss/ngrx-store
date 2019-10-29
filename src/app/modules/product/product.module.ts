import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductItemComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [ProductComponent, ProductDetailComponent, ProductItemComponent]
})
export class ProductModule { }
