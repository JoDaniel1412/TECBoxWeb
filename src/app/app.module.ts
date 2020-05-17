import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSrcModule } from 'ng-src';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesService} from './services/data-tables.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { AuthViewComponent } from './auth-view/auth-view.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainNavComponent,
    CartComponent,
    FooterComponent,
    AuthViewComponent
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
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: 'AIzaSyBp-An0tuiS1C0yEb_GDe9JF2mQcHJZz0M',
      authDomain: 'tecbox-6f176.firebaseapp.com',
      databaseURL: 'https://tecbox-6f176.firebaseio.com',
      projectId: 'tecbox-6f176',
      storageBucket: 'tecbox-6f176.appspot.com',
      messagingSenderId: '664796310534',
      appId: '1:664796310534:web:7f963e99d94cca121b6787',
      measurementId: 'G-12W8K6RFMX'
    }),
    MatPasswordStrengthModule
  ],
  providers: [DataTablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
