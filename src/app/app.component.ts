import {Component} from '@angular/core';
import {EDataType} from './datatypes/EDataType';
import {TableComponent} from './table/table.component';
import {ProductCartService} from "./product-cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  allocateTable() {
    localStorage.setItem('dataType', 'employee');
  }
}
