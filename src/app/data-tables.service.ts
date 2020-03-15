import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  private apiUrl = "http://192.168.100.4:8080/api/";

  constructor(private http: HttpClient) { }

  getElements(type:EDataType): Observable<any>{
    let observable;

    switch (type) {
      case EDataType.Employee:
        observable =  this.httpGet<IEmployee>("employee");
        break;
      case EDataType.Seller:
        observable =  this.httpGet<ISeller>("seller");
        break;
      case EDataType.Client:
        observable =  this.httpGet<IClient>("client");
        break;
      case EDataType.Place:
        observable =  this.httpGet<IPlace>("place");
        break;
      case EDataType.Subsidiary:
        observable =  this.httpGet<ISubsidiary>("subsidiary");
        break;
      case EDataType.Role:
        observable =  this.httpGet<IRole>("role");
        break;
      case EDataType.Product:
        observable =  this.httpGet<IProduct>("product");
        break;
      case EDataType.Package:
        observable =  this.httpGet<IPackage>("package");
        break;
      case EDataType.Route:
        observable =  this.httpGet<IRoute>("route");
        break;
      case EDataType.Bill:
        observable =  this.httpGet<IBill>("bill");
        break;
      default:
        observable = {};
    }

    return observable;
  }

  private httpGet<T>(resource:string): Observable<T> {
    return this.http.get<T>(this.apiUrl + resource);
  }
}
