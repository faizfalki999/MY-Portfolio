/**
 * =================================================================
 * RENDER ENGINE
 * Renders data dynamically into target HTML containers.
 * =================================================================
 */

// Render Metrics Section in Hero Tab
function renderMetrics() {
  const container = document.getElementById('metrics-container');
  if (!container) return;

  const projectsCount = window.PROJECTS_DATA ? window.PROJECTS_DATA.length : 0;
  const videosCount = window.VIDEOS_DATA ? window.VIDEOS_DATA.length : 0;
  const businessesCount = window.BUSINESSES_DATA ? window.BUSINESSES_DATA.length : 0;

  const metrics = [
    {
      value: projectsCount > 0 ? `${projectsCount}+` : '0',
      label: "Projects Completed"
    },
    {
      value: videosCount > 0 ? `${videosCount}+` : '0',
      label: "Videos Created"
    },
    {
      value: businessesCount > 0 ? `${businessesCount}+` : '0',
      label: "Businesses Built"
    },
    {
      value: "200+",
      label: "Followers Across Platforms"
    }
  ];

  container.innerHTML = metrics.map((metric, index) => `
    <div class="flex items-center gap-4 pl-0 ${index > 0 ? 'md:pl-6' : 'md:pl-4'} pt-4 md:pt-0">
      <div class="w-12 h-12 rounded-full border border-lightBorder relative flex-shrink-0 flex items-center justify-center">
        <div class="absolute inset-0 rounded-full bg-[linear-gradient(to_top_right,transparent_48%,rgba(255,255,255,0.06)_50%,transparent_52%)]"></div>
        <div class="absolute inset-0 rounded-full bg-[linear-gradient(to_bottom_right,transparent_48%,rgba(255,255,255,0.06)_50%,transparent_52%)]"></div>
      </div>
      <div class="flex flex-col">
        <span class="text-2xl sm:text-3xl font-bold tracking-tight text-textPrimary">${metric.value}</span>
        <span class="text-xs sm:text-sm text-textSecondary uppercase tracking-wider font-light leading-snug">${metric.label}</span>
      </div>
    </div>
  `).join('');
}

// Render Connect With Me Social Links
function renderSocialLinks() {
  const container = document.getElementById('social-links-container');
  if (!container || !window.PORTFOLIO_CONFIG || !window.PORTFOLIO_CONFIG.socialLinks) return;

  const links = Object.values(window.PORTFOLIO_CONFIG.socialLinks);

  container.innerHTML = links.map(item => `
    <a href="${item.url}" target="_blank" class="flex items-center justify-between border border-lightBorder hover:border-textPrimary/40 rounded-xl p-3 bg-darkCard/25 hover:bg-white/5 transition-all text-sm group">
      <div class="flex items-center gap-3">
        <div class="w-6 h-6 border border-lightBorder relative flex items-center justify-center">
          <div class="absolute inset-0 bg-[linear-gradient(to_top_right,transparent_48%,rgba(255,255,255,0.06)_50%,transparent_52%)]"></div>
          <div class="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_48%,rgba(255,255,255,0.06)_50%,transparent_52%)]"></div>
        </div>
        <span class="font-medium text-textSecondary group-hover:text-textPrimary transition-colors">${item.name}</span>
      </div>
      <svg class="w-4 h-4 text-textMuted group-hover:text-textPrimary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
      </svg>
    </a>
  `).join('');
}

