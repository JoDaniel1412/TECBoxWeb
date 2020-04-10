import {Component, Input, OnInit} from '@angular/core';
import {ReportsService} from "../reports.service";

@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.component.html',
  styleUrls: ['./reports-view.component.scss']
})
export class ReportsViewComponent implements OnInit {

  reportType:string = "top25";

  constructor(private _reportsService : ReportsService) { }

  ngOnInit(): void {
  }

  GenerateReport(): void {
    this._reportsService.getReport(this.reportType);
  }

}
