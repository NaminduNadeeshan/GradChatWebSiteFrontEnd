import { ViewMyPostComponent } from './Post/view-my-post/view-my-post.component';
import { ViewPostComponent } from './Post/view-post/view-post.component';
import { WritePostComponent } from './Post/write-post/write-post.component';
import { Config } from './config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/component/login.component';
import { AppRoutersRoutes } from './app-routers.routing';
import { HomeComponent } from './Home/Home.component';
import { MenuBarComponent } from './Shared/Menubar/menu-bar/menu-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from './Shared/Servie/local-storage.service';
import { LoginApiService } from './Login/login-api-service/login-api.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceService } from './Login/login-service/login-service.service';
import { AuthGurdService } from './Auth-gurd/auth-gurd.service';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { QuillModule } from 'ngx-quill';
import { RichTextComponent } from './Shared/Richtext/rich-text/rich-text.component';
import { PostApiService } from './Post/post-api-service/post-api.service';
import { DashbordComponent } from './Dashbord/dashbord/dashbord.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashbordApiService } from './Dashbord/dashbord-api/dashbord-api.service';
import {EditPostComponent } from './Post/edit-post/edit-post.component';
import {ViewUserComponent} from './user/view-user/view-user.component';
import { UserApiService } from './user/user-api/user-api.service';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      MenuBarComponent,
      WritePostComponent,
      RichTextComponent,
      DashbordComponent,
      ViewPostComponent,
      ViewMyPostComponent,
      EditPostComponent,
      ViewUserComponent
   ],
   imports: [
      BrowserModule,
      AppRoutersRoutes,
      ReactiveFormsModule,
      HttpClientModule,
      QuillModule,
      MatCardModule,
      BrowserAnimationsModule,
      MatButtonModule,
      FlexLayoutModule
   ],
   providers: [
    LocalStorageService,
    LoginApiService,
    LoginServiceService,
    Config,
    AuthGurdService,
    PostApiService,
    DashbordApiService,
    UserApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
