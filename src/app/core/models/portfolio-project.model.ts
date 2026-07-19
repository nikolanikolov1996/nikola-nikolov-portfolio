export interface PortfolioProject {
  id: string;
  period: string;
  title: string;
  summary: string;
  chips: string[];
  details: string;
  highlights: string[];
  technologies: string[];
  websiteUrl?: string;
}
