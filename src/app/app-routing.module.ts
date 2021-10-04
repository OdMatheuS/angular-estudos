import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guard/login.guard';
import { RouteGuardAnimais } from './auth/guard/route-guard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then((m) => m.AnimaisModule),
    canLoad: [RouteGuardAnimais],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
