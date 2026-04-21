import { CommonModule } from '@angular/common';
import { Component, HostListener, afterNextRender, signal } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  readonly navItems: NavItem[] = [
    { id: 'home-section', label: 'Home' },
    { id: 'about-section', label: 'About' },
    { id: 'experience-section', label: 'Experience' },
    { id: 'projects-section', label: 'Projects' },
    { id: 'contact-section', label: 'Contact' }
  ];

  readonly isMenuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('home-section');

  constructor() {
    afterNextRender(() => {
      this.updateNavState();
    });
  }

  private get isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.closeMenu();

    if (!this.isBrowser) {
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection.set(sectionId);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateNavState();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (!this.isBrowser) {
      return;
    }

    if (window.innerWidth >= 768 && this.isMenuOpen()) {
      this.closeMenu();
    }

    this.updateNavState();
  }

  private updateNavState(): void {
    if (!this.isBrowser) {
      return;
    }

    this.scrolled.set(window.scrollY > 12);

    const offset = window.scrollY + 150;
    let currentSection = 'home-section';

    for (const item of this.navItems) {
      const section = document.getElementById(item.id);

      if (section && section.offsetTop <= offset) {
        currentSection = item.id;
      }
    }

    this.activeSection.set(currentSection);
  }
}
