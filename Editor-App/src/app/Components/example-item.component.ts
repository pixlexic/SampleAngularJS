import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SampleItemModel } from '../Models/sample-item-model';

@Component({
  selector: 'app-example-item',
  templateUrl: '../Html/example-item.component.html',
  styleUrls: ['../Css/example-item.component.css']
})
export class ExampleItemComponent {

  @Input() public  SampleItem: SampleItemModel = new SampleItemModel();
  @Output() public _selectEvent: EventEmitter<SampleItemModel> = new EventEmitter<SampleItemModel>();




  setCurrent() {

    this._selectEvent.emit(this.SampleItem);

  }

}
