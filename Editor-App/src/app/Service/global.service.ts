import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  static appversion = '0.0.1';

  static parentURL = '';//'https://localhost:7235';

  static viewParent: ViewContainerRef;






  constructor() { }


}
