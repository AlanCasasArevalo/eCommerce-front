import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "../../@admin/pages/admin.component";
import {PublicComponent} from "./public.component";

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
