import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DetailScreenComponentComponent } from './detail-screen-component/detail-screen-component.component';
import { ActionScreenComponent } from './genre-components/action-screen/action-screen.component';
import { DramaScreenComponent } from './genre-components/drama-screen/drama-screen.component';
import { HorrorScreenComponent } from './genre-components/horror-screen/horror-screen.component';


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
  { path: "details/:id", 
    component: DetailScreenComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
