import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { HorrorScreenComponent } from '../genre-components/horror-screen/horror-screen.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModuleModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: HorrorScreenComponent
    }])
  ]
})
export class HorrorModule { }
