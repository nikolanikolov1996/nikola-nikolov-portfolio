import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-intro-splash',
  standalone: true,
  host: { style: 'display: contents;' },
  templateUrl: './intro-splash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroSplashComponent {}
