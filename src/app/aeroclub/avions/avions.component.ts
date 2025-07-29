import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { register } from 'swiper/element';

@Component({
  selector: 'app-avions',
  imports: [],
  templateUrl: './avions.component.html',
  styleUrl: './avions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvionsComponent implements OnInit {
  ngOnInit(): void {
    register();
    console.log('avions component');
  }
}
