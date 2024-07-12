import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryIndexComponent } from './components/inventory-index/inventory-index.component';

const routes: Routes = [
  { path: 'index', component: InventoryIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
