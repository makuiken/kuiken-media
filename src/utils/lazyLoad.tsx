import { lazy, Suspense } from 'react';

export function lazyLoadComponent(importFunc: () => Promise<any>, fallback: JSX.Element | null = null) {
  const LazyComponent = lazy(importFunc);
  
  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
} 