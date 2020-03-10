import { Component, OnInit } from '@angular/core';
import {AdminTableService} from '../admin-table.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  public columnNames = [];
  public tableData = [];
  public tableName = '';

  constructor(private adminTableService: AdminTableService) { }

  ngOnInit(): void { }

  showEmployees() {
    this.adminTableService.getEmployees()
      .subscribe(data => this.tableData = data);
    this.tableName = 'Employees';
  }

}
