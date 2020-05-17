import { Component, OnInit } from '@angular/core';
import {ProductCartService} from '../services/product-cart.service';
import {DataTablesService} from '../services/data-tables.service';
import {EDataType} from '../interfaces/EDataType';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  cart = [];
  products = [];
  constructor(private _productCartService: ProductCartService, private _dataTablesService: DataTablesService) {
    this._dataTablesService.getElements("product")
      .subscribe(data => {
        this.products = data;
      });
  }

  ngOnInit(): void {
  }

  addToCart(product) {
    this.cart.push(product);
    this._productCartService.emitChange(this.cart);
    console.log(this.products);
  }

}
