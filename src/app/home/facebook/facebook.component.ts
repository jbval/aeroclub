import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

declare var FB: any;
@Component({
  selector: 'app-facebook',
  imports: [],
  templateUrl: './facebook.component.html',
  styleUrl: './facebook.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { ngSkipHydration: 'true' },
})
export class FacebookComponent implements OnInit {
  ngOnInit(): void {
    if (FB != null && FB.XFBML != null) {
      FB.XFBML.parse();
    }
  }
}
