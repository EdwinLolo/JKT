import React, { useEffect, useRef } from 'react';

const FlourishEmbed = ({ src }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const renderFlourish = () => {
      try {
        if (window.Flourish && typeof window.Flourish.embed === 'function') {
          window.Flourish.embed();
          console.log(`✅ Flourish rendered: ${src}`);
        } else {
          console.warn('⚠️ Flourish not yet available');
        }
      } catch (err) {
        console.error('Error rendering Flourish:', err);
      }
    };

    // Coba embed langsung
    renderFlourish();

    // Fallback: Inject script hanya jika belum ada
    const existing = document.querySelector(
      'script[src="https://public.flourish.studio/resources/embed.js"]'
    );
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://public.flourish.studio/resources/embed.js';
      script.async = true;
      script.onload = renderFlourish;
      document.body.appendChild(script);
    }

    // Juga rerun setelah delay (jaga-jaga)
    const timeout = setTimeout(() => {
      renderFlourish();
    }, 500);

    return () => clearTimeout(timeout);
  }, [src]);

  return (
    <div
      ref={containerRef}
      className="flex justify-center w-full my-8 min-h-[400px]"
    >
      <div
        className="flourish-embed flourish-chart w-full max-w-3xl min-h-[400px]"
        data-src={src.trim()}
      >
        <noscript>
          <img
            src={`https://public.flourish.studio/${src.trim()}/thumbnail`}
            alt="Flourish chart"
            width="100%"
          />
        </noscript>
      </div>
    </div>
  );
};

export default FlourishEmbed;
