import { Injectable } from '@angular/core';
import {HttpRequest, HttpHeaders, HttpParams, HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  // switches between the three cases for the available reports and gets the requested report.
  getReport(type: string) {
    let observable;
    let params = new HttpParams();
    let headers = new HttpHeaders();

    switch (type) {
      case 'top25':
        params = params.set('type', type);
        observable = this.httpGet(params, headers);
        break;
      case 'route':
        const routeId = localStorage.getItem('routeId');
        params = params.set('type', type);
        headers = headers.set('routeId', routeId);
        observable = this.httpGet(params, headers);
        break;
      case 'delivered':
        const startDate = localStorage.getItem('startDate');
        const finalDate = localStorage.getItem('finalDate');
        params = params.set('type', type);
        headers = headers.set('startDate', startDate);
        headers = headers.set('finalDate', finalDate);
        observable = this.httpGet(params, headers);
        break;
    }
  }

  private httpGet(httpParams: HttpParams, httpHeaders: HttpHeaders) {
    const responseType = 'arraybuffer';
    const mediaType = 'application/pdf';
    const url = this.apiUrl + 'report';
    this.http.get(url, { headers: httpHeaders , params: httpParams , responseType } )
      .subscribe(content => {
        const blob = new Blob([content], {type: mediaType});
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
      });
  }
}
