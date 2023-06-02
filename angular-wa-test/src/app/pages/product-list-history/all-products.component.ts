import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProductListProps } from 'src/app/models/product.model';
import { loadAllProducts, removeProduct } from 'src/app/store/products.actions';
import {
  AppState,
  selectAllProducts,
  selectLoading,
} from 'src/app/store/products.selectors';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
})
export class AllProductsPage implements OnInit {
  isLoading: Observable<boolean> | undefined;

  props: IProductListProps = {
    products: [],
    isActive: true,
  };

  constructor(private store: Store<AppState>) {
    this.isLoading = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllProducts());
    this.store.select(selectAllProducts).subscribe((res) => {
      this.props = {
        products: res,
        isActive: false,
      };
    });
  }

  removeProduct(id: number) {
    this.store.dispatch(removeProduct({ productId: id, list: { type: 'all' } }));
    this.store.dispatch(loadAllProducts());
  }
}
