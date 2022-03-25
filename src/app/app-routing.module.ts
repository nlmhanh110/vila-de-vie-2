import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { HomeComponent } from './home/home.component';
import { BookNowComponent } from './book-now/book-now.component';
import { FindBooingInfoComponent } from './find-booing-info/find-booing-info.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PoolComponent } from './pool/pool.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ServiceComponent } from './service/service.component';
import { SpaComponent } from './spa/spa.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'anniversary', component:AnniversaryComponent},
  {path: 'home', component:HomeComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'book-now', component: BookNowComponent },
  { path: 'find-booking-info', component: FindBooingInfoComponent },
  { path: 'pool', component: PoolComponent },
  { path: 'spa', component: SpaComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'sport', component: SportComponent },
  { path: 'restaurant', component: RestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
