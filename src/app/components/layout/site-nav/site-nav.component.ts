import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-site-nav',
  standalone: true,
  host: { style: 'display: contents;' },
  templateUrl: './site-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteNavComponent {
  readonly activeSection = input.required<string>();
}
