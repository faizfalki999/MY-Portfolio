/**
 * =================================================================
 * PROJECTS DATASTORE
 * Add, edit, or remove projects by editing this array.
 * =================================================================
 */

const PROJECTS_DATA = [
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
