import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  computed,
  signal
} from '@angular/core';

interface HeroMetric {
  value: string;
  label: string;
  detail: string;
}

interface AboutHighlight {
  title: string;
  body: string;
}

interface StoryCard {
  label: string;
  title: string;
  body: string;
}

type SkillIcon =
  | 'html'
  | 'css'
  | 'tailwind'
  | 'javascript'
  | 'typescript'
  | 'angular'
  | 'ng-zorro'
  | 'responsive-ui'
  | 'adobe-xd'
  | 'csharp-dotnet'
  | 'api'
  | 'sql'
  | 'git-github'
  | 'agile'
  | 'java'
  | 'postman'
  | 'testing'
  | 'jira'
  | 'azure-devops'
  | 'infobip'
  | 'visual-studio'
  | 'manage-engine'
  | 'clickup'
  | 'rabbitmq';

interface SkillItem {
  name: string;
  icon: SkillIcon;
  logoUrl?: string;
}

interface SkillGroup {
  id: string;
  tabLabel: string;
  title: string;
  summary: string;
  skills: SkillItem[];
}

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  visibility: string;
  imageUrl: string;
  imageAlt: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  isConfidential?: boolean;
}

interface WorkPillar {
  id: string;
  kicker: string;
  title: string;
  description: string;
  outcomes: string[];
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements AfterViewInit, OnDestroy {
  readonly emailAddress = 'gramanihuvashen@icloud.com';
  readonly linkedinUrl = 'https://www.linkedin.com/in/huvashen-gramani-64aa75236/';
  readonly githubUrl = 'https://github.com/Huvashen';
  readonly cvUrl = 'assets/cv/Huvashen Gramani 2026 CV.pdf';

  readonly heroMetrics: HeroMetric[] = [
    {
      value: '3+',
      label: 'Years of practical development experience',
      detail: 'Building responsive interfaces and business-facing software'
    },
    {
      value: 'Full stack',
      label: 'Front-end and back-end development',
      detail: 'UI, APIs, integrations, data flow, and business logic'
    },
    {
      value: 'BSc IT',
      label: 'Graduated cum laude',
      detail: 'Currently pursuing Honours in IT'
    }
  ];

  readonly marqueeItems: string[] = [
    'Full-stack development',
    'TypeScript',
    'Tailwind CSS',
    'Responsive UI',
    'C# and .NET',
    'REST API integrations',
    'Back-end systems',
    'Product-minded delivery',
    'Interactive front-end builds',
    'Clean component structure',
    'Business-facing systems'
  ];

  readonly aboutHighlights: AboutHighlight[] = [
    {
      title: 'Interface polish with purpose',
      body: 'I refine working screens into responsive, readable, and trustworthy user experiences.'
    },
    {
      title: 'Full-stack problem solving',
      body: 'I work across UI, APIs, integrations, and data flow so features feel complete from screen to system.'
    },
    {
      title: 'Business-aware delivery',
      body: 'I understand that software needs to support real workflows, not just look good in isolation.'
    },
    {
      title: 'Built to keep evolving',
      body: 'I aim for clean structures that make future content, features, and integrations easier to add.'
    }
  ];

  readonly storyCards: StoryCard[] = [
    {
      label: 'Education',
      title: 'BSc IT completed cum laude',
      body: 'A strong academic foundation in software development, systems thinking, and structured problem solving.'
    },
    {
      label: 'Current chapter',
      title: 'Growing into a stronger full-stack developer',
      body: 'Continuing into Honours while building practical experience across interfaces, APIs, and business systems.'
    },
    {
      label: 'Build focus',
      title: 'Useful software with polished interfaces',
      body: 'Projects where design quality, reliable logic, and real user workflows come together.'
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      id: 'frontend',
      tabLabel: 'Frontend',
      title: 'Frontend Development',
      summary: 'Tools I use to build responsive, accessible, and polished web interfaces.',
      skills: [
        { name: 'HTML', icon: 'html', logoUrl: 'assets/stack-icons/custom/html5.png' },
        { name: 'CSS', icon: 'css', logoUrl: 'assets/stack-icons/custom/css3.png' },
        { name: 'Tailwind CSS', icon: 'tailwind', logoUrl: 'assets/stack-icons/custom/tailwind-css.svg' },
        { name: 'JavaScript', icon: 'javascript', logoUrl: 'assets/stack-icons/custom/javascript.webp' },
        { name: 'TypeScript', icon: 'typescript', logoUrl: 'assets/stack-icons/custom/typescript.png' },
        { name: 'Angular', icon: 'angular', logoUrl: 'assets/stack-icons/custom/angular.webp' },
        { name: 'NG-ZORRO', icon: 'ng-zorro', logoUrl: 'assets/stack-icons/custom/ng-zorro.png' },
        { name: 'Responsive UI', icon: 'responsive-ui', logoUrl: 'assets/stack-icons/custom/responsive-ui.png' },
        { name: 'Adobe XD', icon: 'adobe-xd', logoUrl: 'assets/stack-icons/custom/adobe-xd.png' }
      ]
    },
    {
      id: 'backend',
      tabLabel: 'Backend',
      title: 'Backend & Tools',
      summary: 'Technologies I use for APIs, integrations, data handling, and application logic.',
      skills: [
        { name: 'C#', icon: 'csharp-dotnet', logoUrl: 'assets/stack-icons/custom/csharp.png' },
        { name: '.NET', icon: 'csharp-dotnet', logoUrl: 'assets/stack-icons/custom/dotnet.png' },
        { name: 'REST APIs', icon: 'api' },
        { name: 'SQL / Databases', icon: 'sql', logoUrl: 'assets/stack-icons/custom/sql-databases.png' },
        { name: 'Git', icon: 'git-github', logoUrl: 'assets/stack-icons/custom/git.png' },
        { name: 'GitHub', icon: 'git-github', logoUrl: 'assets/stack-icons/custom/github.png' },
        { name: 'Agile / Scrum', icon: 'agile', logoUrl: 'assets/stack-icons/custom/agile-scrum.png' },
        { name: 'Java', icon: 'java', logoUrl: 'assets/stack-icons/custom/java.png' },
        { name: 'Postman', icon: 'postman', logoUrl: 'assets/stack-icons/custom/postman.webp' },
        { name: 'Testing / Debugging', icon: 'testing', logoUrl: 'assets/stack-icons/custom/testing-debugging.png' },
        { name: 'RabbitMQ', icon: 'rabbitmq', logoUrl: 'assets/stack-icons/custom/rabbitmq.webp' }
      ]
    },
    {
      id: 'platforms',
      tabLabel: 'Platforms',
      title: 'Project Management Tools & Platforms',
      summary: 'Platforms and tools I use for delivery, collaboration, support, and day-to-day development.',
      skills: [
        { name: 'JIRA', icon: 'jira', logoUrl: 'assets/stack-icons/custom/jira.png' },
        { name: 'Azure DevOps', icon: 'azure-devops', logoUrl: 'assets/stack-icons/custom/azure-devops.webp' },
        { name: 'Infobip', icon: 'infobip', logoUrl: 'assets/stack-icons/custom/infobip.png' },
        { name: 'Visual Studio Code', icon: 'visual-studio', logoUrl: 'assets/stack-icons/custom/visual-studio-code.png' },
        { name: 'Visual Studio', icon: 'visual-studio', logoUrl: 'assets/stack-icons/custom/visual-studio.png' },
        { name: 'Manage Engine', icon: 'manage-engine', logoUrl: 'assets/stack-icons/custom/manage-engine.png' },
        { name: 'ClickUp', icon: 'clickup', logoUrl: 'assets/stack-icons/custom/clickup.png' }
      ]
    }
  ];

  readonly projects: Project[] = [
    {
      id: 'smartpack',
      title: 'SmartPack Website',
      category: 'Responsive brand experience',
      summary: 'A responsive commercial website focused on product presentation, customer engagement, and clear conversion paths.',
      description: 'SmartPack demonstrates my ability to translate brand and product requirements into a polished Angular interface with responsive sections, clear calls to action, and user-friendly content flow.',
      role: 'Angular front-end build',
      visibility: 'Public website',
      imageUrl: 'assets/images/SmartPackCV.png',
      imageAlt: 'Preview of the SmartPack website project',
      tech: ['Angular', 'Tailwind CSS', 'Infobip', 'Adobe XD'],
      highlights: [
        'Translated product and brand needs into a clean, responsive website experience.',
        'Structured key sections around clarity, trust, and conversion-focused actions.',
        'Supported subscription and engagement pathways through practical interface decisions.'
      ],
      liveUrl: 'https://smartpack-qa.hc.co.za/'
    },
    {
      id: 'scanit',
      title: 'ScanIT',
      category: 'Internal operations platform',
      summary: 'A barcode-driven operations platform supporting tracking visibility across labelling, shipping, and distribution workflows.',
      description: 'ScanIT reflects experience with business-facing systems where clarity, accuracy, and dependable workflows matter for everyday users.',
      role: 'Full-stack contribution',
      visibility: 'Client-confidential',
      imageUrl: 'assets/images/ScanITCV.png',
      imageAlt: 'Preview of the ScanIT application',
      tech: ['Angular', 'NG-ZORRO', 'TypeScript', 'C#', '.NET', 'REST APIs'],
      highlights: [
        'Supported visibility across multiple stages of an operational workflow.',
        'Worked on an interface designed for practical use inside a business environment.',
        'Combined front-end interaction work with back-end and integration awareness.'
      ],
      isConfidential: true
    },
    {
      id: 'pim',
      title: 'PIM Integrator',
      category: 'Integration-focused solution',
      summary: 'An integration-focused tool for synchronising external product data with internal systems.',
      description: 'PIM Integrator highlights practical API and data-handling work, with attention to structure, consistency, and reliable information flow.',
      role: 'API and integration work',
      visibility: 'Client-confidential',
      imageUrl: 'assets/images/pimPreviewCV.png',
      imageAlt: 'Preview of the PIM Integrator project',
      tech: ['C#', 'REST APIs', 'Postman', 'JSON', 'XML'],
      highlights: [
        'Worked with client-facing integration requirements and structured data flows.',
        'Focused on turning external product information into usable internal records.',
        'Prioritised consistency, repeatability, and reliability across the integration process.'
      ],
      isConfidential: true
    },
    {
      id: 'space-shooter',
      title: 'Space Shooter Game',
      category: 'Creative side project',
      summary: 'A C# game prototype used to explore interaction timing, feedback loops, and structured gameplay logic.',
      description: 'Although separate from business software, this project strengthened my thinking around state, responsiveness, and user feedback.',
      role: 'Desktop game prototype',
      visibility: 'Prototype',
      imageUrl: 'assets/images/spaceShooterPreviewCV.png',
      imageAlt: 'Preview of the Space Shooter game project',
      tech: ['C#', '.NET'],
      highlights: [
        'Explored state, timing, and user feedback through a playful C# prototype.',
        'Practised building responsive interaction patterns outside a traditional website.',
        'Strengthened problem-solving around flow, pacing, and control.'
      ]
    },
    {
      id: 'valentines',
      title: "Valentine's Day Page",
      category: 'Early web experiment',
      summary: 'An early front-end project that captures the start of my interest in visual interaction and web presentation.',
      description: 'This project remains in the portfolio as a milestone that shows progression from early experiments to more structured, professional builds.',
      role: 'Personal front-end build',
      visibility: 'Public project',
      imageUrl: 'assets/images/VdayPreview.png',
      imageAlt: "Preview of the Valentine's Day landing page project",
      tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      highlights: [
        'Represents an early stage of learning through practical front-end experimentation.',
        'Shows the start of my interest in visual presentation and interaction design.',
        'Provides a clear comparison point against my more recent full-stack work.'
      ],
      liveUrl: 'https://huvashen.github.io/YoshnaValentinesDay26/',
      githubUrl: 'https://github.com/Huvashen/YoshnaValentinesDay26/'
    }
  ];

  readonly workPillars: WorkPillar[] = [
    {
      id: 'intentional-ui',
      kicker: 'Visual direction',
      title: 'Purposeful interfaces with clear hierarchy',
      description: 'I focus on layout, spacing, motion, and visual rhythm so users can understand a screen quickly.',
      outcomes: [
        'Clear section structure and visual pacing',
        'Motion that supports interaction without distracting from it',
        'Components that feel polished on desktop and mobile'
      ]
    },
    {
      id: 'practical-engineering',
      kicker: 'Implementation',
      title: 'Maintainable code behind polished screens',
      description: 'I aim to keep components, state, and interactions structured so projects can keep evolving after launch.',
      outcomes: [
        'Code structures that are easier to iterate on',
        'State and interactions that stay manageable as pages grow',
        'A healthy balance between creative design and maintainable code'
      ]
    },
    {
      id: 'ownership',
      kicker: 'Working style',
      title: 'Reliable ownership and steady iteration',
      description: 'I work best when feedback is clear, progress is consistent, and final details are treated with care.',
      outcomes: [
        'Fast iteration once feedback starts flowing',
        'Attention to detail in final UI cleanup and refinement',
        'A calm, practical approach to solving product problems'
      ]
    }
  ];

  readonly activeSkillGroupId = signal(this.skillGroups[0].id);
  readonly activeSkillGroup = computed(
    () => this.skillGroups.find((group) => group.id === this.activeSkillGroupId()) ?? this.skillGroups[0]
  );
  readonly isExperienceAutoscrollPaused = signal(false);
  readonly activeProjectId = signal(this.projects[0].id);
  readonly descriptorHintProjectId = signal<string | null>(null);
  readonly activeProject = computed(
    () => this.projects.find((project) => project.id === this.activeProjectId()) ?? this.projects[0]
  );
  readonly activePillarId = signal(this.workPillars[0].id);
  readonly activePillar = computed(
    () => this.workPillars.find((pillar) => pillar.id === this.activePillarId()) ?? this.workPillars[0]
  );
  readonly confidentialModalVisible = signal(false);
  readonly confidentialProjectName = signal('');
  readonly showToast = signal(false);
  readonly toastMessage = signal('');
  readonly showBackToTop = signal(false);

  private revealObserver?: IntersectionObserver;
  private projectSpotlightObserver?: ResizeObserver;
  private experienceAutoscrollFrame?: number;
  private experienceAutoscrollLastTime?: number;
  private projectHintTimer?: ReturnType<typeof setTimeout>;
  private pendingHintProjectId: string | null = null;
  private toastTimer?: ReturnType<typeof setTimeout>;

  private get isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.setupRevealObserver();
    this.setupProjectSpotlightObserver();
    this.syncProjectSelectorHeight();
    this.startExperienceAutoscroll();
    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.projectSpotlightObserver?.disconnect();

    if (this.experienceAutoscrollFrame) {
      cancelAnimationFrame(this.experienceAutoscrollFrame);
    }

    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    if (this.projectHintTimer) {
      clearTimeout(this.projectHintTimer);
    }
  }

