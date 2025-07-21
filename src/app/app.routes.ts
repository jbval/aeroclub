import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'aeroclub',

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./aeroclub/aeroclub.component').then(
            (c) => c.AeroclubComponent
          ),
      },
      {
        title: 'Avions',
        path: 'avions',
        loadComponent: () =>
          import('./aeroclub/avions/avions.component').then(
            (c) => c.AvionsComponent
          ),
      },
    ],
  },
  {
    path: 'inscription',
    loadComponent: () =>
      import('./inscription/inscription.component').then(
        (c) => c.InscriptionComponent
      ),
  },
  {
    path: 'voler',
    loadComponent: () =>
      import('./voler/voler.component').then((c) => c.VolerComponent),
  },
];
