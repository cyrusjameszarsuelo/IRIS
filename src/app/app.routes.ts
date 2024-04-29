import { Routes } from '@angular/router';

import { ClientComponent } from './modules/client/client.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'clients', component: ClientComponent},
];
