import { Injectable } from '@angular/core';
import { HomeComponent } from '../Views/home.component';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {




  constructor()
  {

    NavigationService.viewlist = [
      { view: 'HOME', comp: HomeComponent},

      ];



  }






}
