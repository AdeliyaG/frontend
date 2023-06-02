import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct, IProductListProps } from 'src/app/models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styles: ['input[type=checkbox]:checked { background-color: green }'],
})
export class ProductList {
  @Input() props!: IProductListProps;
  @Output() onRemove = new EventEmitter<number>(); 
  @Output() onCheck = new EventEmitter<number>(); 
  
  onProductClick(id: number): void {
    this.props = {
      ...this.props,
      products: this.props?.products.map((product: IProduct) => {
        if (product.id === id) {
          return {
            ...product,
            done: !product.done,
          };
        }
        return product;
      }),
    };
    this.onCheck.emit(id);
  }

  onProductRemove(event: MouseEvent, id: number) {
    event.stopPropagation();
    this.onRemove.emit(id);
  }
}
