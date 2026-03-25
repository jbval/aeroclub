import {
  ApplicationRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  Data,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import {
  concat,
  filter,
  first,
  from,
  interval,
  map,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly swUpdate = inject(SwUpdate);
  private readonly appRef = inject(ApplicationRef);

  constructor() {}
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.route;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        tap((routeData) => this.updateTitleAndMeta(routeData)),
      )
      .subscribe();

    if (this.swUpdate.isEnabled) {
      const appIsStable$ = this.appRef.isStable.pipe(
        first((isStable) => isStable === true),
      );
      const everySixHours$ = interval(6 * 60 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(
        appIsStable$,
        everySixHours$,
      );

      everySixHoursOnceAppIsStable$
        .pipe(switchMap(() => from(this.swUpdate.checkForUpdate())))
        .subscribe();

      this.swUpdate.versionUpdates
        .pipe(
          tap((ev) => {
            switch (ev.type) {
              case 'NO_NEW_VERSION_DETECTED':
              case 'VERSION_DETECTED':
              case 'VERSION_INSTALLATION_FAILED':
                break;
              case 'VERSION_READY':
                this.swUpdate.activateUpdate();
                document.location.reload();
            }
          }),
        )
        .subscribe();
    }
  }
  updateTitleAndMeta(data: Data): void {
    const description = data['description'];
    const title = data['title'];

    if (description) {
      this.meta.updateTag({
        name: 'description',
        content: description,
      });
    }
    if (title) {
      this.titleService.setTitle(`Aeroclub d'Annonay - ${title}`);
    }
  }
}
