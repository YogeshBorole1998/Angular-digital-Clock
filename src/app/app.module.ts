import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';


@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
