import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ReactShowcaseApp } from './react-showcase-app';

@Component({
  selector: 'app-react-showcase',
  standalone: true,
  template: `
    <section id="react-showcase-section" class="react-island-section">
      <div class="section-inner">
        <div #reactHost class="react-island-mount" aria-label="React-powered interactive showcase"></div>
      </div>
    </section>
  `,
  styleUrl: './react-showcase.css',
  encapsulation: ViewEncapsulation.None
})
export class ReactShowcase implements AfterViewInit, OnDestroy {
  @ViewChild('reactHost', { static: true }) reactHost!: ElementRef<HTMLElement>;

  private root?: Root;

  private get isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.root = createRoot(this.reactHost.nativeElement);
    this.root.render(createElement(ReactShowcaseApp));
  }

  ngOnDestroy(): void {
    this.root?.unmount();
  }
}
