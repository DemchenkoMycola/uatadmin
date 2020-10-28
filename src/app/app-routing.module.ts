import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ChanalsListComponent} from './chanals-list/chanals-list.component';
import {AddChanalComponent} from './add-chanal/add-chanal.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'chanals', component: ChanalsListComponent},
  {path: 'addChanal', component: AddChanalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
