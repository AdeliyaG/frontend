import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { addProduct } from 'src/app/store/products.actions';
import { AppState, selectAllProducts } from 'src/app/store/products.selectors';

@Component({
  selector: 'add-product-modal',
  templateUrl: './add-product-modal.component.html',
})
export class AddProductModal implements OnInit {
  productName: string = '';
  count: number = 0;
  products: IProduct[] = [];

  constructor(public activeModal: NgbActiveModal, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectAllProducts).subscribe((res) => {this.products = res});
  }

  onAddProductBtnClick() {
    this.store.dispatch(
      addProduct({
        newProduct: {
          id: Math.random() * 1000,
          name: this.productName.trim(),
          count: this.count,
        },
      })
    );
    this.activeModal.close();
  }

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        this.products
          .map((product: IProduct) => product.name)
          .filter((name) => name.toLowerCase().indexOf(term.toLowerCase()) > -1)
      )
    );
}
