import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryIndexComponent } from './components/inventory-index/inventory-index.component';

@NgModule({
  declarations: [],
  imports: [
    InventoryIndexComponent,
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
