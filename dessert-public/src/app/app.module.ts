import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { App } from './app';
import { DessertList } from './dessert-list/dessert-list';
import { DessertDataService } from './dessert-data'; 

@NgModule({
  declarations: [
    App,
    DessertList
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DessertDataService],
  bootstrap: [App]
})
export class AppModule { }
