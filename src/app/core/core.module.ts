import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  
  imports: [
    CoreRoutingModule,
    RouterModule,
    SharedModule,
  ],
  providers: [],
  exports: [HeaderComponent],
})
export class CoreModule {}
