import { ViewMyPostComponent } from './Post/view-my-post/view-my-post.component';
import { ViewPostComponent } from './Post/view-post/view-post.component';
import { DashbordComponent } from './Dashbord/dashbord/dashbord.component';
import { WritePostComponent } from './Post/write-post/write-post.component';
import { HomeComponent } from './Home/Home.component';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/component/login.component';
import { AuthGurdService } from './Auth-gurd/auth-gurd.service';
import { ViewUserComponent } from './user/view-user/view-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '',
  component: HomeComponent,
  canActivate: [AuthGurdService],
  children: [
    {path: '', component: DashbordComponent, pathMatch: 'full'},
    {path: 'post/write', component: WritePostComponent, pathMatch: 'full'},
    {path: 'post/view/:id', component: ViewPostComponent, pathMatch: 'full'},
    {path: 'post/mypost', component: ViewMyPostComponent, pathMatch: 'full'}
  ]
},
{path: 'user', component: ViewUserComponent, canActivate : [AuthGurdService]}
];

export const AppRoutersRoutes = RouterModule.forRoot(routes);
