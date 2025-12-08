import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  reviews!: any[];
}

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.html',
  styleUrls: ['./dessert-list.css'],
  standalone: false
})
export class DessertListComponent implements OnInit {
  desserts: Dessert[] = [];

  constructor(
    private dessertDataService: DessertDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  private getDesserts(): void {
    this.dessertDataService
      .getDesserts()
      .then((foundDesserts: Dessert[]) => {
        this.desserts = foundDesserts.map(dessert => ({
          ...dessert,
          image: this.getFullImageUrl(dessert.image)
        }));
        this.cdRef.detectChanges();
      })
      .catch((error: any) => {
        console.error('Error:', error);
        this.desserts = [];
        this.cdRef.detectChanges();
      });
  }

  private getFullImageUrl(imagePath: string): string {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `http://localhost:3000${imagePath}`;
  }

  ngOnInit() {
    this.getDesserts();
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}