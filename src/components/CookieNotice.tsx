'use client';

import { useState, useEffect } from 'react';

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-8 md:max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-card border border-border rounded-2xl shadow-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-lg text-primary text-xl">
            🍪
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-foreground mb-1">Cookie Consent</h3>
            <p className="text-sm text-muted mb-4 leading-relaxed">
              We use cookies to improve your experience and analyze traffic. By clicking &quot;Accept&quot;, you agree to our use of cookies and AdSense policies.
            </p>
            <div className="flex gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Accept
              </button>
              <a
                href="/privacy-policy"
                className="flex-1 px-4 py-2 rounded-xl border border-border bg-background text-foreground text-sm font-semibold text-center hover:bg-card transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
