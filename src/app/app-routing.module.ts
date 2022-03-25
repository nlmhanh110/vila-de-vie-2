import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { HomeComponent } from './home/home.component';
import { MeetingComponent } from './meeting/meeting.component';
import { WeddingComponent } from './wedding/wedding.component';
import { MeetingCelebrationComponent } from './meeting-celebration/meeting-celebration.component';
import { MeetnceleRequestComponent } from './meetncele-request/meetncele-request.component';
import { OfferRoomComponent } from './offer-room/offer-room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'anniversary', component:AnniversaryComponent},
  {path: 'home', component:HomeComponent},
  {path: 'meeting', component:MeetingComponent},
  {path: 'wedding', component:WeddingComponent},
  {path: 'wedding', component:WeddingComponent},
  {path: 'meeting-celebration', component:MeetingCelebrationComponent},
  {path: 'meetncele-request', component:MeetnceleRequestComponent},
  {path: 'rooms/:id',component:RoomDetailComponent},
  {path: 'offerRoom',component:OfferRoomComponent},
  {path: 'reservation',component:ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
