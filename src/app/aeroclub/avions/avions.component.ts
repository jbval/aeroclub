import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avions',
  imports: [],
  templateUrl: './avions.component.html',
  styleUrl: './avions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AvionsComponent implements OnInit {
  ngOnInit(): void {}
}
