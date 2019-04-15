import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { RacineComponent } from './racine/racine.component';

const routes: Routes = [

  { path: 'create-kitten', component: CreateKittenComponent, pathMatch: 'full'},
  { path: 'list-kitten', component: ListKittenComponent, pathMatch: 'full'},
  { path: 'user-kitten', component: UserKittenComponent, pathMatch: 'full'},

  { path: '', redirectTo: 'create-kitten', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
