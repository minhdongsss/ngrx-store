import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "product-list", pathMatch: "full" },
  { path: "product-list", component: ProductComponent },
  { path: "product-detail/:id", component: ProductDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
