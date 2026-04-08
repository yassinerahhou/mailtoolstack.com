interface AdBannerProps {
  slot?: 'top' | 'bottom' | 'sidebar' | 'in-content';
  className?: string;
}

export function AdBanner({ slot = 'top', className = '' }: AdBannerProps) {
  const sizes: Record<string, string> = {
    top: 'h-24 sm:h-28',
    bottom: 'h-24 sm:h-28',
    sidebar: 'h-60',
    'in-content': 'h-20 sm:h-24',
  };

  return (
    <div
      className={`w-full flex items-center justify-center rounded-xl border border-dashed border-border bg-card/50 text-xs text-muted ${sizes[slot]} ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      {/* AdSense code goes here */}
      <span className="opacity-40">Advertisement</span>
    </div>
  );
}
