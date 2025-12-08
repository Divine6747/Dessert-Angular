import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { DessertListComponent } from './dessert-list/dessert-list';
import { DessertDataService } from './dessert-data';

@NgModule({
  declarations: [
    App,
    DessertListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DessertDataService],
  bootstrap: [App]
})
export class AppModule { }