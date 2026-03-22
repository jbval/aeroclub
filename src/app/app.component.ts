import { Component, OnInit } from '@angular/core';
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
import { filter, map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
  ) {}
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
