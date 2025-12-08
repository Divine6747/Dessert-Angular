import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dessert } from './dessert-list/dessert-list';

@Injectable({
  providedIn: 'root'
})
export class DessertDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  public getDesserts(): Promise<Dessert[]> {
    const url: string = `${this.apiBaseUrl}/dessert`;
    
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Dessert[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}