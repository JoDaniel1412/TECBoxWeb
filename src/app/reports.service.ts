import { Injectable } from '@angular/core';
import {HttpRequest, HttpHeaders, HttpParams, HttpClient,} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private apiUrl = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  getReport(type:string, routeId:number = 0) {
    let observable;
    let params = new HttpParams();
    let headers = new HttpHeaders();

    switch (type) {
      case "top25":
        params = params.set('type', type);
        observable = this.httpGet(params, headers);
        break;
      case "route":
        params = params.set('type', type);
        headers = headers.set('routeId', routeId.toString());
        observable = this.httpGet(params, headers);
        break;
      case "delivered":
        params = params.set('type', type);
        headers = headers.set('startDate', null);
        headers = headers.set('endDate', null);
        observable = this.httpGet(params, headers);
        break;
    }
  }

  private httpGet(httpParams:HttpParams, httpHeaders:HttpHeaders) {
    const responseType = 'arraybuffer'
    const mediaType = 'application/pdf';
    const url = this.apiUrl + "report";
    this.http.get(url, { headers:httpHeaders , params:httpParams , responseType:responseType } )
      .subscribe(content => {
        let blob = new Blob([content], {type: mediaType});
        let fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
      });
  }
}
