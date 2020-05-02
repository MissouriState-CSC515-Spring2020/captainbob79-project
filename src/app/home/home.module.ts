import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { MainScreenComponent } from '../main-screen/main-screen.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModuleModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: MainScreenComponent
    }])
  ]
})
export class HomeModule { }
