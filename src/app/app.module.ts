import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSrcModule } from 'ng-src';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesService} from "./data-tables.service";
import {HttpClientModule} from "@angular/common/http";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSrcModule
  ],
  providers: [DataTablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
