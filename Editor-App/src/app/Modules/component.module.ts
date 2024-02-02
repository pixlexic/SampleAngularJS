import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ExampleFormComponent } from '../Components/example-form.component';
import { ExampleItemComponent } from '../Components/example-item.component';
import { PieChartComponent } from '../Components/pie-chart.component';



@NgModule({
  declarations: [
    ExampleFormComponent,
    ExampleItemComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule



  ],
  exports: [
    MatButtonModule,
    ExampleFormComponent,
    ExampleItemComponent,
    PieChartComponent
  ]
})
export class ComponentModule { }
