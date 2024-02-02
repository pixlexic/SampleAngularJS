import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { SampleItemModel } from '../Models/sample-item-model';
import { PieChartComponent } from './pie-chart.component';


@Component({
  selector: 'app-example-form',
  templateUrl: '../Html/example-form.component.html',
  styleUrls: ['../Css/example-form.component.css']
})
export class ExampleFormComponent {

  @ViewChild('piecht', { read: PieChartComponent }) piecht!: PieChartComponent;
  @Input() public  SampleItemList: Array<SampleItemModel> =[];

    _odd:boolean = true;

    _currentItem:SampleItemModel = new SampleItemModel();





  setOdd()
  {

    if(this._odd == true)
    {
      this._odd = false;
    }  else {
      this._odd = true;
    }


  }

  setCSS() {

     this.setOdd();

    if(this._odd == true)
    {
     return 'shadeColorA '
    } else {
     return 'shadeColorAB '
    }

   }


   setChg() {
    this.piecht.redraw(this._currentItem);
   }

   setCurrentItem(x: SampleItemModel) {

    this._currentItem = x;

    this.piecht.redraw(x);

   }

}
