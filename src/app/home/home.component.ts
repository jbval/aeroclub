import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild('presentation', { static: true }) presentation!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  scrollToPresentation() {
    this.presentation.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
