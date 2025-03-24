import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResponseModel } from '../components/classes/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  //apiEndPoint: string = "https://freeapi.miniprojectideas.com/api/zomato/";
  apiEndPoint: string = "https://freeapi.gerasim.in/api/zomato/";
  //apiEndPoint: string = "http://localhost:3000/";
  

  constructor(private http: HttpClient) { }

  getAllFoods(): Observable<apiResponseModel> {
   return this.http.get<apiResponseModel>(this.apiEndPoint + "GetAllFoodCategory");
  }

  GetRestaurantServingByCategoryId(foodCategoryId: number): Observable<apiResponseModel> {
    return this.http.get<apiResponseModel>(this.apiEndPoint + 'GetRestaurantServingByCategoryId?categoryId=' + foodCategoryId);
  };

  GetFoodItemOfRestaurantByCategory(restaurantId: number, categoryId: number ): Observable<apiResponseModel> {
    return this.http.get<apiResponseModel>(this.apiEndPoint + 'GetFoodItemOfRestaurantByCategory?restaurantId=' + restaurantId + '&categoryId=' + categoryId);
  }

  onRegister(obj: any) : Observable<apiResponseModel>{
    return this.http.post<apiResponseModel>(this.apiEndPoint + 'AddNewUser', obj);
  }

  onLogin(obj: any) : Observable<apiResponseModel>{
    return this.http.post<apiResponseModel>(this.apiEndPoint + 'Login', obj);
  }

  addtoCart(obj: any) : Observable<apiResponseModel>{
    return this.http.post<apiResponseModel>(this.apiEndPoint + 'AddToCart', obj);
  }

  GetCartItemsByCustomerIdForRestaurant(custId: number,restId: number) {
    return this.http.get<apiResponseModel>(this.apiEndPoint + 'GetCartItemsByCustomerIdForRestaurant?customerId=' + custId + '&restaurantId=' + restId);
  }

  placeOrder(obj: any) : Observable<apiResponseModel>{
    return this.http.post<apiResponseModel>(this.apiEndPoint + 'AddNewOrder', obj);
  }
}

// https://freeapi.gerasim.in/api/zomato/GetRestaurantServingByCategoryId?categoryId=14, 15, 18, 25
//https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemOfRestaurantByCategory?restaurantId=1&categoryId=14
//GetCartItemsByCustomerIdForRestaurant?customerId=12&restaurantId=3, 15-3, 1-3
