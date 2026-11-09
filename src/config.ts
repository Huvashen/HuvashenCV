export const assetUrl = (path: string) => import.meta.env.BASE_URL + path;

const data = {
    developer: {
        name: "Huvashen",
        fullName: "Huvashen Gramani",
        title: "Junior Full-Stack Software Developer",
        description: "I build responsive web interfaces and practical full-stack features across front-end, back-end, APIs, and integrations. My focus is on turning requirements into polished screens, structured code, and business-facing software that feels clear, dependable, and easy to use.",
        photo: "assets/images/huvashenPortfolioPicNew.jpg",
        resume: "assets/cv/Huvashen Gramani 2026 CV.pdf"
    },
    social: {
        github: "Huvashen",
        email: "gramanihuvashen@icloud.com",
        availability: "Open to junior full-stack roles"
    },
    about: {
        title: "About Me",
        description: "I build responsive web interfaces and practical full-stack features across front-end, back-end, APIs, and integrations. My focus is on turning requirements into polished screens, structured code, and business-facing software that feels clear, dependable, and easy to use. I work best where design awareness and engineering discipline meet: shaping interfaces, workflows, and software details into something more useful, professional, and maintainable."
    },
    experiences: [
        {
            position: "Useful software with polished interfaces",
            company: "Build focus",
            period: "",
            description: "Projects where design quality, reliable logic, and real user workflows come together."
        },
        {
            position: "Growing into a stronger full-stack developer",
            company: "Current chapter",
            period: "",
            description: "Continuing into Honours while building practical experience across interfaces, APIs, and business systems."
        },
        {
            position: "BSc IT completed cum laude",
            company: "Education",
            period: "",
            description: "A strong academic foundation in software development, systems thinking, and structured problem solving."
        },
        {
            position: "Years of practical development experience",
            company: "",
            period: "3+",
            description: "Building responsive interfaces and business-facing software"
        },
        {
            position: "Front-end and back-end development",
            company: "",
            period: "Full stack",
            description: "UI, APIs, integrations, data flow, and business logic"
        },
        {
            position: "Graduated cum laude",
            company: "",
            period: "BSc IT",
            description: "Currently pursuing Honours in IT"
        }
    ],
    projects: [
        {
            id: "smartpack",
            title: "SmartPack Website",
            category: "Responsive brand experience",
            summary: "A responsive commercial website focused on product presentation, customer engagement, and clear conversion paths.",
            description: "SmartPack demonstrates my ability to translate brand and product requirements into a polished Angular interface with responsive sections, clear calls to action, and user-friendly content flow.",
            role: "Angular front-end build",
            visibility: "Public website",
            imageUrl: "assets/images/SmartPackCV.png",
            imageAlt: "Preview of the SmartPack website project",
            tech: [
                "Angular",
                "Tailwind CSS",
                "Infobip",
                "Adobe XD"
            ],
            highlights: [
                "Translated product and brand needs into a clean, responsive website experience.",
                "Structured key sections around clarity, trust, and conversion-focused actions.",
                "Supported subscription and engagement pathways through practical interface decisions."
            ],
            liveUrl: "https://smartpack-qa.hc.co.za/",
            technologies: "Angular, Tailwind CSS, Infobip, Adobe XD",
            link: "https://smartpack-qa.hc.co.za/"
        },
        {
            id: "scanit",
            title: "ScanIT",
            category: "Internal operations platform",
            summary: "A barcode-driven operations platform supporting tracking visibility across labelling, shipping, and distribution workflows.",
            description: "ScanIT reflects experience with business-facing systems where clarity, accuracy, and dependable workflows matter for everyday users.",
            role: "Full-stack contribution",
            visibility: "Client-confidential",
            imageUrl: "assets/images/ScanITCV.png",
            imageAlt: "Preview of the ScanIT application",
            tech: [
                "Angular",
                "NG-ZORRO",
                "TypeScript",
                "C#",
                ".NET",
                "REST APIs"
            ],
            highlights: [
                "Supported visibility across multiple stages of an operational workflow.",
                "Worked on an interface designed for practical use inside a business environment.",
                "Combined front-end interaction work with back-end and integration awareness."
            ],
            isConfidential: true,
            technologies: "Angular, NG-ZORRO, TypeScript, C#, .NET, REST APIs",
            link: ""
        },
        {
            id: "pim",
            title: "PIM Integrator",
            category: "Integration-focused solution",
            summary: "An integration-focused tool for synchronising external product data with internal systems.",
            description: "PIM Integrator highlights practical API and data-handling work, with attention to structure, consistency, and reliable information flow.",
            role: "API and integration work",
            visibility: "Client-confidential",
            imageUrl: "assets/images/pimPreviewCV.png",
            imageAlt: "Preview of the PIM Integrator project",
            tech: [
                "C#",
                "REST APIs",
                "Postman",
                "JSON",
                "XML"
            ],
            highlights: [
                "Worked with client-facing integration requirements and structured data flows.",
                "Focused on turning external product information into usable internal records.",
                "Prioritised consistency, repeatability, and reliability across the integration process."
            ],
            isConfidential: true,
            technologies: "C#, REST APIs, Postman, JSON, XML",
            link: ""
        },
        {
            id: "space-shooter",
            title: "Space Shooter Game",
            category: "Creative side project",
            summary: "A C# game prototype used to explore interaction timing, feedback loops, and structured gameplay logic.",
            description: "Although separate from business software, this project strengthened my thinking around state, responsiveness, and user feedback.",
            role: "Desktop game prototype",
            visibility: "Prototype",
            imageUrl: "assets/images/spaceShooterPreviewCV.png",
            imageAlt: "Preview of the Space Shooter game project",
            tech: [
                "C#",
                ".NET"
            ],
            highlights: [
                "Explored state, timing, and user feedback through a playful C# prototype.",
                "Practised building responsive interaction patterns outside a traditional website.",
                "Strengthened problem-solving around flow, pacing, and control."
            ],
            technologies: "C#, .NET",
            link: ""
        },
        {
            id: "valentines",
            title: "Valentine's Day Page",
            category: "Early web experiment",
            summary: "An early front-end project that captures the start of my interest in visual interaction and web presentation.",
            description: "This project remains in the portfolio as a milestone that shows progression from early experiments to more structured, professional builds.",
            role: "Personal front-end build",
            visibility: "Public project",
            imageUrl: "assets/images/VdayPreview.png",
            imageAlt: "Preview of the Valentine's Day landing page project",
            tech: [
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript"
            ],
            highlights: [
                "Represents an early stage of learning through practical front-end experimentation.",
                "Shows the start of my interest in visual presentation and interaction design.",
                "Provides a clear comparison point against my more recent full-stack work."
            ],
            liveUrl: "https://huvashen.github.io/YoshnaValentinesDay26/",
            githubUrl: "https://github.com/Huvashen/YoshnaValentinesDay26/",
            technologies: "HTML, CSS, JavaScript, TypeScript",
            link: "https://huvashen.github.io/YoshnaValentinesDay26/"
        }
    ],
    contact: {
        email: "gramanihuvashen@icloud.com",
        github: "https://github.com/Huvashen",
        linkedin: "https://www.linkedin.com/in/huvashen-gramani-64aa75236/"
    },
    skillGroups: [
        {
            id: "frontend",
            tabLabel: "Frontend",
            title: "Frontend Development",
            summary: "Tools I use to build responsive, accessible, and polished web interfaces.",
            skills: [
                {
                    name: "HTML",
                    icon: "html",
                    logoUrl: "assets/stack-icons/custom/html5.png"
                },
                {
                    name: "CSS",
                    icon: "css",
                    logoUrl: "assets/stack-icons/custom/css3.png"
                },
                {
                    name: "Tailwind CSS",
                    icon: "tailwind",
                    logoUrl: "assets/stack-icons/custom/tailwind-css.svg"
                },
                {
                    name: "JavaScript",
                    icon: "javascript",
                    logoUrl: "assets/stack-icons/custom/javascript.webp"
                },
                {
                    name: "TypeScript",
                    icon: "typescript",
                    logoUrl: "assets/stack-icons/custom/typescript.png"
                },
                {
                    name: "Angular",
                    icon: "angular",
                    logoUrl: "assets/stack-icons/custom/angular.webp"
                },
                {
                    name: "NG-ZORRO",
                    icon: "ng-zorro",
                    logoUrl: "assets/stack-icons/custom/ng-zorro.png"
                },
                {
                    name: "Responsive UI",
                    icon: "responsive-ui",
                    logoUrl: "assets/stack-icons/custom/responsive-ui.png"
                },
                {
                    name: "Adobe XD",
                    icon: "adobe-xd",
                    logoUrl: "assets/stack-icons/custom/adobe-xd.png"
                }
            ]
        },
        {
            id: "backend",
            tabLabel: "Backend",
            title: "Backend & Tools",
            summary: "Technologies I use for APIs, integrations, data handling, and application logic.",
            skills: [
                {
                    name: "C#",
                    icon: "csharp-dotnet",
                    logoUrl: "assets/stack-icons/custom/csharp.png"
                },
                {
                    name: ".NET",
                    icon: "csharp-dotnet",
                    logoUrl: "assets/stack-icons/custom/dotnet.png"
                },
                {
                    name: "REST APIs",
                    icon: "api"
                },
                {
                    name: "SQL / Databases",
                    icon: "sql",
                    logoUrl: "assets/stack-icons/custom/sql-databases.png"
                },
                {
                    name: "Git",
                    icon: "git-github",
                    logoUrl: "assets/stack-icons/custom/git.png"
                },
                {
                    name: "GitHub",
                    icon: "git-github",
                    logoUrl: "assets/stack-icons/custom/github.png"
                },
                {
                    name: "Agile / Scrum",
                    icon: "agile",
                    logoUrl: "assets/stack-icons/custom/agile-scrum.png"
                },
                {
                    name: "Java",
                    icon: "java",
                    logoUrl: "assets/stack-icons/custom/java.png"
                },
                {
                    name: "Postman",
                    icon: "postman",
                    logoUrl: "assets/stack-icons/custom/postman.webp"
                },
                {
                    name: "Testing / Debugging",
                    icon: "testing",
                    logoUrl: "assets/stack-icons/custom/testing-debugging.png"
                },
                {
                    name: "RabbitMQ",
                    icon: "rabbitmq",
                    logoUrl: "assets/stack-icons/custom/rabbitmq.webp"
                }
            ]
        },
        {
            id: "platforms",
            tabLabel: "Platforms",
            title: "Project Management Tools & Platforms",
            summary: "Platforms and tools I use for delivery, collaboration, support, and day-to-day development.",
            skills: [
                {
                    name: "JIRA",
                    icon: "jira",
                    logoUrl: "assets/stack-icons/custom/jira.png"
                },
                {
                    name: "Azure DevOps",
                    icon: "azure-devops",
                    logoUrl: "assets/stack-icons/custom/azure-devops.webp"
                },
                {
                    name: "Infobip",
                    icon: "infobip",
                    logoUrl: "assets/stack-icons/custom/infobip.png"
                },
                {
                    name: "Visual Studio Code",
                    icon: "visual-studio",
                    logoUrl: "assets/stack-icons/custom/visual-studio-code.png"
                },
                {
                    name: "Visual Studio",
                    icon: "visual-studio",
                    logoUrl: "assets/stack-icons/custom/visual-studio.png"
                },
                {
                    name: "Manage Engine",
                    icon: "manage-engine",
                    logoUrl: "assets/stack-icons/custom/manage-engine.png"
                },
                {
                    name: "ClickUp",
                    icon: "clickup",
                    logoUrl: "assets/stack-icons/custom/clickup.png"
                }
            ]
        }
    ],
    workPillars: [
        {
            id: "intentional-ui",
            kicker: "Visual direction",
            title: "Purposeful interfaces with clear hierarchy",
            description: "I focus on layout, spacing, motion, and visual rhythm so users can understand a screen quickly.",
            outcomes: [
                "Clear section structure and visual pacing",
                "Motion that supports interaction without distracting from it",
                "Components that feel polished on desktop and mobile"
            ]
        },
        {
            id: "practical-engineering",
            kicker: "Implementation",
            title: "Maintainable code behind polished screens",
            description: "I aim to keep components, state, and interactions structured so projects can keep evolving after launch.",
            outcomes: [
                "Code structures that are easier to iterate on",
                "State and interactions that stay manageable as pages grow",
                "A healthy balance between creative design and maintainable code"
            ]
        },
        {
            id: "ownership",
            kicker: "Working style",
            title: "Reliable ownership and steady iteration",
            description: "I work best when feedback is clear, progress is consistent, and final details are treated with care.",
            outcomes: [
                "Fast iteration once feedback starts flowing",
                "Attention to detail in final UI cleanup and refinement",
                "A calm, practical approach to solving product problems"
            ]
        }
    ],
    aboutHighlights: [
        {
            title: "Interface polish with purpose",
            body: "I refine working screens into responsive, readable, and trustworthy user experiences."
        },
        {
            title: "Full-stack problem solving",
            body: "I work across UI, APIs, integrations, and data flow so features feel complete from screen to system."
        },
        {
            title: "Business-aware delivery",
            body: "I understand that software needs to support real workflows, not just look good in isolation."
        },
        {
            title: "Built to keep evolving",
            body: "I aim for clean structures that make future content, features, and integrations easier to add."
        }
    ],
    skills: [
        {
            title: "FRONTEND",
            description: "Responsive interfaces and interactive experiences",
            details: "I build responsive interfaces with clear layouts and useful motion. This portfolio brings that together with animated text, smooth scrolling, and a 3D character.",
            tools: [
                "HTML", "CSS", "JavaScript", "TypeScript", "React", "React Router",
                "GSAP", "ScrambleText", "Lenis", "Three.js", "WebGL",
                "Angular", "Tailwind CSS", "NG-ZORRO", "Adobe XD"
            ]
        },
        {
            title: "BACKEND",
            description: "APIs, data, and application logic",
            details: "I work on the logic behind the interface, from integrating REST APIs and working with relational data to testing requests and debugging how information moves between systems.",
            tools: [
                "C#", ".NET", "Java", "REST APIs", "SQL / Databases",
                "RabbitMQ", "Postman", "Testing / Debugging"
            ]
        },
        {
            title: "FULL-STACK",
            description: "Connecting interfaces, logic, and delivery",
            details: "I connect UI, integrations, and data flow so features work end to end. In this portfolio, the chess board uses chess.js for the rules and runs the Redox WebAssembly engine in a browser worker.",
            tools: [
                "Vite", "npm", "Git", "GitHub", "Agile / Scrum",
                "chess.js", "Web Workers", "WebAssembly", "Redox Chess"
            ]
        }
    ]
};

export const config = {
    ...data,
    projects: data.projects.map(project => ({ ...project, image: assetUrl(project.imageUrl) })),
};
