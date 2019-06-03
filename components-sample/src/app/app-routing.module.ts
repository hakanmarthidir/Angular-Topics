import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentchangeComponent } from './interaction-ngonchange-sample/parentchange/parentchange.component';
import { ParentoutputComponent } from './interaction-output-sample/parentoutput/parentoutput.component';
import { ParentinputComponent } from './interaction-input-sample/parentinput/parentinput.component';
import { ParentlocalComponent } from './interaction-parent-child-localvariable/parentlocal/parentlocal.component';
import { ParentviewComponent } from './interaction-with-viewchild/parentview/parentview.component';
import { ParentserviceComponent } from './interaction-via-services/parentservice/parentservice.component';

const routes: Routes = [
{ path: 'parentinput', component: ParentinputComponent },
{ path: 'parentchange', component: ParentchangeComponent },
{ path: 'parentoutput', component: ParentoutputComponent },
{ path: 'parentlocal', component: ParentlocalComponent },
{ path: 'parentview', component: ParentviewComponent },
{ path: 'parentservice', component: ParentserviceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
