import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "inscription",
    component: InscriptionComponent
  }
];
