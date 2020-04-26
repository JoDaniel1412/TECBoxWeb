import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent} from './table/table.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import {StorageViewComponent} from './storage-view/storage-view.component';
import {ClientViewComponent} from './client-view/client-view.component';
import { ReportsViewComponent } from './reports-view/reports-view.component';
import { AuthViewComponent} from "./auth-view/auth-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component: ClientViewComponent},
  { path: 'admin', component: AdminViewComponent},
  { path: 'storage', component: StorageViewComponent},
  { path: 'reports', component: ReportsViewComponent},
  { path: 'auth', component: AuthViewComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AdminViewComponent, TableComponent, StorageViewComponent,
                                  ClientViewComponent, ReportsViewComponent, AuthViewComponent];
