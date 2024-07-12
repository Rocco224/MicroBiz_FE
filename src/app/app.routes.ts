import { Routes} from '@angular/router';

export const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'hr', loadChildren: () => import('./hr/hr.module').then(m => m.HrModule) },
    { path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
    { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/auth/login' }
];