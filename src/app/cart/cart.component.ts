import { Component, OnInit } from '@angular/core';
import {ProductCartService} from "../product-cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  title = 'TECBox';
  cartList = [];

  constructor(private _productCartService: ProductCartService) {
    _productCartService.changeEmitted$.subscribe(
      cart => {
        this.cartList = cart;
      });
  }

  ngOnInit(): void {
  }
}
