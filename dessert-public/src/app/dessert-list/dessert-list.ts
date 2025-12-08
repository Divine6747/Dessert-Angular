import { Component, OnInit } from '@angular/core';
import { DessertDataService } from '../dessert-data';

export class Dessert {
  _id!: string;
  name!: string;
  image!: string;
  rating!: number;
  ratingText!: string;
  reviewCount!: number;
  description!: string;
  ingredients!: Array<{
    _id: string;
    name: string;
    description: string;
  }>;
  steps!: string[];
}

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.html',
  styleUrls: ['./dessert-list.css'],
  standalone: false
})
export class DessertList implements OnInit {
  desserts: Dessert[] = [];

  constructor(private dessertDataService: DessertDataService) { }

  private getDesserts(): void {
    console.log('getDesserts() called');
  
  this.dessertDataService
    .getDesserts()
    .then((foundDesserts: Dessert[]) => {
      console.log('Got desserts:', foundDesserts);
      console.log('Number of desserts:', foundDesserts.length);
      if (foundDesserts.length > 0) {
        console.log('First dessert:', foundDesserts[0]);
        console.log('First dessert keys:', Object.keys(foundDesserts[0]));
      }
      this.desserts = foundDesserts;
    })
    .catch((error: any) => {
      console.error('Error fetching desserts:', error);
      this.desserts = [];
    });
  }

  ngOnInit() {
    this.getDesserts();  // Call on initialization
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}