  downloadCv(): void {
    if (!this.isBrowser) {
      return;
    }

    window.open(this.cvUrl, '_blank', 'noopener,noreferrer');
  }

  goToContact(): void {
    this.scrollToSection('contact-section');
  }

  scrollToSection(sectionId: string): void {
    if (!this.isBrowser) {
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  selectProject(projectId: string): void {
    this.activeProjectId.set(projectId);
    this.clearProjectHint();

    if (!this.isBrowser) {
      return;
    }

    requestAnimationFrame(() => {
      this.syncProjectSelectorHeight();
    });
  }

  selectSkillGroup(groupId: string): void {
    this.activeSkillGroupId.set(groupId);
    this.experienceAutoscrollLastTime = undefined;

    if (!this.isBrowser) {
      return;
    }

    const strip = document.getElementById('experience-strip');

    if (strip instanceof HTMLElement) {
      strip.scrollLeft = 0;
    }
  }

  selectPillar(pillarId: string): void {
    this.activePillarId.set(pillarId);
  }

  setExperienceAutoscrollPaused(paused: boolean): void {
    this.isExperienceAutoscrollPaused.set(paused);
    this.experienceAutoscrollLastTime = undefined;
  }

  onProjectHintEnter(projectId: string): void {
    if (!this.isHoverCapable()) {
      return;
    }

    this.queueProjectHint(projectId);
  }

  onProjectHintMove(projectId: string): void {
    if (!this.isHoverCapable()) {
      return;
    }

    if (this.descriptorHintProjectId() === projectId) {
      this.descriptorHintProjectId.set(null);
    }

    this.queueProjectHint(projectId);
  }

  onProjectHintFocus(projectId: string): void {
    this.queueProjectHint(projectId);
  }

  onProjectHintLeave(projectId: string): void {
    if (this.descriptorHintProjectId() === projectId) {
      this.descriptorHintProjectId.set(null);
    }

    if (this.pendingHintProjectId === projectId) {
      this.pendingHintProjectId = null;
    }

    this.clearProjectHintTimer();
  }

  async copyEmail(): Promise<void> {
    if (!this.isBrowser) {
      return;
    }

    if (!navigator.clipboard?.writeText) {
      this.showToastFeedback('Clipboard access is unavailable in this browser.');
      return;
    }

    try {
      await navigator.clipboard.writeText(this.emailAddress);
      this.showToastFeedback('Email address copied.');
    } catch {
      this.showToastFeedback('Copy failed. Please use the email link.');
    }
  }

  openConfidentialModal(projectName: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.confidentialProjectName.set(projectName);
    this.confidentialModalVisible.set(true);
  }

  closeConfidentialModal(): void {
    this.confidentialModalVisible.set(false);
  }

  scrollToTop(): void {
    if (!this.isBrowser) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    this.showBackToTop.set(window.scrollY > 520);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (!this.isBrowser) {
      return;
    }

    this.syncProjectSelectorHeight();
  }

  private setupRevealObserver(): void {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );

    if (!elements.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${(index % 6) * 70}ms`);
      this.revealObserver?.observe(element);
    });
  }

  private setupProjectSpotlightObserver(): void {
    if (!('ResizeObserver' in window)) {
      return;
    }

    const spotlight = document.querySelector<HTMLElement>('.project-spotlight');

    if (!spotlight) {
      return;
    }

    this.projectSpotlightObserver = new ResizeObserver(() => {
      this.syncProjectSelectorHeight();
    });

    this.projectSpotlightObserver.observe(spotlight);
  }

  private syncProjectSelectorHeight(): void {
    const layout = document.querySelector<HTMLElement>('.project-layout');
    const spotlight = document.querySelector<HTMLElement>('.project-spotlight');
    const track = document.getElementById('project-selector-track');
    const firstGroup = track?.querySelector<HTMLElement>('.project-selector-group');

    if (!layout || !spotlight) {
      return;
    }

    layout.style.setProperty('--project-selector-height', `${spotlight.offsetHeight}px`);

    if (track instanceof HTMLElement && firstGroup instanceof HTMLElement) {
      const gapValue = getComputedStyle(track).rowGap || getComputedStyle(track).gap || '0';
      const loopHeight = firstGroup.offsetHeight + Number.parseFloat(gapValue || '0');
      const durationSeconds = Math.max(18, Math.min(30, loopHeight / 34));

      layout.style.setProperty('--project-selector-loop-height', `${loopHeight}px`);
      layout.style.setProperty('--project-selector-duration', `${durationSeconds}s`);
    }
  }

  private queueProjectHint(projectId: string): void {
    this.pendingHintProjectId = projectId;
    this.clearProjectHintTimer();

    this.projectHintTimer = setTimeout(() => {
      if (this.pendingHintProjectId === projectId) {
        this.descriptorHintProjectId.set(projectId);
      }
    }, 700);
  }

  private clearProjectHint(): void {
    this.pendingHintProjectId = null;
    this.descriptorHintProjectId.set(null);
    this.clearProjectHintTimer();
  }

  private clearProjectHintTimer(): void {
    if (!this.projectHintTimer) {
      return;
    }

    clearTimeout(this.projectHintTimer);
    this.projectHintTimer = undefined;
  }

  private isHoverCapable(): boolean {
    if (!this.isBrowser) {
      return false;
    }

    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  private startExperienceAutoscroll(): void {
    if (!this.isBrowser) {
      return;
    }

    const step = (timestamp: number) => {
      const strip = document.getElementById('experience-strip');

      if (strip instanceof HTMLElement) {
        const lastTime = this.experienceAutoscrollLastTime ?? timestamp;
        const delta = timestamp - lastTime;

        if (!this.isExperienceAutoscrollPaused()) {
          const loopWidth = strip.scrollWidth / 2;

          if (loopWidth > 0) {
            strip.scrollLeft += delta * 0.035;

            if (strip.scrollLeft >= loopWidth) {
              strip.scrollLeft -= loopWidth;
            }
          }
        }
      }

      this.experienceAutoscrollLastTime = timestamp;
      this.experienceAutoscrollFrame = requestAnimationFrame(step);
    };

    this.experienceAutoscrollFrame = requestAnimationFrame(step);
  }

  private showToastFeedback(message: string): void {
    this.toastMessage.set(message);
    this.showToast.set(true);

    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    this.toastTimer = setTimeout(() => {
      this.showToast.set(false);
    }, 2400);
  }
}
