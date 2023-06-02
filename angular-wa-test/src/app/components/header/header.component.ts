import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductModal } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class Header {
  currentPage: string = '';

  constructor(private modalService: NgbModal, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = this.router.url;
      }
    });
  }
  
  onAddProductBtnClick() {
    this.modalService.open(AddProductModal);
  }
}