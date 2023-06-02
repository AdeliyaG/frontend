import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductModal } from './components/add-product-modal/add-product-modal.component';
import { Header } from './components/header/header.component';
import { ProductList } from './components/product-list/product-list.component';
import { ActiveProductListPage } from './pages/active-product-list/active-product-list.component';
import { AllProductsPage } from './pages/product-list-history/all-products.component';
import { ProductApi } from './service/products.service';
import { AutofocusDirective } from './shared/autofocus.directive';
import { ProductsEffects } from './store/products.effects';
import { productsReducer } from './store/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    ProductList,
    ActiveProductListPage,
    AllProductsPage,
    AddProductModal,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('store', productsReducer),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ProductApi],
  bootstrap: [AppComponent],
})
export class AppModule {}
