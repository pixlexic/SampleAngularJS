import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { GlobalService } from './Service/global.service';
import { NavigationService } from './Service/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample-App';

  @ViewChild('parent', { read: ViewContainerRef }) parent!: ViewContainerRef;


  constructor(private navigation: NavigationService)
  {


  }



  ngAfterViewInit() {

    GlobalService.viewParent = this.parent;

    setTimeout(() => this.navigation.setview('HOME'), 600);

  }




}
