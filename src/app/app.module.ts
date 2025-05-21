import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CenterComponent } from './center/center.component';
import { GuestsComponent } from './guests/guests.component';
import { UspComponent } from './usp/usp.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormsModule } from '@angular/forms';
import { RoomDetailComponent } from './roomdetail/roomdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CenterComponent,
    GuestsComponent,
    UspComponent,
    FooterComponent,
    HotelsComponent,
    HomeComponent,
    RoomsComponent,
    RoomDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
