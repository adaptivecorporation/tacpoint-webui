import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/common/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SysinfoComponent } from './components/endpoint/sysinfo/sysinfo.component';
import { ViewEndpointComponent } from './components/endpoint/view-endpoint/view-endpoint.component';
import { EndpointsComponent } from './components/endpoints/endpoints.component';
import { IntrusionHomeComponent } from './components/intrusion/intrusion-home/intrusion-home.component';
import { IntrusionViewHostComponent } from './components/intrusion/intrusion-view-host/intrusion-view-host.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {path: 'login', component: LoginComponent},
  {path: 'app', component: LayoutComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'endpoints', component: EndpointsComponent},
    {path: 'endpoint/:id', component: ViewEndpointComponent},
    {path: 'endpoint/sysinfo/:id', component: SysinfoComponent},
    {path: 'intrusion', component: IntrusionHomeComponent},
    {path: 'intrusion/view/:id', component: IntrusionViewHostComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
