/**
 * =================================================================
 * PROJECTS DATASTORE
 * Add, edit, or remove projects by editing this array.
 * =================================================================
 */

const PROJECTS_DATA = [
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
  }
];

window.PROJECTS_DATA = PROJECTS_DATA;

