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

    data: {
      description:
        "Accueil de l'aéroclub d'annonay. Venez voler dans la vallée du rhône à travers des vpms de découverte ou encore apprendre à piloter. ",
      title: 'Accueil',
    },
  },
  {
    path: 'aeroclub',

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./aeroclub/aeroclub.component').then(
            (c) => c.AeroclubComponent,
          ),
        data: {
          title: 'Aeroclub',
        },
      },
      {
        path: 'avions',
        loadComponent: () =>
          import('./aeroclub/avions/avions.component').then(
            (c) => c.AvionsComponent,
          ),
        data: {
          title: 'Avions',
        },
      },
    ],
  },
  {
    path: 'inscription',
    loadComponent: () =>
      import('./inscription/inscription.component').then(
        (c) => c.InscriptionComponent,
      ),
    data: {
      title: 'Inscription',
    },
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
            (c) => c.DecouvrirComponent,
          ),
        data: {
          title: 'Baptêmes',
        },
      },
      {
        path: 'apprendre',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./voler/apprendre/apprendre.component').then(
                (c) => c.ApprendreComponent,
              ),
            data: {
              title: 'Apprendre',
            },
          },
          {
            path: 'bia',
            loadComponent: () =>
              import('./voler/apprendre/bia/bia.component').then(
                (c) => c.BiaComponent,
              ),
            data: {
              title: 'BIA',
            },
          },
        ],
      },
    ],
  },
  {
    path: 'legal',
    loadComponent: () =>
      import('./legal/legal.component').then(
        (c) => c.LegalComponent,
      ),
    data: {
      title: 'Page introuvable',
    },
  },
  {
    path: 'notfound',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
    data: {
      title: 'Page introuvable',
    },
  },
];
