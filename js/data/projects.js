/**
 * =================================================================
 * PROJECTS DATASTORE
 * Add, edit, or remove projects by editing this array.
 * =================================================================
 */

const PROJECTS_DATA = [
  {
    id: "nuvera-skincare",
    title: "Nuvera Skincare: Shopify E-commerce Store",
    description: "A custom-designed Shopify store for a Pakistani skincare brand, replacing its old AI-built website. It includes a full product catalogue, cash-on-delivery checkout, courier integration, and launch-ready SEO.",
    tags: ["Shopify", "E-commerce", "Liquid", "Web Design", "Pakistan"],
    wireframeLabel: "[Nuvera Skincare]",
    featured: true,
    comingSoon: false,
    badgeText: "Live",
    status: "Completed",
    image: "./assets/images/nuvera/cover.png",
    hoverImage: "./assets/images/nuvera/gallery-1.png",
    link: "./projects/nuvera.html",
    liveSite: "https://nuveraskincare.com",
    client: "Nuvera Skincare, Lahore, Pakistan (skincare, body care, hair removal, fragrances)",
    role: "Web designer and developer (store design, setup, and launch). [Confirm whether to mention Dice Digital here.]",
    summary: "A custom-designed Shopify store for a Pakistani skincare brand, replacing its old AI-built website. It includes a full product catalogue, cash-on-delivery checkout, courier integration, and launch-ready SEO.",
    highlights: [
      "Custom Shopify theme built on Dawn, with polished homepage, FAQ, About, and Contact pages",
      "15 products across Skincare, Bodycare, Fragrances, Deals, and a \"Build Your Bundle\" collection",
      "Cash on Delivery checkout with local delivery rates: Rs 250 standard, free over Rs 5,000",
      "PostEx courier app for order fulfilment and tracking",
      "Inventory tracking, discount codes, and refund, shipping, and contact policies",
      "Custom domain with DNS and SSL, plus SEO titles, meta descriptions, and image alt text"
    ],
    techStack: ["Shopify", "Liquid", "JSON templates", "Shopify Admin GraphQL API", "Shopify CLI"]
  },
  {
    id: "airways-travel-tours",
    title: "Airways Travel & Tours",
    description: "A comprehensive commercial travel & tourism platform featuring international flight bookings, curated holiday packages, luxury Umrah & Hajj itineraries, fast-track visa assistance, and corporate partner integrations.",
    tags: ["HTML5", "CSS3", "JAVASCRIPT", "PRODUCTION", "UI/UX"],
    wireframeLabel: "[Airways Travel & Tours]",
    featured: true,
    comingSoon: false,
    badgeText: "Live",
    status: "Completed",
    image: "./assets/images/airways-hero.png",
    hoverImage: "./assets/images/airways-preview.png",
    link: "https://airwaystravelandtours.com"
  },
  {
    id: "valorant-poster-generator",
    title: "Valorant Poster Generator",
    description: "A local poster studio & layout editor for building high-res Night Market banners with batch image processing, custom skin positioning, and price/discount customization.",
    tags: ["JAVASCRIPT", "CANVAS", "TOOLING", "AUTOMATION"],
    wireframeLabel: "[Valorant Poster Studio]",
    featured: true,
    comingSoon: false,
    badgeText: "Live",
    status: "Completed",
    image: "./assets/images/valorant-poster-cover.jpg",
    hoverImage: "./assets/images/valorant-poster-preview.png",
    link: "https://github.com/faizfalki999/Valorant_poster_maker"
  },
  {
    id: "printprox-kiosk",
    title: "PrintProx Kiosk",
    description: "A self-service QR code cloud printing kiosk featuring real-time WebSocket telemetry, mobile file uploads, automatic page counting, and mobile payment gateway integration.",
    tags: ["NODE.JS", "EXPRESS", "WEBSOCKETS", "SQLITE"],
    wireframeLabel: "[PrintProx Kiosk]",
    featured: true,
    comingSoon: false,
    badgeText: "Live",
    status: "Completed",
    image: "./assets/images/printprox-kiosk.png",
    hoverImage: "./assets/images/printprox-upload.png",
    link: "https://github.com/faizfalki999"
  },
  {
    id: "creative-web-studio",
    title: "Betryd Studio",
    description: "A streetwear creative studio site with a signup modal for early access, built and deployed live.",
    tags: ["REACT", "VERCEL", "POSTGRES"],
    wireframeLabel: "[Betryd Studio]",
    featured: true,
    comingSoon: false,
    badgeText: "Live",
    status: "Completed",
    image: "./assets/images/betryd-preview.png",
    hoverImage: "./assets/images/betryd-signup-modal.png",
    link: "https://www.betryd.com"
  },
  {
    id: "haseeb-creative-portfolio",
    title: "Haseeb Ali Portfolio",
    description: "A dark-themed creative portfolio website engineered for a visual designer & video editor, featuring bold editorial typography, crimson accent styling, glassmorphism, and an interactive lightbox showcase.",
    tags: ["HTML5", "CSS3", "JAVASCRIPT", "UI/UX"],
    wireframeLabel: "[Haseeb Portfolio]",
    featured: true,
    comingSoon: false,
    badgeText: "Live",
    status: "Completed",
    image: "./assets/images/haseeb-portfolio-hero.png",
    hoverImage: "./assets/images/haseeb-portfolio-preview.png",
    link: "https://haseeb-creative.vercel.app"
  },
  {
    id: "taqi-multimedia-portfolio",
    title: "Taqi Haider Portfolio",
    description: "A grid-editorial multimedia design portfolio featuring bold streetwear typography, dynamic 2D vector animation, branding identity systems, and motion showcases.",
    tags: ["MULTIMEDIA", "MOTION", "BRANDING", "2D ANIMATION"],
    wireframeLabel: "[Taqi Portfolio]",
    featured: true,
    comingSoon: false,
    badgeText: "Live",
    status: "Completed",
    image: "./assets/images/taqi-portfolio-hero.png",
    hoverImage: "./assets/images/taqi-portfolio-preview.png",
    link: "https://taqis-protfolio.vercel.app"
  }
];

window.PROJECTS_DATA = PROJECTS_DATA;

