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
  google_page_speed_score: number;
  pingdom_page_size: number;
  pingdom_average_load_time: number;
  pingdom_average_page_speed: number;
}
