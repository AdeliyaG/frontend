import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProductListProps } from 'src/app/models/product.model';
import { checkProduct, loadProductList, removeAll, removeProduct } from 'src/app/store/products.actions';
import {
  AppState,
  selectLoading,
  selectProductList,
} from 'src/app/store/products.selectors';

@Component({
  selector: 'active-product-list',
  templateUrl: './active-product-list.component.html',
})
export class ActiveProductListPage implements OnInit {
  title = 'Что нужно купить';
  isLoading: Observable<boolean> | undefined;

  props: IProductListProps = {
    products: [],
    isActive: true,
  };

  constructor(private store: Store<AppState>) {
    this.isLoading = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProductList());
    this.store
      .select(selectProductList)
      .subscribe((res) => {
        this.props = {
          products: res,
          isActive: true,
        };
      });
  }

  checkProduct(id: number) {
    this.store.dispatch(checkProduct({ productId: id}));
  }

  removeProduct(id: number) {
    this.store.dispatch(removeProduct({ productId: id, list: { type: 'active' } }));
    this.store.dispatch(loadProductList());
  }

  removeAll() {
    this.store.dispatch(removeAll());
    this.store.dispatch(loadProductList());
  }
}
