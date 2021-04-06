import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/common/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SysinfoComponent } from './components/endpoint/sysinfo/sysinfo.component';
import { ViewEndpointComponent } from './components/endpoint/view-endpoint/view-endpoint.component';
import { EndpointsComponent } from './components/endpoints/endpoints.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/app/dashboard'
  },
  {path: 'app', component: LayoutComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'endpoints', component: EndpointsComponent},
    {path: 'endpoint/:id', component: ViewEndpointComponent},
    {path: 'endpoint/sysinfo/:id', component: SysinfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