// Render Projects List
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container || !window.PROJECTS_DATA) return;

  if (window.PROJECTS_DATA.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center border border-lightBorder border-dashed rounded-2xl bg-darkCard/10">
        <span class="text-xs uppercase tracking-widest text-textMuted font-medium">Coming Soon</span>
      </div>
    `;
    return;
  }

  container.innerHTML = window.PROJECTS_DATA.map(project => {
    let badgeStyle = '';
    if (project.badgeText === 'In Progress') {
      badgeStyle = 'text-purple-300 bg-purple-950/80 border-purple-500/30';
    } else if (project.badgeText === 'Coming Soon') {
      badgeStyle = 'text-amber-300 bg-amber-950/80 border-amber-500/30';
    } else if (project.badgeText === 'Live') {
      badgeStyle = 'text-emerald-300 bg-emerald-950/80 border-emerald-500/30';
    }

    if (project.inProgress || project.comingSoon) {
      return `
        <div class="border border-lightBorder rounded-2xl bg-darkCard/20 p-5 flex flex-col justify-between hover:border-textSecondary/25 transition-all relative overflow-hidden">
          <div class="absolute inset-0 bg-darkBg/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center gap-2">
            <span class="text-xs uppercase tracking-widest ${badgeStyle} border px-3 py-1 rounded-full">${project.badgeText}</span>
            <span class="text-sm text-textPrimary font-medium uppercase tracking-widest">${project.title}</span>
          </div>
          <div class="flex flex-col gap-4 opacity-30 select-none">
            <div class="wireframe-box w-full aspect-[16/10] rounded-xl relative flex items-center justify-center"></div>
            <div>
              <h3 class="text-xl font-semibold text-textPrimary">${project.title}</h3>
              <p class="text-sm text-textSecondary font-light mt-1">${project.description}</p>
            </div>
          </div>
          <div class="mt-6 pt-3 border-t border-lightBorder/50 flex items-center justify-between text-xs text-textSecondary opacity-30">
            <span>${project.tags.join(' • ')}</span>
          </div>
        </div>
      `;
    }

    const isExternal = project.link && project.link.startsWith('http');
    const linkText = project.badgeText === 'Live' ? 'Visit Site' : 'Details';
    const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';

    return `
      <div class="border border-lightBorder rounded-2xl bg-darkCard/20 p-5 flex flex-col justify-between hover:border-textSecondary/25 transition-all group">
        <div class="flex flex-col gap-4">
          <div class="wireframe-box w-full aspect-[16/10] rounded-xl relative flex items-center justify-center overflow-hidden">
            ${project.image ? `
              <img src="${project.image}" alt="${project.title}" class="absolute inset-0 w-full h-full object-cover transition-all duration-500 ${project.hoverImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'}">
              ${project.hoverImage ? `
                <img src="${project.hoverImage}" alt="${project.title} signup modal" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
              ` : ''}
            ` : `
              <span class="text-xs uppercase tracking-widest text-textMuted font-mono select-none">${project.wireframeLabel || '[Project]'}</span>
            `}
            ${project.badgeText ? `
              <span class="absolute top-3 right-3 text-[10px] uppercase tracking-widest ${badgeStyle} border px-2.5 py-0.5 rounded-full z-10 select-none">
                ${project.badgeText}
              </span>
            ` : ''}
          </div>
          <div>
            <h3 class="text-xl font-semibold text-textPrimary">${project.title}</h3>
            <p class="text-sm text-textSecondary font-light mt-1">${project.description}</p>
          </div>
        </div>
        <div class="mt-6 pt-3 border-t border-lightBorder/50 flex items-center justify-between text-xs text-textSecondary font-semibold uppercase tracking-wider">
          <span>${project.tags.join(' • ')}</span>
          <a href="${project.link}" ${targetAttr} class="text-white hover:underline flex items-center gap-1">${linkText} →</a>
        </div>
      </div>
    `;
  }).join('');
}

// Render Videos List
function renderVideos() {
  const container = document.getElementById('videos-grid');
  if (!container || !window.VIDEOS_DATA) return;

  if (window.VIDEOS_DATA.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center border border-lightBorder border-dashed rounded-2xl bg-darkCard/10">
        <span class="text-xs uppercase tracking-widest text-textMuted font-medium">Coming Soon</span>
      </div>
    `;
    return;
  }

  container.innerHTML = window.VIDEOS_DATA.map(video => `
    <div class="border border-lightBorder rounded-2xl bg-darkCard/25 p-5 flex flex-col gap-4 hover:border-textSecondary/25 transition-all">
      <div class="wireframe-box w-full aspect-[16/9] rounded-xl relative flex items-center justify-center cursor-pointer group" onclick="window.open('${video.link}', '_blank')">
        <div class="w-14 h-14 rounded-full bg-white/15 group-hover:bg-white/20 border border-white/25 backdrop-blur-md flex items-center justify-center transition-all z-10 shadow-xl">
          <svg class="w-6 h-6 text-white fill-current translate-x-[1.5px]" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <span class="absolute bottom-3 right-3 bg-black/75 px-2.5 py-1 rounded text-xs font-mono tracking-widest text-textPrimary">${video.duration}</span>
      </div>
      <div>
        <span class="text-xs uppercase tracking-widest text-red-400 font-semibold">${video.category}</span>
        <h3 class="text-xl font-medium text-textPrimary mt-1">${video.title}</h3>
        <p class="text-sm text-textSecondary font-light mt-1.5 leading-relaxed">${video.description}</p>
      </div>
    </div>
  `).join('');
}

