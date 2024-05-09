import { Routes } from '@angular/router';

import { ClientComponent } from './modules/client/client.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CreateClientComponent } from './modules/client/create-client/create-client.component';
import { JobsComponent } from './modules/jobs/jobs.component';
import { CandidatesComponent } from './modules/candidates/candidates.component';
import { CreateCandidateComponent } from './modules/candidates/create-candidate/create-candidate.component';


import { CreateJobsComponent } from './modules/jobs/create-jobs/create-jobs.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    // {path: 'clients', component: ClientComponent, children: [
    //     {path: 'create-client', component: CreateClientComponent},
    // ]},
    {path: 'clients', component: ClientComponent},
    {path: 'create-client', component: CreateClientComponent},
    {path: 'jobs', component: JobsComponent},
    {path: 'candidates', component: CandidatesComponent},
    {path: 'create-candidate', component:CreateCandidateComponent},
    {path: 'create-jobs', component: CreateJobsComponent}
];
