import { Component, OnInit } from '@angular/core';
import {AdminTableService} from '../admin-table.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  employees = [];
  constructor(private adminTableService: AdminTableService) { }

  ngOnInit(): void {
    this.adminTableService.getEmployees()
        .subscribe(data => this.employees = data);
  }

}
