'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  slot?: 'top' | 'bottom' | 'sidebar' | 'in-content';
  className?: string;
  adSlotId?: string;
}

export function AdBanner({ slot = 'top', className = '', adSlotId }: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // Silence errors if adblock is active
    }
  }, []);

  const sizes: Record<string, string> = {
    top: 'min-h-[90px] w-full',
    bottom: 'min-h-[90px] w-full',
    sidebar: 'min-h-[250px] w-full',
    'in-content': 'min-h-[250px] w-full',
  };

  return (
    <div
      className={`w-full flex items-center justify-center overflow-hidden my-4 ${sizes[slot]} ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6652677798942334"
        data-ad-slot={adSlotId || '0000000000'} // Replace with real slot IDs later
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
