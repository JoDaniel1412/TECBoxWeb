import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {

  @ViewChild('#table') table;

  constructor() { }

  ngOnInit(): void { }

  // Receives a string and reloads the DataTables.
  reloadTables(dataType:string) {
    localStorage.setItem("dataType", dataType);
    location.reload();
  }

}
