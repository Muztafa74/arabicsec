"use client";

import { useEffect, useState } from 'react';

/**
 * ClientOnly component to prevent hydration mismatches
 * Ensures content only renders on client-side after hydration
 */
export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}



