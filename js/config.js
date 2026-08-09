/**
 * =================================================================
 * PORTFOLIO CONFIGURATION & SOCIAL LINKS
 * Edit this file to update your contact links, bio details, or CV.
 * =================================================================
 */

const PORTFOLIO_CONFIG = {
  // Supabase Configuration for Live Sync (Fill these to enable live updates)
  supabaseUrl: "https://kigdrziwddshkaduusov.supabase.co",
  supabaseKey: "sb_publishable_t9YMXo_8dkAHk7ix7W4law_abXX7iNX",

  // Personal Info
  name: "Faiz",
  fullName: "Syed Faaiz-ur-Rehman",
  badge: "Developer • Entrepreneur • Creator",
  title: "Hi, I'm Faiz",
  subtitle: "I build websites, software & brands that make an impact.",
  quote: "Stay focused, keep building, and never stop learning.",
  universityDegree: "BS Artificial Intelligence",
  degreeStatus: "graduate", // "student" or "graduate"
  location: "Pakistan",

  // Contact Details
  whatsappNumber: "923237858574",
  whatsappUrl: "https://wa.me/923237858574",
  cvFile: "./assets/documents/CV.docx",
  heroImage: "./assets/images/hero.png",

  // Social Links Configuration
  socialLinks: {
    github: {
      name: "GitHub",
      url: "https://github.com/faizfalki999"
    },
    instagram: {
      name: "Instagram",
      handle: "@syedfaaiz._",
      url: "https://instagram.com/syedfaaiz._"
    },
    youtube: {
      name: "YouTube",
      url: "https://youtube.com"
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/syed-faaiz-ur-rehman/"
    }
  }
};

window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
