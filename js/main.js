/**
 * =================================================================
 * MAIN BOOTSTRAP INITIALIZER
 * Initializes rendering engine and application modules on load.
 * =================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render static content IMMEDIATELY for instant page load (0ms delay)
  if (typeof window.initRender === 'function') {
    window.initRender();
  }

  // 2. Set initial active tab state (supports URL hash e.g. #projects)
  const hashTab = window.location.hash ? window.location.hash.replace('#', '').toLowerCase() : '';
  const validTabs = ['home', 'projects', 'videos', 'businesses', 'about'];
  const initialTab = validTabs.includes(hashTab) ? hashTab : 'home';
  if (typeof window.switchTab === 'function') {
    window.switchTab(initialTab);
  }

  // 3. Sync live data from Supabase asynchronously in background (non-blocking)
  if (typeof window.loadSupabaseData === 'function') {
    window.loadSupabaseData().then(() => {
      if (typeof window.initRender === 'function') {
        window.initRender();
      }
    }).catch(err => {
      console.warn("Background Supabase sync skipped:", err);
    });
  }
});

