import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrIndexComponent } from './components/hr-index/hr-index.component';

const routes: Routes = [
  { path: 'index', component: HrIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
