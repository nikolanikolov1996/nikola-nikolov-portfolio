import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';

import { PortfolioProject } from '../../../core/models/portfolio-project.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  host: { style: 'display: contents;' },
  templateUrl: './project-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModalComponent {
  readonly project = input.required<PortfolioProject>();
  readonly dismissed = output<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.dismissed.emit();
  }
}
