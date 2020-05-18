import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataTablesService} from "../services/data-tables.service";
import {EDataType} from "../interfaces/EDataType";

declare var $;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('show-editor') show_editor:boolean = false;
  table_name:string = "";
  columns:string[] = [];
  elements:Object[] = [];
  item_selected_id;
  objectKeys = Object.keys;
  dataType:string;

  constructor(private _dataTablesService : DataTablesService) {
  }

  ngOnInit(): void {
    this.setDataType();
    this.getApiData();
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
    this.dataType = localStorage.getItem("dataType");
    this.table_name = this.dataType.toUpperCase();
  }
}
