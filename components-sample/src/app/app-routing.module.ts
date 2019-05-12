import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './interaction-sample/parent/parent.component';
import { ParentchangeComponent } from './interaction-ngonchange-sample/parentchange/parentchange.component';

const routes: Routes = [
{ path: 'parent', component: ParentComponent },
{ path: 'parentchange', component: ParentchangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
