import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export interface Podcast {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  duration: string;
  topic: string;
  audioUrl?: string;
  transcript?: string;
  createdAt: string;
  description: string;
  // New fields for audio functionality
  hasAudio?: boolean;
  ttsProvider?: string;
  message?: string;
  skillName?: string;
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Electronic Party",
    color: colors.teal,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg",
    artists: ["Avicii", "Alok"],
  },
  {
    id: "2",
    title: "Trance",
    color: colors.green,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_2_f9ymlx.jpg",
    artists: ["Tiesto", "Armin Van Buuren"],
  },
  {
    id: "3",
    title: "Trap Vibes",
    color: colors.rose,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_3_grshca.jpg",
    artists: ["Post Malone", "Travis Scott", "21 savage"],
  },
  {
    id: "4",
    title: "Beatles Classics",
    color: colors.red,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_4_ap5xnb.jpg",
    artists: ["The Beatles"],
  },
  {
    id: "5",
    title: "Electronic Dance",
    color: colors.pink,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776175/spotify-astro/playlist_5_erjyb7.jpg",
    artists: ["Deadmau5"],
  },
  {
    id: "6",
    title: "Cow songs",
    color: colors.gray,
    cover:
      "https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776474/spotify-astro/R-15112137-1586815179-1911_fsyl58.jpg",
    artists: ["Saint Hilda", "Canada Buffalo"],
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}
const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    title: "The Nights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_1_qitfwl.jpg`,
    artists: ["Avicii"],
    album: "The Days / Nights",
    duration: "2:56",
  },
  {
    id: "2",
    title: "Saint-Tropez",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_2_cijs8v.jpg`,
    artists: ["Post Malone"],
    album: "Hollywood's Bleeding",
    duration: "2:23",
  },
  {
    id: "3",
    title: "SICKO MODE",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_3_td9ncs.jpg`,
    artists: ["Travis Scott", "Drake"],
    album: "ASTROWORLD",
    duration: "5:13",
  },
  {
    id: "4",
    title: "Blinding Lights",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_4_lwumgu.png`,
    artists: ["The Weeknd"],
    album: "After Hours",
    duration: "3:22",
  },
  {
    id: "5",
    title: "Shape of You",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_5_rd5xqa.jpg`,
    artists: ["Ed Sheeran"],
    album: "÷ (Divide)",
    duration: "3:53",
  },
  {
    id: "6",
    title: "Uptown Funk",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_6_f1lt7y.jpg`,
    artists: ["Mark Ronson", "Bruno Mars"],
    album: "Uptown Special",
    duration: "4:30",
  },
  {
    id: "7",
    title: "Bad Guy",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_7_m7f0mh.jpg`,
    artists: ["Billie Eilish"],
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
  },
  {
    id: "8",
    title: "Yesterday",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776175/spotify-astro/song_8_hwxisr.jpg`,
    artists: ["The Beatles"],
    album: "Today & Tomorrow",
    duration: "4:38",
  },
  {
    id: "9",
    title: "Havana",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_9_szemzp.jpg`,
    artists: ["Camila Cabello", "Young Thug"],
    album: "Camila",
    duration: "3:37",
  },
  {
    id: "10",
    title: "Radioactive",
    image: `https://res.cloudinary.com/dp3ppkxo5/image/upload/${songScale}/v1693776176/spotify-astro/song_10_sz0cib.jpg`,
    artists: ["Imagine Dragons"],
    album: "Night Visions",
    duration: "3:07",
  },
];

export const samplePodcasts: Podcast[] = [
  {
    id: "podcast_1",
    title: "The Future of AI",
    color: colors.blue,
    cover: "https://via.placeholder.com/300x300/3b82f6/ffffff?text=AI+Future",
    duration: "8:45",
    topic: "Artificial Intelligence",
    description: "Explore how AI will reshape our world in the next decade",
    createdAt: new Date().toISOString(),
    audioUrl: "https://example.com/ai-future.mp3"
  },
  {
    id: "podcast_2", 
    title: "Climate Change Solutions",
    color: colors.green,
    cover: "https://via.placeholder.com/300x300/10b981/ffffff?text=Climate+Solutions",
    duration: "12:30",
    topic: "Climate Change",
    description: "Revolutionary approaches to tackling climate challenges",
    createdAt: new Date().toISOString(),
    audioUrl: "https://example.com/climate-solutions.mp3"
  },
  {
    id: "podcast_3",
    title: "Space Exploration 2024",
    color: colors.purple,
    cover: "https://via.placeholder.com/300x300/8b5cf6/ffffff?text=Space+2024",
    duration: "15:20",
    topic: "Space Technology",
    description: "Latest breakthroughs in space exploration and missions",
    createdAt: new Date().toISOString(),
    audioUrl: "https://example.com/space-2024.mp3"
  },
  {
    id: "podcast_4",
    title: "Quantum Computing Basics",
    color: colors.teal,
    cover: "https://via.placeholder.com/300x300/06b6d4/ffffff?text=Quantum+Computing",
    duration: "10:15",
    topic: "Quantum Computing",
    description: "Understanding quantum computing in simple terms",
    createdAt: new Date().toISOString(),
    audioUrl: "https://example.com/quantum-basics.mp3"
  }
];
