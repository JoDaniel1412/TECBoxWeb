import { Component, OnInit } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})
export class AuthViewComponent implements OnInit {

  providers = AuthProvider;

  constructor() { }

  ngOnInit(): void {
  }

}
