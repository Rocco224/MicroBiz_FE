import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesIndexComponent } from './components/sales-index/sales-index.component';

@NgModule({
  declarations: [],
  imports: [
    SalesIndexComponent,
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
