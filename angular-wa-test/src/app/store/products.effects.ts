import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ProductApi } from '../service/products.service';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(private actions: Actions, private productsApi: ProductApi) {}

  getAllProducts = createEffect(() =>
    this.actions.pipe(
      ofType(ProductsActions.loadAllProducts),
      mergeMap(() =>
        this.productsApi
          .getAllProducts()
          .pipe(
            map((products) =>
              ProductsActions.loadAllProductsSuccess({ products })
            )
          )
      )
    )
  );

  getProductList = createEffect(() =>
    this.actions.pipe(
      ofType(ProductsActions.loadProductList),
      mergeMap(() =>
        this.productsApi
          .getActiveProductList()
          .pipe(
            map((products) =>
              ProductsActions.loadProductListSuccess({ products })
            )
          )
      )
    )
  );

  addNewProduct = createEffect(() =>
    this.actions.pipe(
      ofType(ProductsActions.addProduct),
      mergeMap((action) =>
        this.productsApi
          .addNewProduct(action.newProduct)
          .pipe(
            map((products) => ProductsActions.addProductSuccess({ products }))
          )
      )
    )
  );

  checkProduct = createEffect(() =>
    this.actions.pipe(
      ofType(ProductsActions.checkProduct),
      mergeMap((action) =>
        this.productsApi
          .checkProduct(action.productId)
          .pipe(
            map((result) => ProductsActions.checkProductSuccess({ result }))
          )
      )
    )
  );

  removeProduct = createEffect(() =>
    this.actions.pipe(
      ofType(ProductsActions.removeProduct),
      mergeMap((action) =>
        this.productsApi
          .removeProduct(action.productId, action.list)
          .pipe(
            map((result) => ProductsActions.removeProductSuccess({ result }))
          )
      )
    )
  );

  removeAll = createEffect(() =>
    this.actions.pipe(
      ofType(ProductsActions.removeAll),
      mergeMap((action) =>
        this.productsApi
          .removeAll()
          .pipe(
            map((result) => ProductsActions.removeAllSuccess({ result }))
          )
      )
    )
  );
}
