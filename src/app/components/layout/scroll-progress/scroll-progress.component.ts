import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  host: { style: 'display: contents;' },
  templateUrl: './scroll-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollProgressComponent {
  readonly progress = input.required<number>();
}
