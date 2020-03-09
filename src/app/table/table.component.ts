import {Component, OnInit} from '@angular/core';
declare var $;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  _table_name = "Table";
  _show_editor = true;
  _columns = ["ID", "Product", "Description", "Price", "Quantity"];
  _elements = [
    {'id':1111, 'name':"Galaxy 10", 'description':"Cellphone", 'price':800, 'quantity':4},
    {'id':2222, 'name':"Nike's", 'description':"Shoes", 'price':100, 'Quantity':2},
    {'id':3333, 'name':"Hershey's", 'description':"Chocolate", 'price':6, 'Quantity':100},
    {'id':4444, 'name':"Water bottle", 'description':"Drinks", 'price':8, 'Quantity':4}];
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
    this.item_selected_id = element.firstChild.textContent
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

  set elements(value: any[]) {
    this._elements = value;
  }
}
