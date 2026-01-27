import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

  // ===== Helper: are we in the browser? =====
  private get isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  downloadCv(): void {
    // replace CV with new updated CV (Yoshna build)
    const cvUrl = 'assets/cv/CV Huvashen Gramani 25.pdf';

    if (!this.isBrowser) {
      return;
    }

    window.open(cvUrl, '_blank');
  }

  goToContact(): void {
    if (!this.isBrowser) {
      return;
    }

    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ===== Confetti state =====
  showConfetti = false;

  confettiPieces: {
    left: number;
    duration: number;
    delay: number;
    size: number;
    color: string;
  }[] = Array.from({ length: 80 }, () => {
    const colors = ['#22c55e', '#3b82f6', '#f97316', '#e11d48', '#a855f7'];

    return {
      left: Math.random() * 100,                // 0–100% horizontally
      duration: 1.8 + Math.random() * 2,        // 2.2–4.2s fall
      delay: Math.random() * 0.8,               // 0–0.8s stagger
      size: 6 + Math.random() * 6,              // 6–12px width
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  });

  // ===== Toast state =====
  showToast = false;
  toastMessage = '✨ New projects are on the way 👀';

  private createConfetti() {
    const colors = ['#22c55e', '#3b82f6', '#f97316', '#e11d48', '#a855f7'];

    this.confettiPieces = Array.from({ length: 80 }, () => ({
      left: Math.random() * 100,
      duration: 2.2 + Math.random() * 2,
      delay: Math.random() * 0.8,
      size: 6 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  }

  triggerConfetti() {
    console.log('triggerConfetti called, pieces:', this.confettiPieces.length);

    // optional: regenerate confetti each click
    this.createConfetti();

    // toggle visibility – each time it becomes true, animation runs
    this.showConfetti = !this.showConfetti;

    // show toast
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 5000); // same duration as confetti
  }

  // ===== Scroll / back-to-top logic =====
  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }

    window.addEventListener('scroll', this.toggleBackToTop.bind(this));
  }

  ngOnDestroy() {
    if (!this.isBrowser) {
      return;
    }

    window.removeEventListener('scroll', this.toggleBackToTop.bind(this));
  }

  toggleBackToTop() {
    if (!this.isBrowser) {
      return;
    }

    const btn = document.getElementById('backToTopBtn');

    if (!btn) return;

    if (window.scrollY > 400) {
      btn.classList.remove('hidden');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('hidden');
      btn.classList.remove('opacity-100');
    }
  }

  scrollToTop() {
    if (!this.isBrowser) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== Confidential modal state =====
  confidentialModalVisible = false;
  confidentialProjectName = '';

  openConfidentialModal(projectName: string, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.confidentialProjectName = projectName;
    this.confidentialModalVisible = true;
  }

  closeConfidentialModal() {
    this.confidentialModalVisible = false;
  }

}
