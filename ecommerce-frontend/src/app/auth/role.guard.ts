import { CanActivateFn, Router } from '@angular/router';

export const RoleGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('role'); // ✅ stocké après login
  const router = new Router();

  if (!role) {
    router.navigate(['/login']);
    return false;
  }

  // Vérifie la route demandée et compare avec le rôle
  const expectedRole = route.data['role'];

  if (expectedRole && role !== expectedRole) {
    // Redirection selon rôle
    if (role === 'client') router.navigate(['/dashboard/client']);
    else if (role === 'vendor') router.navigate(['/dashboard/vendor']);
    else if (role === 'admin') router.navigate(['/dashboard/admin']);
    return false;
  }

  return true;
};
