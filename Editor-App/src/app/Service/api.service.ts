import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private htx: HttpXsrfTokenExtractor

  ) { }



  public GetItems() {

    return this.http.get<any>(GlobalService.parentURL + '/api/example/getitems').pipe(map((res: Response) => res));

  }








}
