import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'anniversary', component:AnniversaryComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
