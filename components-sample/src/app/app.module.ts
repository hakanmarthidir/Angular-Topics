import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './interaction-sample/parent/parent.component';
import { ChildComponent } from './interaction-sample/child/child.component';
import { ChildchangeComponent } from './interaction-ngonchange-sample/childchange/childchange.component';
import { ParentchangeComponent } from './interaction-ngonchange-sample/parentchange/parentchange.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChildchangeComponent,
    ParentchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
