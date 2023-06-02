import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveProductListPage } from './pages/active-product-list/active-product-list.component';
import { AllProductsPage } from './pages/product-list-history/all-products.component';

const routes: Routes = [
  {
    path: 'active',
    title: 'Что нужно купить',
    component: ActiveProductListPage,
  },
  { path: 'product-list', title: 'Список покупок', component: AllProductsPage },
  { path: '', redirectTo: 'active', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
