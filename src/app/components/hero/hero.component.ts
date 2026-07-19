import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  host: { style: 'display: contents;' },
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  heroPhotoTransform = 'translate3d(0, 0, 0) rotate(0deg)';

  onHeroMove(event: MouseEvent): void {
    const hero = event.currentTarget as HTMLElement | null;
    if (!hero) {
      return;
    }

    const rect = hero.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
    const x = Math.max(-1, Math.min(1, offsetX)) * 8;
    const y = Math.max(-1, Math.min(1, offsetY)) * 8;

    this.heroPhotoTransform = `translate3d(${x}px, ${y}px, 0) rotate(${x * 0.35}deg)`;
  }

  resetHeroMove(): void {
    this.heroPhotoTransform = 'translate3d(0, 0, 0) rotate(0deg)';
  }
}
