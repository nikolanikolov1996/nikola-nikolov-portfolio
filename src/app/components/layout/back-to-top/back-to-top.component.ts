import { ChangeDetectionStrategy, Component, output, input } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  host: { style: 'display: contents;' },
  templateUrl: './back-to-top.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackToTopComponent {
  readonly visible = input.required<boolean>();
  readonly navigateTop = output<void>();
}
