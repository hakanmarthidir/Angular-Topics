import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildchangeComponent } from './interaction-ngonchange-sample/childchange/childchange.component';
import { ParentchangeComponent } from './interaction-ngonchange-sample/parentchange/parentchange.component';
import { ParentoutputComponent } from './interaction-output-sample/parentoutput/parentoutput.component';
import { ChildoutputComponent } from './interaction-output-sample/childoutput/childoutput.component';
import { ParentinputComponent } from './interaction-input-sample/parentinput/parentinput.component';
import { ChildinputComponent } from './interaction-input-sample/childinput/childinput.component';
import { ParentlocalComponent } from './interaction-parent-child-localvariable/parentlocal/parentlocal.component';
import { ChildlocalComponent } from './interaction-parent-child-localvariable/childlocal/childlocal.component';
import { ChildviewComponent } from './interaction-with-viewchild/childview/childview.component';
import { ParentviewComponent } from './interaction-with-viewchild/parentview/parentview.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentinputComponent,
    ChildinputComponent,
    ChildchangeComponent,
    ParentchangeComponent,
    ParentoutputComponent,
    ChildoutputComponent,
    ParentlocalComponent,
    ChildlocalComponent,
    ChildviewComponent,
    ParentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
