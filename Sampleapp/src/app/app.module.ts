import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoontootlaComponent } from './noontootla/noontootla.component';
import { NimblewillComponent } from './nimblewill/nimblewill.component';

@NgModule({
  declarations: [
    AppComponent,
    NoontootlaComponent,
    NimblewillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
