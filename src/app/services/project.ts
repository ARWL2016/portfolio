export interface Project {
  name: string;
  tech: string;
  tags: string;
  featured: boolean;
  summary: string;
  user_stories: string;
  highlights: [string];
  image_url: string;
  image_order: number;
  github_link: string;
  website_link: string;
  page_speed_score: number;
  page_size: number;
  page_load_time: number;
}
