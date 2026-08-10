/**
 * Vercel Web Analytics Initialization Module
 * This is the source file that will be bundled with @vercel/analytics
 */

import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto', // Automatically detect environment (development/production)
  debug: true // Enable debug logging in development
});
