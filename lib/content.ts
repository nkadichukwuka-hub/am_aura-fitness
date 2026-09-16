import type { LucideIcon } from "lucide-react";
import { Bike, Dumbbell, Flame, Sparkles, Swords, Wind } from "lucide-react";

export interface ClassItem {
  icon: LucideIcon;
  name: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  photoSrc: string;
  photoAlt: string;
}

export const classes: ClassItem[] = [
  {
    icon: Flame,
    name: "HIIT",
    description: "Short, hard intervals that build conditioning fast.",
    duration: "30 min",
    difficulty: "Advanced",
    photoSrc: "/images/class-hiit.webp",
    photoAlt: "Two people doing an intense battle ropes workout in the studio",
  },
  {
    icon: Wind,
    name: "Yoga",
    description: "Mobility and breath work to recover between hard sessions.",
    duration: "50 min",
    difficulty: "Beginner",
    photoSrc: "/images/class-yoga.webp",
    photoAlt: "A group holding a yoga pose during an indoor class",
  },
  {
    icon: Dumbbell,
    name: "Strength Training",
    description: "Barbell fundamentals — squat, press, pull, hinge.",
    duration: "60 min",
    difficulty: "Intermediate",
    photoSrc: "/images/class-strength.webp",
    photoAlt: "A trainer coaching a member through a barbell front squat",
  },
  {
    icon: Bike,
    name: "Cycling",
    description: "Music-driven rides that build endurance on the bike.",
    duration: "45 min",
    difficulty: "Intermediate",
    photoSrc: "/images/class-cycling.webp",
    photoAlt: "A rider focused mid-effort on a stationary bike",
  },
  {
    icon: Swords,
    name: "Boxing",
    description: "Pad work and technique drills — no sparring required.",
    duration: "45 min",
    difficulty: "Advanced",
    photoSrc: "/images/class-boxing.webp",
    photoAlt: "A coach holding pads for a boxer's punch combination",
  },
  {
    icon: Sparkles,
    name: "Pilates",
    description: "Core control and posture work on the mat.",
    duration: "40 min",
    difficulty: "Beginner",
    photoSrc: "/images/class-pilates.webp",
    photoAlt: "Members on mats during a Pilates class",
  },
];

export interface Trainer {
  name: string;
  specialty: string;
  bio: string;
  photoSrc: string;
  photoAlt: string;
}

export const trainers: Trainer[] = [
  {
    name: "Jordan Reyes",
    specialty: "Strength & Conditioning",
    bio: "Ten years coaching powerlifters and first-timers alike. Jordan builds programs around your actual schedule.",
    photoSrc: "/images/trainer-jordan-reyes.webp",
    photoAlt: "Jordan Reyes",
  },
  {
    name: "Mia Okafor",
    specialty: "Yoga & Mobility",
    bio: "Former physical therapist turned yoga coach. Mia's classes are where lifters go to move better.",
    photoSrc: "/images/trainer-mia-okafor.webp",
    photoAlt: "Mia Okafor",
  },
  {
    name: "Sam Patel",
    specialty: "Boxing",
    bio: "Former amateur boxer. Sam teaches technique first, intensity second.",
    photoSrc: "/images/trainer-sam-patel.webp",
    photoAlt: "Sam Patel",
  },
  {
    name: "Elena Ruiz",
    specialty: "Cycling & HIIT",
    bio: "Runs the studio's toughest 6am class and somehow makes people come back for more.",
    photoSrc: "/images/trainer-elena-ruiz.webp",
    photoAlt: "Elena Ruiz",
  },
];

export const heroImage = {
  src: "/images/hero.webp",
  alt: "Athlete lifting a barbell in a dark studio",
};

export const aboutImage = {
  src: "/images/about.webp",
  alt: "Close-up of stacked weight plates on a rack in the studio",
};

export const chatWebhookUrl =
  "https://nkadi-goshen.app.n8n.cloud/webhook/0945aced-b01d-4cd7-a439-6ca0efbc9d35/chat";

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingTier {
  tier: "Basic" | "Pro" | "Elite";
  price: string;
  billingPeriod: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    tier: "Basic",
    price: "$29",
    billingPeriod: "/mo",
    features: [
      { label: "3 classes per week", included: true },
      { label: "Access to open gym hours", included: true },
      { label: "Studio app access", included: true },
      { label: "1:1 coaching sessions", included: false },
      { label: "Guest passes", included: false },
    ],
  },
  {
    tier: "Pro",
    price: "$49",
    billingPeriod: "/mo",
    highlighted: true,
    features: [
      { label: "Unlimited classes", included: true },
      { label: "1 trainer check-in per month", included: true },
      { label: "Priority class booking", included: true },
      { label: "2 guest passes per month", included: true },
      { label: "Personalized nutrition plan", included: false },
    ],
  },
  {
    tier: "Elite",
    price: "$79",
    billingPeriod: "/mo",
    features: [
      { label: "Unlimited classes", included: true },
      { label: "Weekly 1:1 coaching session", included: true },
      { label: "Personalized nutrition plan", included: true },
      { label: "Unlimited guest passes", included: true },
      { label: "Priority class booking", included: true },
    ],
  },
];

export interface Testimonial {
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  name: string;
  membershipTier: string;
}

export const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "I've tried three gyms in this city. This is the first one where the coaches actually know my name and my knee history.",
    name: "Priya N.",
    membershipTier: "Pro Member",
  },
  {
    rating: 5,
    quote:
      "The 6am HIIT class changed my whole week. I'm early to everything now, not just training.",
    name: "Marcus T.",
    membershipTier: "Elite Member",
  },
  {
    rating: 4,
    quote:
      "Yoga on Sundays is the only reason my shoulders still work after squatting all week.",
    name: "Dana K.",
    membershipTier: "Basic Member",
  },
];

export const studioInfo = {
  address: ["482 Ironview Rd", "Portland, OR 97209"],
  hours: [
    { days: "Mon–Fri", time: "6:00am–9:00pm" },
    { days: "Sat–Sun", time: "8:00am–4:00pm" },
  ],
  phone: "(503) 555-0148",
};

export const navLinks = [
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];
