import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { MeetingComponent } from './meeting/meeting.component';
import { WeddingComponent } from './wedding/wedding.component';
import { MeetingCelebrationComponent } from './meeting-celebration/meeting-celebration.component';
import { MeetnceleRequestComponent } from './meetncele-request/meetncele-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { HttpClientModule } from'@angular/common/http';
import { OfferRoomComponent } from './offer-room/offer-room.component';
import { ReservationComponent } from './reservation/reservation.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AnniversaryComponent,
    MeetingComponent,
    WeddingComponent,
    MeetingCelebrationComponent,
    MeetnceleRequestComponent,
    RoomDetailComponent,
    OfferRoomComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
