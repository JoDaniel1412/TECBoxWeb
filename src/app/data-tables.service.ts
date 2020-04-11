import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IProduct} from "./datatypes/IProduct";
import {Observable} from "rxjs";
import {EDataType} from "./datatypes/EDataType";
import {IEmployee} from "./datatypes/IEmployee";
import {ISeller} from "./datatypes/ISeller";
import {IClient} from "./datatypes/IClient";
import {IPlace} from "./datatypes/IPlace";
import {ISubsidiary} from "./datatypes/ISubsidiary";
import {IRole} from "./datatypes/IRole";
import {IPackage} from "./datatypes/IPackage";
import {IRoute} from "./datatypes/IRoute";
import {IBill} from "./datatypes/IBill";

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {

  private apiUrl = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  getElements(type:string): Observable<any> {
    let observable, header;
    switch (type) {
      case "employee":
        observable =  this.httpGet<IEmployee>(type);
        break;
      case "seller":
        observable =  this.httpGet<ISeller>(type);
        break;
      case "client":
        observable =  this.httpGet<IClient>(type);
        break;
      case "place":
        observable =  this.httpGet<IPlace>(type);
        break;
      case "subsidiary":
        observable =  this.httpGet<ISubsidiary>(type);
        break;
      case "role":
        observable =  this.httpGet<IRole>(type);
        break;
      case "product":
        observable =  this.httpGet<IProduct>(type);
        break;
      case "package":
        observable =  this.httpGet<IPackage>(type);
        break;
      case "route":
        observable =  this.httpGet<IRoute>(type);
        break;
      case "bill":
        observable =  this.httpGet<IBill>(type);
        break;
      case "top25":
        observable =  this.httpGet<IProduct>(type);
        break;
      case "routes":
        let routeId = localStorage.getItem("routeId");
        header = new HttpHeaders()
          .set('routeId', routeId);
        observable =  this.httpGet<IProduct>(type, {headers:header});
        break;
      case "delivered":
        let today = new Date();
        let yesterday = new Date(2000);
        header = new HttpHeaders()
          .set('startDate', yesterday.toDateString())
          .set('finalDate', today.toDateString());
        observable =  this.httpGet<IPackage>(type, {headers:header});
        break;
      default:
        observable = {};
    }

    return observable;
  }

  private httpGet<T>(resource:string, options = {}): Observable<T> {
    return this.http.get<T>(this.apiUrl + resource, options);
  }
}
