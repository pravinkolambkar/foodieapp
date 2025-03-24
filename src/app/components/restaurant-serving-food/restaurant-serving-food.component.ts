import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';
import { Router } from '@angular/router';
import { apiResponseModel } from '../classes/restaurant.model';

@Component({
    selector: 'app-restaurant-serving-food',
    templateUrl: './restaurant-serving-food.component.html',
    styleUrls: ['./restaurant-serving-food.component.css'],
    standalone: false
})
export class RestaurantServingFoodComponent {

  currentCategoryId: number = 0;
  restaurantList: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, private router: Router) {
    
    this.activatedRoute.params.subscribe((res:any) => {
      this.currentCategoryId = res.id;
      this.GetRestaurantServingByCategoryId();
    })

  }

  GetRestaurantServingByCategoryId() {
    this.foodService.GetRestaurantServingByCategoryId(this.currentCategoryId).subscribe((res:apiResponseModel) => {
      this.restaurantList = res.data;
      console.log(this.restaurantList);
    })
  }

  navigate(restaurantId: number) {
    this.router.navigate(['restaurant-food-item',restaurantId,this.currentCategoryId]); 
  }
}
