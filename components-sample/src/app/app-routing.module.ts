import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentchangeComponent } from './interaction-ngonchange-sample/parentchange/parentchange.component';
import { ParentoutputComponent } from './interaction-output-sample/parentoutput/parentoutput.component';
import { ParentinputComponent } from './interaction-input-sample/parentinput/parentinput.component';

const routes: Routes = [
{ path: 'parentinput', component: ParentinputComponent },
{ path: 'parentchange', component: ParentchangeComponent },
{ path: 'parentoutput', component: ParentoutputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
