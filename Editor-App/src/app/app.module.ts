import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './Modules/component.module';
import { ServiceModule } from './Modules/service.module';
import { ViewModule } from './Modules/view.module';




@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentModule,
    ServiceModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
