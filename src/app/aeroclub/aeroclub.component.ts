import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aeroclub',
  imports: [RouterLink],
  templateUrl: './aeroclub.component.html',
  styleUrl: './aeroclub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AeroclubComponent { }
