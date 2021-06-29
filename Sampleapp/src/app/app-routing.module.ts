import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NimblewillComponent } from './nimblewill/nimblewill.component';
import { NoontootlaComponent } from './noontootla/noontootla.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'noontootla', component: NoontootlaComponent },
  { path: 'nimblewill', component: NimblewillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
