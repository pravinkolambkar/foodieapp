import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
import { apiResponseModel, Menu } from '../classes/restaurant.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: false
})
export class MenuComponent implements OnInit {

  menuList: any[] = [];
  newMenu: Menu = new Menu();
  filtername: string = '';

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getAllMenu();
  }

  getAllMenu() {
    this.restaurantService.getAllmenu().subscribe((res: apiResponseModel) => {
      this.menuList = res.data;
      console.log(res.data);
    })
  }

  //Api for edit Menuitem not working

  onEdit(data: Menu) {
    this.newMenu = data;
    console.log(data);
  }

  onDelete(id: number) {
      const isDelete = confirm('Are you really want to delete Menu?') ;
  
      if(isDelete) {
        this.restaurantService.deleteMenu(id).subscribe((res:apiResponseModel) => {
          
          this.menuList = res.data;
          alert('Menu delete Successsful');
            console.log(res.data);
            this.getAllMenu();
        })
      };
    }

      //Api for add Menuitem not working
  onAdd() {
    this.restaurantService.addMenu(this.newMenu).subscribe((res: apiResponseModel) => {
      if (res.result) {
        alert('Menu added successfully');
        console.log(res.data);
      }else {
        alert(res.message)
      }
    }, error => {
      alert(JSON.stringify(error))
    })
  }

    //Api for update Menuitem not working
  onUpdate() {
    this.restaurantService.updateMenu(this.newMenu).subscribe((res: apiResponseModel) => {
      if (res.result) {
        alert('Update Successful');
        this.getAllMenu();
      }else {
        alert(res.message)
      }
    }, error => {
      alert(JSON.stringify(error))
    });
  }

  onReset() {
    this.newMenu = new Menu();
  }
}
