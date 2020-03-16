import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', component: HomePageComponent, pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
