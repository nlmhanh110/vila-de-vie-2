import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnniversaryComponent } from './components/anniversary/anniversary.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PoolComponent } from './components/pool/pool.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { SpaComponent } from './components/spa/spa.component';
import { FindBookingInfoComponent } from './components/find-booking-info/find-booking-info.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { ServiceComponent } from './components/service/service.component';
import { SportComponent } from './components/sport/sport.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import { OfferRoomComponent } from './components/offer-room/offer-room.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { MeetingCelebrationComponent } from './components/meeting-celebration/meeting-celebration.component';
import { MeetnceleRequestComponent } from './components/meetncele-request/meetncele-request.component';
import { CareerComponent } from './components/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AnniversaryComponent,
    FeedbackComponent,
    GalleryComponent,
    PoolComponent,
    RestaurantComponent,
    SpaComponent,
    BookNowComponent,
    ServiceComponent,
    SportComponent,
    FindBookingInfoComponent,
    RoomDetailComponent,
    OfferRoomComponent,
    ReservationComponent,
    MeetingComponent,
    WeddingComponent,
    MeetingCelebrationComponent,
    MeetnceleRequestComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
