import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../Service/global.service';
import { NavigationService } from '../Service/navigation.service';
import { InitService } from '../Service/init.service';
import { ApiService } from '../Service/api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
  GlobalService,
  NavigationService,
  InitService,
  ApiService
  ]
})
export class ServiceModule {


  constructor(
    public globalService: GlobalService,
    public initService: InitService
  ){}


}
