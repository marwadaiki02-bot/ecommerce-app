import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
    { path: 'register', loadComponent: () => import('./auth/register/register').then(m => m.Register) },


    {
        path: 'dashboard/vendor', canActivate: [AuthGuard, RoleGuard], data: { role: 'vendor' },
        loadComponent: () => import('./dashboard/vendor/vendor').then(m => m.Vendor)
    },

    {
        path: 'dashboard/admin', canActivate: [AuthGuard, RoleGuard], data: { role: 'admin' },
        loadComponent: () => import('./dashboard/admin/admin').then(m => m.Admin)
    },
];
