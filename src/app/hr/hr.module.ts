import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrRoutingModule } from './hr-routing.module';
import { HrIndexComponent } from './components/hr-index/hr-index.component';

@NgModule({
  declarations: [],
  imports: [
    HrIndexComponent,
    CommonModule,
    HrRoutingModule
  ],
  exports: [
    HrIndexComponent
  ]
})
export class HrModule { }
