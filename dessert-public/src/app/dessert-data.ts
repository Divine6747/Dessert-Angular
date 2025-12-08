import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dessert } from './dessert-list/dessert-list';

@Injectable({
  providedIn: 'root'
})
export class DessertDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // In dessert-data.service.ts
public getDesserts(): Promise<Dessert[]> {
  const url: string = `${this.apiBaseUrl}/dessert`;
  console.log('Service: Making request to URL:', url);
  
  return this.http
    .get(url)
    .toPromise()
    .then(response => {
      console.log('Service: API response received');
      console.log('Service: Response type:', typeof response);
      console.log('Service: Response data:', response);
      return response as Dessert[];
    })
    .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.log('Service: Error occurred');
  console.log('Service: Error object:', error);
  if (error.status) {
    console.log('Service: HTTP Status:', error.status);
  }
  if (error.message) {
    console.log('Service: Error message:', error.message);
  }
  return Promise.reject(error.message || error);
}
}