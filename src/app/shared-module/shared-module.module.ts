import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionScreenComponent } from '../genre-components/action-screen/action-screen.component';
import { MainScreenComponent } from '../main-screen/main-screen.component';
import { DetailScreenComponentComponent } from '../detail-screen-component/detail-screen-component.component';
import { DramaScreenComponent } from '../genre-components/drama-screen/drama-screen.component';
import { HorrorScreenComponent } from '../genre-components/horror-screen/horror-screen.component';



@NgModule({
  declarations: [
    MainScreenComponent,
    DetailScreenComponentComponent,
    ActionScreenComponent,
    DramaScreenComponent,
    HorrorScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainScreenComponent,
    DetailScreenComponentComponent,
    ActionScreenComponent,
    DramaScreenComponent,
    HorrorScreenComponent
  ]
})
export class SharedModuleModule { }
