import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Views/home.component';
import { ComponentModule } from './component.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentModule

  ],
  entryComponents: [
    HomeComponent
]
})
export class HomeModule { }
