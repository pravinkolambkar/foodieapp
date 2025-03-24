export class Restaurant {
    restaurantID: number;
    name: string;
    cuisineType: string;
    address: string;
    contactNo: string;
    openingHours: string;

    constructor() {
        this.restaurantID = 0;
        this.name = '';
        this.cuisineType = '';
        this.address = '';
        this.contactNo = '';
        this.openingHours = '';
    }
}

export class Menu {
    itemID: number;
    restaurantID: number;
    menuItemName: string;
    categoryName: string;
    restaurantName: string;
    description: string;
    price: number;
    availability: boolean;
    photoUrl: string;

    constructor() {
        this.itemID = 0;
        this.restaurantID = 0;
        this.menuItemName = '';
        this.categoryName = '';
        this.restaurantName = '';
        this.description = '';
        this.price = 0;
        this.availability = false;
        this.photoUrl = '';
    }
}


export interface apiResponseModel {
    message: string;
    result: boolean;
    data: any;
}