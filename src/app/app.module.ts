import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSrcModule } from 'ng-src';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesService} from './data-tables.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartComponent } from './cart/cart.component';
import {MatTableModule} from "@angular/material/table";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainNavComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgSrcModule,
    NgbModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  providers: [DataTablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
