import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { ScullyLibModule } from '@scullyio/ng-lib';
import { ScullyInterceptModule } from 'scully-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ScullyLibModule,
    ScullyInterceptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
