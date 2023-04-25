import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

    restaurant: Restaurant = new Restaurant();
    /*constructor is a method in a ts class that automaticallly gets called when the cls is being instatiatd and also usd for inject dependencies/services into the component cls*/
     constructor(private restaurantService:RestaurantService,
      private router: Router) { }
  
    ngOnInit(): void {
    }
  /* In this method calling an restaurant service cls and also invoke the createrestaurant */ 
     saveRestaurant(){
      var status=confirm("Created successfully");
      this.restaurantService.createRestaurant(this.restaurant).subscribe( data =>{
        console.log(data);
        this.goToRestaurantList();
      },
         error => console.log(error));
    }
  
    goToRestaurantList(){
      this.router.navigate(['restaurant']);
    }
  
    onSubmit(){
      console.log(this.restaurant);
      this.saveRestaurant();
    }
  }
  

