/**
 * =================================================================
 * NAVIGATION CONTROLLER
 * Handles tab navigation, active states, and mobile menu interactions.
 * =================================================================
 */

function switchTab(tabId) {
  // 1. Hide all tab content panels
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.remove('active');
  });

  // 2. Activate target tab content panel
  const activeTab = document.getElementById('tab-' + tabId);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // 3. Update desktop navigation active links
  const navLinks = document.querySelectorAll('nav button');
  navLinks.forEach(link => {
    link.classList.remove('active-nav-link');
  });
  const activeNavLink = document.getElementById('nav-' + tabId);
  if (activeNavLink) {
    activeNavLink.classList.add('active-nav-link');
  }

  // 4. Update mobile navigation active links
  const mobLinks = document.querySelectorAll('.flex.md\\:hidden button');
  mobLinks.forEach(link => {
    link.classList.remove('text-textPrimary', 'font-semibold');
  });
  const activeMobLink = document.getElementById('mob-' + tabId);
  if (activeMobLink) {
    activeMobLink.classList.add('text-textPrimary', 'font-semibold');
  }

  // 5. Smooth scroll top on mobile viewports
  if (window.innerWidth < 768) {
    window.scrollTo({ top: 120, behavior: 'smooth' });
  }
}

// Make switchTab available globally for onclick handlers
window.switchTab = switchTab;
