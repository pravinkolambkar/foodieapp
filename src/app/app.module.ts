import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodsComponent } from './components/foods/foods.component';
import { RestaurantServingFoodComponent } from './components/restaurant-serving-food/restaurant-serving-food.component';
import { RestaurantFoodItemComponent } from './components/restaurant-food-item/restaurant-food-item.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { MenuComponent } from './components/menu/menu.component';
import { FilterpipePipe } from './pipe/filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    RestaurantServingFoodComponent,
    RestaurantFoodItemComponent,
    RestaurantsComponent,
    MenuComponent,
    FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
