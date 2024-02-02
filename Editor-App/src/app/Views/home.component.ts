import { Component } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { SampleItemModel } from '../Models/sample-item-model';
import { DataReturn } from '../Models/data-return';

@Component({
  selector: 'app-home',
  templateUrl: '../Html/home.component.html',
  styleUrls: ['../Css/home.component.css']
})
export class HomeComponent {


     _dataReturn: DataReturn = new DataReturn();

  constructor(
    private _apiServive: ApiService
  ) { }



  ngAfterViewInit() {

    this.getItems();

  }



  getItems() {

    this._apiServive.GetItems().subscribe({
      next: (data: any) => this.setItemsData(data),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }

  setItemsData(x: any) {
    this._dataReturn = x;

  }




}
