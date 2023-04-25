import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'restaurant', component: RestaurantListComponent},
  {path: 'create-restaurant', component: CreateRestaurantComponent},
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path:'login-page',component: LoginPageComponent},
  {path:'home-page',component: HomePageComponent},
  {path:'logout-page',component: LogoutPageComponent},
  {path: 'update-restaurant/:id', component: UpdateRestaurantComponent},
  {path: 'restaurant-details/:id', component: RestaurantDetailsComponent},
  {path:'feedback-page',component:FeedbackPageComponent},
  {path:'profilecard',component:ProfilecardComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'sign-up',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
