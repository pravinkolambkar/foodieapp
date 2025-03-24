import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { apiResponseModel, Restaurant } from '../classes/restaurant.model';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css'],
    standalone: false
})
export class RestaurantsComponent implements OnInit{
  newRestaurant: Restaurant = new Restaurant();
  restaurantList: any[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadAllRestaurants();
  }

  loadAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe((res:apiResponseModel) => {
      console.log(res.data);
      this.restaurantList = res.data;
    })
  } 

  onReset() {
    this.newRestaurant = new Restaurant();
  }

  onRegister() {
    this.restaurantService.addRestaurant(this.newRestaurant).subscribe((res:apiResponseModel) => {
      if(res.result) {
        alert('Registration Successsful');
        console.log(res.data);
      } else {
        alert(res.message)
      }
    }, error => {
      alert(JSON.stringify(error))
    });
  }

  onUpdate() {
    this.restaurantService.updateRestaurant(this.newRestaurant).subscribe((res:apiResponseModel) => {
      if(res.result) {
        alert('Update Successsful');
        console.log(res.data);
      }
    }, error => {
      alert(JSON.stringify(error))
    });
  }

  onEdit(data: Restaurant) {
    this.newRestaurant = data;
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you really want to delete?') ;

    if(isDelete) {
      this.restaurantService.deleteRestaurant(id).subscribe((res:apiResponseModel) => {
        
        this.restaurantList = res.data;
        alert('Delete Successsful');
          console.log(res.data);
          this.loadAllRestaurants();
      })
    };
  }
}

