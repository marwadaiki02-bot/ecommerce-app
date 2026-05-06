import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
  { path: 'register', loadComponent: () => import('./auth/register/register').then(m => m.Register) },
  { path: 'dashboard', canActivate: [AuthGuard], loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard) },
];
