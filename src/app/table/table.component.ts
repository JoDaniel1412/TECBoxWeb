import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTablesService} from "../data-tables.service";
import {EDataType} from "../datatypes/EDataType";

declare var $;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  table_name:string = "";
  show_editor:boolean = true;
  columns:string[] = [];
  elements:Object[] = [];
  item_selected_id;
  objectKeys = Object.keys;
  dataType:EDataType;
  @ViewChild('myTable') myTable;

  constructor(private _dataTablesService : DataTablesService) {
    this.setDataType();
  }

  ngOnInit(): void {
    this.getApiData();
  }

  client() {
    localStorage.setItem("dataType", "client");
    location.reload();
  }

  products() {
    localStorage.setItem("dataType", "product");
    location.reload();
  }

  employees() {
    localStorage.setItem("dataType", "employee");
    location.reload();
  }

  // Extracts the ID of the element clicked on the table
  onElementClick(element): void {
    this.item_selected_id = element.id;
  }

  // Loads the columns and rows of the table from the API
  private getApiData()
  {
    this._dataTablesService.getElements(this.dataType)
      .subscribe(data => {
        this.elements = data;
        this.columns = this.objectKeys(data[0]);
        this.loadDataTable()
      });
  }

  // Applies DataTables format to this component
  private loadDataTable(): void {
    $(document).ready(function() {
      $('#myTable').DataTable();
    });
  }

  private setDataType() {
    let data = localStorage.getItem("dataType");
    switch (data) {
      case "client":
        this.dataType = EDataType.Client;
        break;
      case "product":
        this.dataType = EDataType.Product;
        break;
      case "employee":
        this.dataType = EDataType.Employee;
        break;
    }
  }
}
