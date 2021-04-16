import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/common/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { EndpointsComponent } from './components/endpoints/endpoints.component';
import { CommonModule } from '@angular/common';
import { SysinfoComponent } from './components/endpoint/sysinfo/sysinfo.component';
import { ViewEndpointComponent } from './components/endpoint/view-endpoint/view-endpoint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { httpHeaderProvider } from './interceptor';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    EndpointsComponent,
    SysinfoComponent,
    ViewEndpointComponent,
    LoginComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [httpHeaderProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
