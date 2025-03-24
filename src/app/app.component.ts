import { Component } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  
  registerObj: any = {
    "userId": 0,
    "userName": "",
    "role": "Customer",
    "password": "",
    "mobileNo": "",
    "emailId": "",  
    "restaurantId": 0
  }

  loginObj: any =  {
    "userName": "",
    "password": ""
  }
  loggedUserData: any;

  constructor(private foodService: FoodService) {
    const isLocalData = localStorage.getItem('foodie_user');//can use foodie_user if not null
      if(isLocalData != null) {
        this.loggedUserData = JSON.parse(isLocalData);
      } 
  }

  onLogoff() {
    localStorage.removeItem('foodie_user');//can use foodie_user if not null
    this.loggedUserData = null;
  }

  onLogin() {
    const modal = document.getElementById('loginModal');
    if(modal != null) {
      modal.style.display = 'block'
    }
  }

  onRegister() {
    const modal = document.getElementById('registerModal');
    if(modal != null) {
      modal.style.display = 'block'
    }
  }

  closeLogin() {
    const modal = document.getElementById('loginModal');
    if(modal != null) {
      modal.style.display = 'none'
    }
  }

  closeRegister() {
    const modal = document.getElementById('registerModal');
    if(modal != null) {
      modal.style.display = 'none'
    }
  }

  onLoginForm() {
    this.foodService.onLogin(this.loginObj).subscribe((res: any) => {
        if(res.result) {
          this.closeLogin();
          alert('Login Successful');
          localStorage.setItem('foodie_user', JSON.stringify(res.data));//can use foodie_user if not null
          this.loggedUserData = res.data;
        } else {
          alert('Login unSuccessful');
        }
    })
  }

  onCustomerReg() {
    this.foodService.onRegister(this.registerObj).subscribe((res: any) => {
        if(res.result) {
          this.closeRegister();
          alert('Registration Successful');
          localStorage.setItem('foodie_user', JSON.stringify(res.data));//can use foodie_user if not null
          this.loggedUserData = res.data;
        } else {
          alert('Registration unSuccessful');
        }
    })
  }
}
