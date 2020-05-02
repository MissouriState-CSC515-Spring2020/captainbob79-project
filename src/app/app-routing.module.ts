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
  { path: "details/:id", 
    component: DetailScreenComponentComponent
  },
  { path: 'action', loadChildren: () => import('./action/action.module').then(m => m.ActionModule) },
  { path: 'horror', loadChildren: () => import('./horror/horror.module').then(m => m.HorrorModule) },
  { path: 'drama', loadChildren: () => import('./drama/drama.module').then(m => m.DramaModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
