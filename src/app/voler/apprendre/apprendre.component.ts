import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apprendre',
  imports: [RouterLink],
  templateUrl: './apprendre.component.html',
  styleUrl: './apprendre.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApprendreComponent { }
