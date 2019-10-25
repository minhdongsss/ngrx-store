import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../../store/product/effects';
import * as productStore from '../../store/product/reducer';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(productStore.FEATURE_NAME, productStore.reducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  exports: [ProductComponent, ProductDetailComponent, ProductItemComponent]
})
export class ProductModule { }
