import { createReducer, on } from '@ngrx/store';
import { IProductsState } from '../models/product.model';
import * as ProductsActions from './products.actions';

export const initialProductsState: IProductsState = {
  isLoading: false,
  allProducts: [],
  productList: [],
};

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductsActions.loadAllProducts, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ProductsActions.loadAllProductsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    allProducts: action.products,
  })),

  on(ProductsActions.loadProductList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ProductsActions.loadProductListSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    productList: action.products,
  })),

  on(ProductsActions.addProductSuccess, (state, action) => ({
    ...state,
    productList: action.products,
  })),

  on(ProductsActions.checkProductSuccess, (state) => ({ ...state })),
  on(ProductsActions.removeProductSuccess, (state) => ({ ...state })),
  on(ProductsActions.removeAllSuccess, (state) => ({ ...state })),
);
