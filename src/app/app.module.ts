import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ProductModule } from './modules/product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { RootStoreModule } from './store/';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    ProductModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
