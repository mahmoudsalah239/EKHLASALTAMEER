import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { GeneralComponent } from '../components/general/general.component';
import { ContactComponent } from '../components/contact/contact.component';
import { OurServiceComponent } from '../components/our-service/our-service.component';
import { DecorateComponent } from '../components/decorate/decorate.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('../components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('../components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'general',
    loadComponent: () => import('../components/general/general.component').then(m => m.GeneralComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('../components/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('../components/our-service/our-service.component').then(m => m.OurServiceComponent)
  },
  {
    path: 'decorate',
    loadComponent: () => import('../components/decorate/decorate.component').then(m => m.DecorateComponent)
  },
  { path: '**', redirectTo: 'home' }
];