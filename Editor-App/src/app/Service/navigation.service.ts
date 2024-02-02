import { Injectable, ViewContainerRef  } from '@angular/core';
import { HeaderItem } from '../Models/header-item';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  static viewlist:Array<HeaderItem> =  [];
  static current_step:any;

  constructor() { }




  initload( v: any ) {

    if ( GlobalService.viewParent ) {
      //  const childComponent = this.viewContainerRef.createComponent( v.comp );
        GlobalService.viewParent.createComponent( v.comp );
    }
}


  setview( v: any ) {

    for ( let i = 0; i < NavigationService.viewlist.length; i++ ) {
        if ( v === NavigationService.viewlist[i].view ) {
           GlobalService.viewParent.clear();
            NavigationService.current_step = NavigationService.viewlist[i];

            this.initload( NavigationService.viewlist[i] );
        }


    }


}



}
