/**
 * =================================================================
 * SUPABASE LIVE DB INTEGRATION
 * Fetches dynamic data from Supabase to replace local static arrays.
 * =================================================================
 */

async function loadSupabaseData() {
  const config = window.PORTFOLIO_CONFIG;
  if (!config || !config.supabaseUrl || !config.supabaseKey || config.supabaseUrl.includes('your-project')) {
    console.log("Supabase credentials not configured in js/config.js. Falling back to static data.");
    return;
  }

  // Initialize Supabase client using CDN library
  const { createClient } = window.supabase || {};
  if (!createClient) {
    console.error("Supabase CDN library not loaded.");
    return;
  }

  const client = createClient(config.supabaseUrl, config.supabaseKey);

  try {
    // 1. Fetch metrics
    const { data: metrics, error: metricsErr } = await client
      .from('metrics')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (metrics && metrics.length > 0) {
      window.METRICS_DATA = metrics.map(m => ({
        label: m.label,
        value: m.value
      }));
    }

    // 2. Fetch projects
    const { data: projects, error: projectsErr } = await client
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (projects && projects.length > 0) {
      window.PROJECTS_DATA = projects.map(p => ({
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

    // 3. Fetch about section
    const { data: about, error: aboutErr } = await client
      .from('about')
      .select('*')
      .eq('id', 1)
      .single();

    if (about) {
      window.PORTFOLIO_CONFIG.title = `Hi, I'm ${about.title}`;
      window.PORTFOLIO_CONFIG.subtitle = about.subtitle;
      
      // Dynamically update headings in the DOM
      const titleEl = document.querySelector('h1');
      if (titleEl && titleEl.textContent.includes("Hi, I'm")) {
        titleEl.textContent = `Hi, I'm ${about.title}`;
      }
      
      const subtitleEl = document.querySelector('p');
      if (subtitleEl && subtitleEl.className.includes('text-textSecondary')) {
        subtitleEl.textContent = about.subtitle;
      }
      
      // Update bio descriptions on the about tab
      const bioEl = document.getElementById('about-bio-description');
      if (bioEl) {
        bioEl.textContent = about.bio;
      }
    }
  } catch (err) {
    console.error("Error loading live Supabase data:", err);
  }
}

window.loadSupabaseData = loadSupabaseData;
