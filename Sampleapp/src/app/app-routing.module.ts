import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
