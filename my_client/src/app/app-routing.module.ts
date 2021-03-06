import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnniversaryComponent } from './components/anniversary/anniversary.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { FindBookingInfoComponent } from './components/find-booking-info/find-booking-info.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { MeetingCelebrationComponent } from './components/meeting-celebration/meeting-celebration.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { MeetnceleRequestComponent } from './components/meetncele-request/meetncele-request.component';
import { OfferRoomComponent } from './components/offer-room/offer-room.component';
import { PhongbinhthuongComponent } from './components/phongbinhthuong/phongbinhthuong.component';
import { PoolComponent } from './components/pool/pool.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import { ServiceComponent } from './components/service/service.component';
import { SpaComponent } from './components/spa/spa.component';
import { SportComponent } from './components/sport/sport.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { NewsComponent } from './components/news/news.component';
import { PolicyComponent } from './components/policy/policy.component';
import { CareerComponent } from './components/career/career.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { PhongcaocapComponent } from './components/phongcaocap/phongcaocap.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'anniversary', component:AnniversaryComponent},
  {path: 'home', component:HomeComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'book-now', component: BookNowComponent },
  { path: 'find-booking-info', component:FindBookingInfoComponent },
  { path: 'booking-info/:id', component:BookingInfoComponent },
  { path: 'pool', component: PoolComponent },
  { path: 'spa', component: SpaComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'sport', component: SportComponent },
  { path: 'restaurant', component: RestaurantComponent },
  {path: 'rooms/:id',component:RoomDetailComponent},
  {path: 'offerRoom',component:OfferRoomComponent},
  {path: 'reservation',component:ReservationComponent},
  {path: 'phongbinhthuong',component:PhongbinhthuongComponent},
  {path: 'phongcaocap',component:PhongcaocapComponent},
  {path: 'career',component:CareerComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'meeting', component:MeetingComponent},
  {path: 'wedding', component:WeddingComponent},
  {path: 'meeting-celebration', component:MeetingCelebrationComponent},
  {path: 'meetncele-request', component:MeetnceleRequestComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'news', component:NewsComponent},
  {path: 'policy', component:PolicyComponent},
  {path: 'introduction', component:IntroductionComponent},
  {path: 'feedback',component:FeedbackComponent},
  {path:'gallery',component:GalleryComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
