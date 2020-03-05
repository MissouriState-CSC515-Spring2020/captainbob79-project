import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DetailScreenComponentComponent } from './detail-screen-component/detail-screen-component.component';
import { ActionScreenComponent } from './action-screen/action-screen.component';
import { DramaScreenComponent } from './drama-screen/drama-screen.component';
import { HorrorScreenComponent } from './horror-screen/horror-screen.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  { path: "home", 
    component: MainScreenComponent
  },
  { path: "action", 
    component: ActionScreenComponent
  },
  { path: "drama", 
    component: DramaScreenComponent
  },
  { path: "horror", 
    component: HorrorScreenComponent
  },
  { path: "details", 
    component: DetailScreenComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
