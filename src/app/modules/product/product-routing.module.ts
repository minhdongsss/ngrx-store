import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "product-list", pathMatch: "full" },
  { path: "product-list", component: ProductListComponent },
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
