import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  constructor() { }

  products = [
    {
      name: 'Strawberry Yogurt',
      description: 'Dos Pinos',
      id: 1010010,
      seller: 'Kevin Cordero Zuniga',
      price: 800,
      tax: 0,
      discount: 5,
      img: 'https://cdn.shopify.com/s/files/1/1479/5948/products/automercado-lecheyotroslacteos-yogurtfrutas88_38d7' +
           'a6b1-f11c-4d95-87ac-df1f5c12724f_grande.png?v=1479146490'
    },
    {
      name: 'Butter',
      description: 'Numar',
      id: 276549,
      seller: 'Alejandro Ibarra Campos',
      price: 600,
      tax: 4,
      discount: 10,
      img: 'https://cdn.shopify.com/s/files/1/1479/5948/products/Automercado-MantequillasMargarinasyNatilla-Margar' +
           'ina25_grande.png?v=1479233965'
    },
    {
      name: 'Nesquik',
      description: 'Nestle',
      id: 13583921,
      seller: 'Alejandro Ibarra Campos',
      price: 1400,
      tax: 5,
      discount: 0,
      img: 'https://digitalcontent.api.tesco.com/v2/media/ghs/744eaf3a-ccd5-4188-a60e-001845bd74b6/snapshotimage' +
        'handler_689352616.jpeg?h=540&w=540'
    },
    {
      name: 'Rice',
      description: 'Tio Pelon',
      id: 298364,
      seller: 'Wajib Zaglul Chinchilla',
      price: 1500,
      tax: 7,
      discount: 5,
      img: 'https://cdn.shopify.com/s/files/1/1479/5948/products/automercado-granos-arroz19_grande.png?v=1473833199'
    }
  ];


  ngOnInit(): void {
  }

  addToCart(product) {
    console.log(product);
  }

}
