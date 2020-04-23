import {Component, Input, OnInit} from '@angular/core';
import {ReportsService} from "../services/reports.service";

@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.component.html',
  styleUrls: ['./reports-view.component.scss']
})
export class ReportsViewComponent implements OnInit {

  reportType:string;
  isRoutes:boolean = localStorage.getItem("dataType") == "routes";
  isDelivered:boolean = localStorage.getItem("dataType") == "delivered";
  routeId:string;
  startDate = new Date(2000, 0, 1);
  finalDate = new Date(2020, 0, 1);

  constructor(private _reportsService : ReportsService) { }

  ngOnInit(): void {
    this.reportType = localStorage.getItem("dataType");
    this.routeId = localStorage.getItem("routeId")
  }

  dropDownPressed(reportType:string) : void {
    this.reportType = reportType;
    this.reloadTables(reportType);
  }

  searchRoute() {
    localStorage.setItem("routeId", this.routeId);
    this.reloadTables("routes")
  }

  reloadTables(dataType:string) {
    localStorage.setItem("dataType", dataType);
    location.reload();
  }

  generateReport(): void {
    this._reportsService.getReport(this.reportType);
  }

}
