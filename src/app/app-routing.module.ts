import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./@public/pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./@public/pages/contact/contact.module').then(module => module.ContactModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./@admin/pages/dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'admin/users',
    loadChildren: () => import('./@admin/pages/users/users.module').then(module => module.UsersModule)
  },
  /*
    Rutas para controlar posibles fallos de seguridad
   */
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
