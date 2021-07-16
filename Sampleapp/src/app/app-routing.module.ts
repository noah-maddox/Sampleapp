import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigcottonindianComponent } from './bigcottonindian/bigcottonindian.component';
import { BlacksmithsforkComponent } from './blacksmithsfork/blacksmithsfork.component';
import { BlacksmithsforkleftComponent } from './blacksmithsforkleft/blacksmithsforkleft.component';
import { FirescreekComponent } from './firescreek/firescreek.component';
import { HomeComponent } from './home/home.component';
import { MillcreekComponent } from './millcreek/millcreek.component';
import { NimblewillComponent } from './nimblewill/nimblewill.component';
import { NoontootlaComponent } from './noontootla/noontootla.component';
import { OgdenComponent } from './ogden/ogden.component';
import { TriallakeComponent } from './triallake/triallake.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noontootla', component: NoontootlaComponent },
  { path: 'nimblewill', component: NimblewillComponent },
  { path: 'ogden', component: OgdenComponent },
  { path: 'triallake', component: TriallakeComponent },
  { path: 'nimblewill', component: NimblewillComponent },
  { path: 'bigcottonindian', component: BigcottonindianComponent },
  { path: 'firescreek', component: FirescreekComponent },
  { path: 'millcreek', component: MillcreekComponent },
  { path: 'blacksmithsforkleft', component: BlacksmithsforkleftComponent },
  { path: 'blacksmithsfork', component: BlacksmithsforkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
