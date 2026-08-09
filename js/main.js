/**
 * =================================================================
 * MAIN BOOTSTRAP INITIALIZER
 * Initializes rendering engine and application modules on load.
 * =================================================================
 */

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Fetch live data from Supabase if configured (asynchronous)
  if (typeof window.loadSupabaseData === 'function') {
    await window.loadSupabaseData();
  }

  // 2. Render all dynamic content from datasets
  if (typeof window.initRender === 'function') {
    window.initRender();
  }

  // 2. Ensure initial tab state is correctly selected ('home')
  if (typeof window.switchTab === 'function') {
    window.switchTab('home');
  }
});
