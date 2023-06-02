import { createAction, props } from "@ngrx/store";
import { IListType, IProduct } from "../models/product.model";

export const loadProductList = createAction('[Product] Load active list');
export const loadProductListSuccess = createAction('[Product] Load active list success', props<{ products: IProduct[] }>());

export const loadAllProducts = createAction('[Product] Load all');
export const loadAllProductsSuccess = createAction('[Product] Load all success', props<{ products: IProduct[] }>());

export const addProduct = createAction('[Product] Add new', props<{ newProduct: IProduct }>());
export const addProductSuccess = createAction('[Product] Add new success', props<{ products: IProduct[] }>());

export const checkProduct = createAction('[Product] Check', props<{ productId: number }>());
export const checkProductSuccess = createAction('[Product] Check success', props<{ result: string }>());

export const removeProduct = createAction('[Product] Remove', props<{ productId: number, list: IListType }>());
export const removeProductSuccess = createAction('[Product] Remove success', props<{ result: string }>());

export const removeAll = createAction('[Product] Remove all');
export const removeAllSuccess = createAction('[Product] Remove all success', props<{ result: string }>());
