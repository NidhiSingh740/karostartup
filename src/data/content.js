
// src/data/content.js
import { Rocket, ShieldCheck, Presentation, TrendingUp } from 'lucide-react';

export const HERO_CONTENT = {
  headline: "Pitch Your Startup to India’s Top Investors",
  subtext: "Karo Pitch is the ultimate platform where early-stage founders from Bharat can bridge the gap between innovation and capital.",
  primaryCTA: "Apply to Pitch",
  secondaryCTA: "Explore Startups"
};

export const ABOUT_KARO = {
  title: "Empowering the Bharat Entrepreneur",
  description: "Thousands of founders in Tier-2 and Tier-3 cities are building real businesses but lack access to the right mentorship and capital. Karo Pitch was created to bridge this gap, connecting grassroots innovation with India's leading investors.",
  stats: [
    { label: "Stories Told", value: "5000+" },
    { label: "Community", value: "100k+" },
    { label: "Vision", value: "Accessible Funding" }
  ]
};

export const STEPS = [
  {
    id: 1,
    title: "Apply with Pitch Deck",
    desc: "Submit your business details and deck for our panel to review.",
    icon: Rocket
  },
  {
    id: 2,
    title: "Get Shortlisted",
    desc: "KaroStartup selects the most promising businesses for the pitch event.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Pitch Live",
    desc: "Present your vision in a closed-room session with active investors.",
    icon: Presentation
  },
  {
    id: 4,
    title: "Raise & Scale",
    desc: "Secure funding and get the mentorship needed to grow your brand.",
    icon: TrendingUp
  }
];

export const CATEGORIES = [
  "D2C Brands", "Consumer Startups", "MSMEs", 
  "SaaS Startups", "Manufacturing", "Bharat-focused"
];

export const FEATURED_STARTUPS = [
  {
    name: "EcoBharat",
    category: "Manufacturing",
    desc: "Sustainable packaging solutions for rural India.",
  },
  {
    name: "KiranaTech",
    category: "SaaS",
    desc: "Inventory management for Tier-3 retail stores.",
  },
  {
    name: "PureDesi",
    category: "D2C",
    desc: "Authentic organic products sourced directly from farmers.",
  }
];