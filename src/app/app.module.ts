import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationexampleComponent } from './interpolationexample/interpolationexample.component';
import { EventbindingexampleComponent } from './eventbindingexample/eventbindingexample.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationexampleComponent,
    EventbindingexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
