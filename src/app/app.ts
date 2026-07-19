import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { BackToTopComponent } from './components/layout/back-to-top/back-to-top.component';
import { IntroSplashComponent } from './components/layout/intro-splash/intro-splash.component';
import { ScrollProgressComponent } from './components/layout/scroll-progress/scroll-progress.component';
import { SiteFooterComponent } from './components/layout/site-footer/site-footer.component';
import { SiteNavComponent } from './components/layout/site-nav/site-nav.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutComponent,
    BackToTopComponent,
    ContactComponent,
    HeroComponent,
    IntroSplashComponent,
    ProjectsComponent,
    ScrollProgressComponent,
    SiteFooterComponent,
    SiteNavComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App implements AfterViewInit, OnDestroy {
  activeSection = 'top';
  showBackToTop = false;
  scrollProgress = 0;

  private observer?: IntersectionObserver;
  private readonly sectionIds = ['projects', 'about', 'contact'];

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const targets = this.host.nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.renderer.addClass(entry.target, 'is-visible');
              this.observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );

      targets.forEach((target) => this.observer?.observe(target));
    } else {
      targets.forEach((target) => this.renderer.addClass(target, 'is-visible'));
    }

    this.syncScrollState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.syncScrollState();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.syncScrollState();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private syncScrollState(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    this.showBackToTop = scrollY > 520;

    const documentHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    this.scrollProgress = Math.min(100, Math.max(0, (scrollY / documentHeight) * 100));

    const triggerLine = window.innerHeight * 0.62;
    let current = 'top';

    for (const id of this.sectionIds) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= triggerLine) {
        current = id;
      }
    }

    this.activeSection = current;
  }
}
