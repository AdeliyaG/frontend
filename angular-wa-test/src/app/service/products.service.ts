import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { IListType, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  private allProducts: IProduct[] = [
    {
      id: 1,
      name: 'чипсы',
    },
    {
      id: 2,
      name: 'мармелад',
    },
    {
      id: 3,
      name: 'сок',
    },
  ];

  private productList: IProduct[] = [
    {
      id: 1,
      name: 'чипсы',
      count: 2,
      done: false,
    },
    {
      id: 2,
      name: 'мармелад',
      count: 44,
      done: false,
    },
  ];

  getActiveProductList(): Observable<IProduct[]> {
    return of(this.productList).pipe(delay(1000));
  }

  getAllProducts(): Observable<IProduct[]> {
    return of(this.allProducts).pipe(delay(1000));
  }

  addNewProduct(newProduct: IProduct): Observable<IProduct[]> {
    this.productList = [...this.productList, newProduct];
    if (
      !this.allProducts.filter((product) => product.name === newProduct.name)
        .length
    ) {
      this.allProducts = [
        ...this.allProducts,
        { id: newProduct.id, name: newProduct.name },
      ];
    }

    return of(this.productList);
  }

  checkProduct(id: number): Observable<string> {
    this.productList = this.productList.map((product) => ({ ...product, done: product.id === id && !product.done }));
    return of('success');
  }

  removeProduct(productId: number, list: IListType): Observable<string> {
    list.type === 'all'
      ? (this.allProducts = this.allProducts.filter(
          (product) => product.id !== productId
        ))
      : (this.productList = this.productList.filter(
          (product) => product.id !== productId
        ));

    return of('success');
  }

  removeAll(): Observable<string> {
    this.productList = [];
    return of('success');
  }
}
