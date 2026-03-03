import { MediaItem } from "../types";

export const mediaItems: MediaItem[] = [
  {
    id: "1",
    type: "image",
    title: "Climate Finance Summit 2024",
    description: "Speaking at the International Climate Finance Summit",
    thumbnailUrl: "/images/climate-financing.jpg",
    mediaUrl: "/images/climate-financing.jpg",
    date: "2024-03-15",
    category: "Events"
  },
  {
    id: "2",
    type: "video",
    title: "Professional Presentation",
    description: "Video presentation on Accelerating an inclusive digital economy in Africa",
    thumbnailUrl: "/images/digital-planning.jpg",
    mediaUrl: "https://www.youtube.com/embed/jX1dIS34pY8",
    date: "2024-02-20",
    category: "Presentations"
  },
  {
    id: "3",
    type: "image",
    title: "Critical Minerals Workshop",
    description: "Workshop on leveraging critical minerals for industrial development",
    thumbnailUrl: "/images/critical-minerals.jpg",
    mediaUrl: "/images/critical-minerals.jpg",
    date: "2024-01-10",
    category: "Workshops"
  }
];
