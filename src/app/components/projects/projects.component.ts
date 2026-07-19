import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import { PORTFOLIO_PROJECTS } from '../../core/data/portfolio-projects.data';
import { PortfolioProject } from '../../core/models/portfolio-project.model';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  host: { style: 'display: contents;' },
  imports: [ProjectModalComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnDestroy {
  readonly projects = PORTFOLIO_PROJECTS;
  selectedProject: PortfolioProject | null = null;

  openProject(project: PortfolioProject): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  onProjectKeydown(event: KeyboardEvent, project: PortfolioProject): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openProject(project);
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
