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

  // 2. Set initial active tab state ('home')
  if (typeof window.switchTab === 'function') {
    window.switchTab('home');
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

