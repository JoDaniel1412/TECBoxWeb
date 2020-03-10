import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare var $;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public _table_name = 'Table';
  _show_editor = true;
  _columns = ['ID', 'Name', 'Age'];
  @Input() public _elements = [];
  item_selected_id;
  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#data-table').DataTable();
    } );
  }
  // Extracts the ID of the element clicked on the table
  onElementClick(element) {
    this.item_selected_id = element.firstChild.textContent;
  }


  set table_name(value: string) {
    this._table_name = value;
  }

  set show_editor(value: boolean) {
    this._show_editor = value;
  }

  set columns(value: string[]) {
    this._columns = value;
  }

  @Input('_elements')
  set elements(value: any[]) {
    console.log(value);
    this._elements = value;
  }
}
