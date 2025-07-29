import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accueil',
  },
  {
    path: 'accueil',
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
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'decouvrir',
      },
      {
        path: 'decouvrir',
        loadComponent: () =>
          import('./voler/decouvrir/decouvrir.component').then(
            (c) => c.DecouvrirComponent
          ),
      },
      {
        path: 'apprendre',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./voler/apprendre/apprendre.component').then(
                (c) => c.ApprendreComponent
              ),
          },
          {
            path: 'bia',
            loadComponent: () =>
              import('./voler/apprendre/bia/bia.component').then(
                (c) => c.BiaComponent
              ),
          },
        ],
      },
    ],
  },
];
