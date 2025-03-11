
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
    // Clear any existing content first to prevent duplicates
    if (calendlyContainerRef.current) {
      calendlyContainerRef.current.innerHTML = '';
    }

    // Create script element for Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Create the Calendly inline widget
    if (calendlyContainerRef.current) {
      const div = document.createElement('div');
      div.className = 'calendly-inline-widget';
      div.style.minWidth = '320px';
      div.style.height = `${height}px`;
      div.setAttribute('data-url', url);
      calendlyContainerRef.current.appendChild(div);
    }

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, [url, height]);

  return (
    <div 
      ref={calendlyContainerRef} 
      className={`calendly-container ${className}`}
      style={{ 
        minHeight: `${height}px`, 
        width: '100%',
        margin: '0 auto',
        maxWidth: '1000px'
      }}
    />
  );
};

export default CalendlyEmbed;
