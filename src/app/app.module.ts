import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';

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
    ServiceComponent,
    SpaComponent,
    SportComponent,
    FindBooingInfoComponent,
    BookNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
