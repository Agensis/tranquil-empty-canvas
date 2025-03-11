
import React, { useEffect, useRef } from 'react';

interface CalendlyEmbedProps {
  url: string;
  height?: number;
  className?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ 
  url, 
  height = 700,
  className = '' 
}) => {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Calendly is loaded
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: calendlyContainerRef.current!,
        prefill: {},
        utm: {}
      });
    } else {
      // If not loaded, create a fallback
      const container = calendlyContainerRef.current;
      if (container) {
        container.innerHTML = `
          <div class="calendly-inline-widget" data-url="${url}" style="min-width:320px;height:${height}px;"></div>
        `;
      }
    }
  }, [url, height]);

  return (
    <div 
      ref={calendlyContainerRef} 
      className={`calendly-container ${className}`}
      style={{ minHeight: `${height}px`, width: '100%' }}
    />
  );
};

export default CalendlyEmbed;
