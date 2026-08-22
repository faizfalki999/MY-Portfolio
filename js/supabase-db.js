/**
 * =================================================================
 * SUPABASE LIVE DB INTEGRATION
 * Fetches dynamic data from Supabase to replace local static arrays.
 * =================================================================
 */

async function loadSupabaseData() {
  const config = window.PORTFOLIO_CONFIG;
  if (!config || !config.supabaseUrl || !config.supabaseKey || config.supabaseUrl.includes('your-project')) {
    return;
  }

  // Initialize Supabase client using CDN library
  const { createClient } = window.supabase || {};
  if (!createClient) {
    return;
  }

  const client = createClient(config.supabaseUrl, config.supabaseKey);

  // Helper with 1.5s timeout to prevent hanging on slow network requests
  const fetchWithTimeout = (promise, ms = 1500) => {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Supabase request timeout')), ms)
    );
    return Promise.race([promise, timeout]);
  };

  try {
    // Parallelize all 3 network calls simultaneously with 1.5s timeout limit
    const [metricsRes, projectsRes, aboutRes] = await fetchWithTimeout(
      Promise.all([
        client.from('metrics').select('*').order('created_at', { ascending: true }),
        client.from('projects').select('*').order('created_at', { ascending: false }),
        client.from('about').select('*').eq('id', 1).maybeSingle()
      ])
    );

    // 1. Process metrics
    if (metricsRes && metricsRes.data && metricsRes.data.length > 0) {
      window.METRICS_DATA = metricsRes.data.map(m => ({
        label: m.label,
        value: m.value
      }));
    }

    // 2. Process projects
    if (projectsRes && projectsRes.data && projectsRes.data.length > 0) {
      window.PROJECTS_DATA = projectsRes.data.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description,
        tags: p.tags || [],
        wireframeLabel: p.wireframe_label,
        featured: p.featured,
        comingSoon: p.coming_soon,
        inProgress: p.in_progress,
        badgeText: p.badge_text,
        status: p.status,
        image: p.image,
        hoverImage: p.hover_image,
        link: p.link
      }));
    }

    // 3. Process about section
    if (aboutRes && aboutRes.data) {
      const about = aboutRes.data;
      window.PORTFOLIO_CONFIG.title = `Hi, I'm ${about.title}`;
      window.PORTFOLIO_CONFIG.subtitle = about.subtitle;
      
      const titleEl = document.querySelector('h1');
      if (titleEl && titleEl.textContent.includes("Hi, I'm")) {
        titleEl.textContent = `Hi, I'm ${about.title}`;
      }
      
      const subtitleEl = document.querySelector('p');
      if (subtitleEl && subtitleEl.className.includes('text-textSecondary')) {
        subtitleEl.textContent = about.subtitle;
      }
      
      const bioEl = document.getElementById('about-bio-description');
      if (bioEl) {
        bioEl.textContent = about.bio;
      }
    }
  } catch (err) {
    console.warn("Supabase fetch notice (using static fallback):", err.message || err);
  }
}

window.loadSupabaseData = loadSupabaseData;

