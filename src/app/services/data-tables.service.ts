import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IProduct} from "../interfaces/IProduct";
import {Observable} from "rxjs";
import {EDataType} from "../interfaces/EDataType";
import {IEmployee} from "../interfaces/IEmployee";
import {ISeller} from "../interfaces/ISeller";
import {IClient} from "../interfaces/IClient";
import {IPlace} from "../interfaces/IPlace";
import {ISubsidiary} from "../interfaces/ISubsidiary";
import {IRole} from "../interfaces/IRole";
import {IPackage} from "../interfaces/IPackage";
import {IRoute} from "../interfaces/IRoute";
import {IBill} from "../interfaces/IBill";

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {

  private apiUrl = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  // Assigns a type to every observable that is received and returns this typified observable.
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

  // calls http.get() with the corresponding resource url.
  private httpGet<T>(resource:string, options = {}): Observable<T> {
    return this.http.get<T>(this.apiUrl + resource, options);
  }
}
