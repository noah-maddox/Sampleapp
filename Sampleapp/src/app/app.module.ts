import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoontootlaComponent } from './noontootla/noontootla.component';
import { NimblewillComponent } from './nimblewill/nimblewill.component';
import { HomeComponent } from './home/home.component';
import { OgdenComponent } from './ogden/ogden.component';
import { TriallakeComponent } from './triallake/triallake.component';
import { FirescreekComponent } from './firescreek/firescreek.component';
import { MillcreekComponent } from './millcreek/millcreek.component';
import { BigcottonindianComponent } from './bigcottonindian/bigcottonindian.component';
import { BlacksmithsforkleftComponent } from './blacksmithsforkleft/blacksmithsforkleft.component';
import { BlacksmithsforkComponent } from './blacksmithsfork/blacksmithsfork.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NoontootlaComponent,
    NimblewillComponent,
    HomeComponent,
    OgdenComponent,
    TriallakeComponent,
    FirescreekComponent,
    MillcreekComponent,
    BigcottonindianComponent,
    BlacksmithsforkleftComponent,
    BlacksmithsforkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
