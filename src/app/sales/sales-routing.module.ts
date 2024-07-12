import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesIndexComponent } from './components/sales-index/sales-index.component';

const routes: Routes = [
  { path: 'index', component: SalesIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
