import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { ProductModule } from './modules/product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { RootStoreModule } from './store/';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    HttpClientModule,
    // StoreModule.forRoot({}),
    // EffectsModule.forRoot([]),
    RootStoreModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
