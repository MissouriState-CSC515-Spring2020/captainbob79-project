import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DetailScreenComponentComponent } from './detail-screen-component/detail-screen-component.component';
import { ActionScreenComponent } from './genre-components/action-screen/action-screen.component';
import { DramaScreenComponent } from './genre-components/drama-screen/drama-screen.component';
import { HorrorScreenComponent } from './genre-components/horror-screen/horror-screen.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
