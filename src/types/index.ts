export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  pdfUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
  quote?: string;
  clientName?: string;
  clientTitle?: string;
  companyName?: string;
  companyLogo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  tags: string[];
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  description: string;
  thumbnailUrl: string;
  mediaUrl: string; // For images: direct image URL, For videos: YouTube/Vimeo URL or video file path
  date: string;
  category?: string;
}
