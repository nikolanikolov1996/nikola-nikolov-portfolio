import { PortfolioProject } from '../models/portfolio-project.model';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'zenegy',
    period: '2022 - Present',
    title: 'Zenegy',
    summary:
      'Developing and maintaining enterprise payroll software, building full-stack features, REST APIs, and complex business logic for production systems.',
    chips: ['C#', '.NET', 'Angular', 'REST APIs', 'SQL Server', 'Azure DevOps'],
    details:
      'Enterprise Full Stack Software Engineer contributing to the development of a large-scale payroll and HR platform serving thousands of businesses. Responsible for designing and implementing production-ready features across Angular and ASP.NET Core, developing complex payroll and financial business logic, building scalable REST APIs, maintaining SQL Server databases, troubleshooting production issues, and collaborating across multiple teams to deliver reliable, secure, and maintainable software in an Agile environment.',
    highlights: [
      'Designed, developed, and maintained full-stack features across Angular and ASP.NET Core for payroll, HR, company management, and employee administration.',
      'Implemented complex business rules and domain-driven functionality involving salary calculations, vacation regulations, payroll profiles, banking integrations, and government reporting requirements.',
      'Built and maintained REST APIs, CQRS command/query handlers, Entity Framework Core persistence, and SQL Server data models while ensuring data consistency and backward compatibility.',
      'Investigated and resolved production issues by debugging distributed services, analyzing logs, reproducing complex edge cases, and identifying root causes across multiple applications and integrations.',
      'Collaborated closely with product owners, QA engineers, and developers using Agile methodologies, Azure DevOps, Jira, GitHub, pull requests, and code reviews to deliver production-ready software.',
    ],
    technologies: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'Angular',
      'TypeScript',
      'SQL Server',
      'REST APIs',
      'CQRS',
      'Azure DevOps',
      'Jira',
      'GitHub',
    ],
    websiteUrl: 'https://zenegy.com/',
  },
  {
    id: 'sitehub',
    period: '2021 - 2022',
    title: 'SiteHub',
    summary:
      'Contributed to the early development of SiteHub, building full-stack features, CQRS handlers, and core platform functionality.',
    chips: [
      'C#',
      'ASP.NET Core',
      'Angular',
      'TypeScript',
      'SQL Server',
      'CQRS',
      'REST APIs',
      'Git',
    ],
    details:
      'Contributed to SiteHub as a Junior Full-Stack .NET Developer during its early development. SiteHub supports construction-site logistics and operations, helping teams streamline deliveries, improve productivity, and reduce material waste. I worked on core platform features, backend services, frontend functionality, and business logic within an enterprise software environment and modern architectural patterns.',
    highlights: [
      'Contributed to the development of SiteHub’s core architecture, implementing new features across both the backend and frontend using ASP.NET Core, Angular, and SQL Server.',
      'Developed CQRS command and query handlers, REST APIs, and business logic while fixing bugs, improving existing functionality, and participating in code reviews.',
      'Worked closely with senior engineers to learn enterprise development practices, clean architecture principles, and Agile workflows before transitioning to the Zenegy payroll platform.',
      'Helped build the application’s foundation, gaining hands-on experience with scalable software design, database development, and collaborative development practices.',
    ],
    technologies: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'Angular',
      'TypeScript',
      'SQL Server',
      'REST APIs',
      'CQRS',
      'Git',
    ],
    websiteUrl: 'https://sitehub.dk/',
  },
  {
    id: 'distantpoint',
    period: '2020 - 2021',
    title: 'DistantPoint',
    summary:
      'Built an RFID-based cashless payment platform with secure transactions and real-time card balance management.',
    chips: ['C#', '.NET', 'React', 'PostgreSQL', 'RFID', 'Git'],
    details:
      'Contributed to the development of an RFID-based cashless payment platform for large-scale events, building features for secure payment processing, card management, and real-time transaction handling.',
    highlights: [
      'Developed features for RFID card balance management, payment processing, and real-time transaction tracking.',
      'Built backend functionality and contributed to the integration between RFID hardware and the payment platform.',
      'Investigated and resolved hardware-software communication issues to ensure reliable system performance during live events.',
      'Collaborated with the development team to deliver a stable, secure, and high-performance cashless payment solution.',
    ],
    technologies: [
      'C#',
      '.NET',
      'React',
      'PostgreSQL',
      'MongoDB',
      'ABP Framework',
      'REST APIs',
      'Git',
    ],
  },
];
