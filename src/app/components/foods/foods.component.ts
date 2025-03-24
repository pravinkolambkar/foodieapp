import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';
import { apiResponseModel } from '../classes/restaurant.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foodItems: any[] = [];
  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllFoodCategory();
  }

  loadAllFoodCategory() {
    this.foodService.getAllFoods().subscribe((res:apiResponseModel) => {
      console.log(res.data);
      this.foodItems = res.data;
    })
  }

  navigateToRestaurantFoods(categoryId: number) {
    this.router.navigate(['/restaurant-foods', categoryId])
  }
}