// Render Businesses List
function renderBusinesses() {
  const container = document.getElementById('businesses-list');
  if (!container || !window.BUSINESSES_DATA) return;

  if (window.BUSINESSES_DATA.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center border border-lightBorder border-dashed rounded-2xl bg-darkCard/10 max-w-3xl mx-auto mb-12">
        <span class="text-xs uppercase tracking-widest text-textMuted font-medium">Coming Soon</span>
      </div>
    `;
    return;
  }

  container.innerHTML = window.BUSINESSES_DATA.map(business => `
    <div class="max-w-3xl mx-auto border border-lightBorder rounded-3xl bg-darkCard/20 p-8 flex flex-col md:flex-row items-center gap-8 mb-12">
      <div class="wireframe-box w-48 h-48 rounded-2xl flex-shrink-0 flex items-center justify-center select-none">
        <span class="text-xs uppercase tracking-widest text-textMuted font-bold font-display">${business.wireframeLabel}</span>
      </div>
      <div class="flex flex-col items-start gap-4">
        <span class="text-xs uppercase tracking-widest text-emerald-400 font-semibold">${business.badge}</span>
        <h3 class="text-2xl sm:text-3xl font-bold font-display text-textPrimary">${business.name}</h3>
        <p class="text-textSecondary font-light leading-relaxed text-sm sm:text-base">${business.description}</p>
        <a href="${business.link}" target="_blank" class="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-textPrimary hover:underline">
          <span>Inquire / Get in touch</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
    </div>
  `).join('');
}

// Render homepage metrics highlights
function renderHomeHighlights() {
  // 1. Home Project Card
  const projectCard = document.getElementById('home-projects-card');
  if (projectCard) {
    const featuredProj = window.PROJECTS_DATA && window.PROJECTS_DATA.find(p => p.featured) || (window.PROJECTS_DATA && window.PROJECTS_DATA[0]);
    if (featuredProj) {
      projectCard.innerHTML = `
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-textSecondary font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>Featured Projects</span>
          </div>
          <div class="wireframe-box w-full aspect-[16/10] rounded-xl relative flex items-center justify-center overflow-hidden">
            ${featuredProj.image ? `<img src="${featuredProj.image}" alt="${featuredProj.title}" class="absolute inset-0 w-full h-full object-cover">` : `<span class="text-xs uppercase tracking-widest text-textMuted font-mono select-none">${featuredProj.wireframeLabel || '[Project]'}</span>`}
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-base sm:text-lg font-medium text-textPrimary">${featuredProj.title}</h3>
            <span class="text-[10px] sm:text-xs uppercase tracking-widest text-textMuted font-light">${featuredProj.tags.join(' • ')}</span>
          </div>
        </div>
        <button onclick="switchTab('projects')"
          class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-textSecondary hover:text-white transition-colors mt-6 pt-2 border-t border-lightBorder/50 w-full justify-between">
          <span>View Project</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      `;
    } else {
      projectCard.innerHTML = `
        <div class="flex flex-col gap-4 h-full justify-between">
          <div class="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-textSecondary font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>Featured Projects</span>
          </div>
          <div class="py-8 text-center border border-lightBorder border-dashed rounded-xl bg-darkCard/5 my-auto">
            <span class="text-xs uppercase tracking-widest text-textMuted font-medium">Coming Soon</span>
          </div>
          <div></div>
        </div>
      `;
    }
  }

  // 2. Home Video Card
  const videoCard = document.getElementById('home-videos-card');
  if (videoCard) {
    const latestVideo = window.VIDEOS_DATA && window.VIDEOS_DATA[0];
    if (latestVideo) {
      videoCard.innerHTML = `
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-textSecondary font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>Latest Videos</span>
          </div>
          <div class="wireframe-box w-full aspect-[16/10] rounded-xl relative flex items-center justify-center group cursor-pointer" onclick="window.open('${latestVideo.link}', '_blank')">
            <div class="w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all z-10 shadow-lg">
              <svg class="w-5 h-5 text-white fill-current translate-x-[1.5px]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-base sm:text-lg font-medium text-textPrimary">${latestVideo.shortTitle || latestVideo.title}</h3>
            <span class="text-[10px] sm:text-xs uppercase tracking-widest text-textMuted font-light">${latestVideo.categorySub || latestVideo.category}</span>
          </div>
        </div>
        <button onclick="switchTab('videos')"
          class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-textSecondary hover:text-white transition-colors mt-6 pt-2 border-t border-lightBorder/50 w-full justify-between">
          <span>Watch on YouTube</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      `;
    } else {
      videoCard.innerHTML = `
        <div class="flex flex-col gap-4 h-full justify-between">
          <div class="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-textSecondary font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>Latest Videos</span>
          </div>
          <div class="py-8 text-center border border-lightBorder border-dashed rounded-xl bg-darkCard/5 my-auto text-center">
            <span class="text-xs uppercase tracking-widest text-textMuted font-medium">Coming Soon</span>
          </div>
          <div></div>
        </div>
      `;
    }
  }

  // 3. Home Business Card
  const businessCard = document.getElementById('home-businesses-card');
  if (businessCard) {
    const latestBusiness = window.BUSINESSES_DATA && window.BUSINESSES_DATA[0];
    if (latestBusiness) {
      businessCard.innerHTML = `
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-textSecondary font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>My Businesses</span>
          </div>
          <div class="wireframe-box w-full aspect-[16/10] rounded-xl relative flex items-center justify-center">
            <span class="text-xs uppercase tracking-widest text-textMuted font-bold font-display select-none">${latestBusiness.wireframeLabel || '[BRAND]'}</span>
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-base sm:text-lg font-medium text-textPrimary">${latestBusiness.name}</h3>
            <span class="text-[10px] sm:text-xs uppercase tracking-widest text-textMuted font-light">${latestBusiness.tagline}</span>
          </div>
        </div>
        <button onclick="switchTab('businesses')"
          class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-textSecondary hover:text-white transition-colors mt-6 pt-2 border-t border-lightBorder/50 w-full justify-between">
          <span>Learn More</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      `;
    } else {
      businessCard.innerHTML = `
        <div class="flex flex-col gap-4 h-full justify-between">
          <div class="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-textSecondary font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>My Businesses</span>
          </div>
          <div class="py-8 text-center border border-lightBorder border-dashed rounded-xl bg-darkCard/5 my-auto">
            <span class="text-xs uppercase tracking-widest text-textMuted font-medium">Coming Soon</span>
          </div>
          <div></div>
        </div>
      `;
    }
  }
}

// Initialize all dynamic render calls
function initRender() {
  renderMetrics();
  renderSocialLinks();
  renderProjects();
  renderVideos();
  renderBusinesses();
  renderHomeHighlights();
}

window.initRender = initRender;
