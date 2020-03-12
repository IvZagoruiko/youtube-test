import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlayerComponent } from './player/player.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { AngularPlayerComponent } from './angular-player/angular-player.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PlayerComponent,
    AngularPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
