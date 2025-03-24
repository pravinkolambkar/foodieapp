import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiResponseModel, Restaurant, Menu } from '../components/classes/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  apiEndPoint: string = "https://freeapi.gerasim.in/api/zomato/"
  
    constructor(private http: HttpClient) {

     }

    getAllmenu(): Observable<apiResponseModel> {
      return this.http.get<apiResponseModel>(this.apiEndPoint + "GetAllMenu");
 }

    //Api for add, update Menuitem not working

    addMenu(obj: Menu): Observable<apiResponseModel> {
      return this.http.post<apiResponseModel>(this.apiEndPoint + "AddBulkMenuItems", obj);
    }

    updateMenu(obj: Menu): Observable<apiResponseModel> {
      return this.http.put<apiResponseModel>(this.apiEndPoint + "UpdateMenu", obj);
  }

    deleteMenu(id:number): Observable<apiResponseModel> {
    return this.http.delete<apiResponseModel>(this.apiEndPoint + "DeleteMenuByRestaurantId?itemId=" + id);
  }
  

    getAllRestaurants(): Observable<apiResponseModel> {
       return this.http.get<apiResponseModel>(this.apiEndPoint + "GetAllRestaurant");
  }

    addRestaurant(obj: Restaurant): Observable<apiResponseModel> {
      return this.http.post<apiResponseModel>(this.apiEndPoint + "AddNewRestaurant", obj);
  }

    updateRestaurant(obj: Restaurant): Observable<apiResponseModel> {
      return this.http.put<apiResponseModel>(this.apiEndPoint + "UpdateRestaurant", obj);
    }

    deleteRestaurant(id:number): Observable<apiResponseModel> {
      return this.http.delete<apiResponseModel>(this.apiEndPoint + "DeleteRestaurantByRestaurantId?restaurantId=" + id);
    }
}
