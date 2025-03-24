import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../service/food.service';
import { apiResponseModel } from '../classes/restaurant.model';

@Component({
  selector: 'app-restaurant-food-item',
  templateUrl: './restaurant-food-item.component.html',
  styleUrls: ['./restaurant-food-item.component.css']
})
export class RestaurantFoodItemComponent {
  
  categoryId: number = 0;
  restaurantId: number = 0;
  fooditemList: any[] = [];
  loggedUserData: any;
  cartItems: any[] = [];
  totalAmount: number = 0;
  deliveryAddress: string = '';
  Id!: number;

  constructor(private activatedroute: ActivatedRoute, private foodService: FoodService) {

    this.activatedroute.params.subscribe((res:any) => {
      //debugger;
      this.categoryId = res.categoryId;
      this.restaurantId = res.restaurantId;
      this.GetFoodItemOfRestaurantByCategory();

      const localdata = localStorage.getItem('foodie_user');
        if(localdata != null) {
          this.loggedUserData = JSON.parse(localdata);
        }
      this.GetCartItemsByCustomerIdForRestaurant();
    })
    //if(isLocalData != null && isLocalData !== 'undefined')
  }

  GetFoodItemOfRestaurantByCategory() {
    this.foodService.GetFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId).subscribe((res: apiResponseModel) => {
      this.fooditemList = res.data;
      console.log(this.fooditemList);
    })
  }

  GetCartItemsByCustomerIdForRestaurant() {
    this.foodService.GetCartItemsByCustomerIdForRestaurant(this.loggedUserData.userId, this.restaurantId).subscribe((res: apiResponseModel) => {
      this.cartItems = res.data;
      this.cartItems.forEach(element => {
        this.totalAmount = this.totalAmount + element.price;
      });
    })
      
  }

  addToCart(itemId: number) {
    const localdata = localStorage.getItem('foodie_user');
    if(localdata == null) {
      alert('please Login');
    } else {
      this.loggedUserData = JSON.parse(localdata);
      const cartobj = {
        
        "customerId": this.loggedUserData.userId,
        "itemId": itemId,
        "quantity": 1
      };
      this.foodService.addtoCart(cartobj).subscribe((res: apiResponseModel) => {
        if(res.result) {
          alert('item added');
          this.GetCartItemsByCustomerIdForRestaurant();
        }else {
          alert('item not added');
        }
      })
    }
  }

  onOrder() {
     const obj = {
        
      "userId": this.loggedUserData.userId,
      "totalAmount": this.totalAmount,
      "restaurantId": this.restaurantId,
      "deliveryAddress": this.deliveryAddress
    };

    this.foodService.placeOrder(obj).subscribe((res: apiResponseModel) => {
      if(res.result) {
        alert('Order placed Successfully');
        this.GetCartItemsByCustomerIdForRestaurant();
        this.deliveryAddress = '';
        this.totalAmount = 0;
      }else {
        alert('Order placement unsuccessfull.');
      }
    })
    

  }

}
