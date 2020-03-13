import {Component} from '@angular/core';
import {EDataType} from "./datatypes/EDataType";
import {TableComponent} from "./table/table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TECBox';

  ngOnInit(): void {
  }
}
