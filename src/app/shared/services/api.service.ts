import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



// https://www.youtube.com/watch?v=829ZO-bAvPA

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_OTP_URL = "http://localhost:8080/AgfaCsServer/checkLoginDetails/generateOTP?hosid=1&patid=2&styid=3&mobno=1390000";

  readonly API_IDENTIFINUM_URL = "http://localhost:8080/AgfaCsServer/checkLoginDetails/generateOTP?hosid=1&patid=2&styid=3&mobno=1390000";

  constructor(private _httpClient: HttpClient) { }


  getOtpNum(): Observable<any> {
    // Tried adding headers with no luck
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    return this._httpClient.get<any>(this.API_OTP_URL, { 'headers': httpHeaders })
      .map(response => response.json());

  }

  getIdentificNum(num: any): Observable<any> {
    return this._httpClient.get<any>(this.API_IDENTIFINUM_URL + num)
      .map(response => response.json());
  }

  // getOtpNum(): Observable<any> {
  //   return this._httpClient.get<any>(this.API_OTP_URL);
  // }

}
