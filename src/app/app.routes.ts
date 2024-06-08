import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { GeneralComponent } from '../components/general/general.component';
import { ContactComponent } from '../components/contact/contact.component';
import { OurServiceComponent } from '../components/our-service/our-service.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: OurServiceComponent },
  { path: '**', component: HomeComponent },
];
