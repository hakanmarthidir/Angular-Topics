import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from 'src/services/app-config.service';
import { LoggingService } from 'src/services/logging.service';
import { provideBootstrapEffects } from 'src/core/config-effect-manager';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


export function initializeApp(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
  ],
  providers: [
    LoggingService,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    },
    provideBootstrapEffects([
      // AbcEffects,
      // XyzEffects
      //Note : Effects will load after APP_INIT
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
