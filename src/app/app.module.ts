import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes : Routes =[
  {path:"login", component: LoginComponent },
  {path:"homepage", component: HomepageComponent ,canActivate:[AuthService] },
  {path:"contactus", component: ContactUsComponent, canActivate:[AuthService] },
  {path:"ourservices", component: OurServicesComponent,canActivate:[AuthService] },
  {path:"", component: LoginComponent,pathMatch:'full' },
  {path:"*", component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ContactUsComponent,
    OurServicesComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
