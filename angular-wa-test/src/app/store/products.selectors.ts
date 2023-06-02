import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductsState } from "../models/product.model";

export interface AppState {
  products: IProductsState;
}

export const selectFeature = createFeatureSelector<IProductsState>('store');

export const selectLoading = createSelector(
  selectFeature,
  (state) => state.isLoading
)

export const selectAllProducts = createSelector(
  selectFeature,
  (state) => state.allProducts
)

export const selectProductList = createSelector(
  selectFeature,
  (state) => state.productList
)