import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  host: { style: 'display: contents;' },
  templateUrl: './site-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {}
