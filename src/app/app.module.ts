import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DetailScreenComponentComponent } from './detail-screen-component/detail-screen-component.component';
import { ActionScreenComponent } from './action-screen/action-screen.component';
import { DramaScreenComponent } from './drama-screen/drama-screen.component';
import { HorrorScreenComponent } from './horror-screen/horror-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    DetailScreenComponentComponent,
    ActionScreenComponent,
    DramaScreenComponent,
    HorrorScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
