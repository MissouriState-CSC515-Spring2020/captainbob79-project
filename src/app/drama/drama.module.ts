import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { DramaScreenComponent } from '../genre-components/drama-screen/drama-screen.component';

@NgModule({
  declarations: [],
  imports: [
    SharedModuleModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: DramaScreenComponent
    }])
  ]
})
export class DramaModule { }
