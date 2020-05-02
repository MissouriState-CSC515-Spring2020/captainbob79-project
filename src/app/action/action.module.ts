import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ActionScreenComponent } from '../genre-components/action-screen/action-screen.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModuleModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: ActionScreenComponent
    }])
  ]
})
export class ActionModule { }
