import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent} from './table/table.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'admin', component: AdminViewComponent},
  { path: 'tableExample', component: TableComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AdminViewComponent, TableComponent];
