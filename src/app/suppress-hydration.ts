/**
 * Suppress hydration warnings caused by browser extensions
 * This is only for development and doesn't affect production builds
 */

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    // Check if it's a hydration error caused by browser extensions
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Hydration failed') ||
        args[0].includes('hydration') ||
        args[0].includes('Minified React error') ||
        args[0].includes('bis_skin_checked') ||
        args[0].includes('bis_register'))
    ) {
      // Suppress these specific errors
      return;
    }
    // Let other errors through
    originalError.call(console, ...args);
  };
}

export {};



