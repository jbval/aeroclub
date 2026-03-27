import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';
import { map, Observable, timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FacebookComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  @ViewChild('presentation', { static: true }) presentation!: ElementRef;
  tickCamera$: Observable<string>;
  constructor() {
    this.tickCamera$ = timer(0, 30000).pipe(
      map(() => Math.floor(Math.random() * 1000).toString()),
    );
  }

  ngOnInit(): void {}

  scrollToPresentation() {
    this.presentation.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
