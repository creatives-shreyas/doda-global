import { useEffect } from 'react';
import './IndiaMap.css';

export default function IndiaMap({ activeCity, setActiveCity }) {
  // Cities mapped with coordinates matching a 500x600 SVG viewBox
  const cities = [
    { name: 'Nagpur', x: 250, y: 320, state: 'Maharashtra', type: 'Headquarters' },
    { name: 'Mumbai', x: 170, y: 385, state: 'Maharashtra', type: 'Distribution Hub' },
    { name: 'Delhi NCR', x: 210, y: 175, state: 'Delhi', type: 'Distribution Hub' },
    { name: 'Bengaluru', x: 215, y: 475, state: 'Karnataka', type: 'Sourcing & Distribution' },
    { name: 'Chennai', x: 255, y: 485, state: 'Tamil Nadu', type: 'Sourcing Hub' },
    { name: 'Kochi', x: 215, y: 535, state: 'Kerala', type: 'Coconut & Spice Sourcing' },
    { name: 'Kolkata', x: 380, y: 280, state: 'West Bengal', type: 'Distribution Hub' },
    { name: 'Hyderabad', x: 245, y: 400, state: 'Telangana', type: 'Distribution Hub' },
    { name: 'Ahmedabad', x: 140, y: 280, state: 'Gujarat', type: 'Distribution Hub' },
    { name: 'Guwahati', x: 455, y: 210, state: 'Assam', type: 'Tea Sourcing Hub' },
  ];

  const hq = { x: 250, y: 320 }; // Nagpur HQ

  return (
    <div className="india-map-wrapper">
      <svg
        viewBox="0 0 500 600"
        className="india-map-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized Simplified Outline of India */}
        <path
          className="india-outline"
          d="M 230 40 
             L 245 25 L 260 25 L 265 40 L 260 55 L 270 70 L 280 85 L 275 110 L 290 120 L 310 135 L 320 150 
             L 345 155 L 360 165 L 380 175 L 390 170 L 400 165 L 415 168 L 435 180 L 460 185 L 475 200
             L 485 210 L 475 225 L 450 228 L 430 220 L 415 225 L 410 240 L 385 245 L 375 260 L 370 280 
             L 355 300 C 345 330 315 410 295 470 L 285 500 L 275 530 L 265 545 L 255 565 L 250 570 
             L 245 565 L 240 550 L 225 510 C 210 460 190 390 175 360 L 165 350 L 145 340 L 125 330 
             C 105 320 95 300 105 280 C 115 265 125 260 145 265 L 165 240 L 175 190 C 185 160 200 140 
             215 110 Z"
          fill="var(--bg-surface-2)"
          stroke="rgba(200, 155, 60, 0.25)"
          strokeWidth="2"
        />

        {/* Sourcing supply network connection curves from Nagpur HQ */}
        {cities.map((city) => {
          if (city.name === 'Nagpur') return null; // No line to itself

          // Calculate control point for curved path
          const mx = (hq.x + city.x) / 2;
          const my = (hq.y + city.y) / 2 - (city.x > hq.x ? 25 : -25);
          const pathD = `M ${hq.x} ${hq.y} Q ${mx} ${my} ${city.x} ${city.y}`;
          const isHighlighted = activeCity === city.name;

          return (
            <g key={`connection-${city.name}`}>
              {/* Static path */}
              <path
                d={pathD}
                fill="none"
                stroke={isHighlighted ? 'var(--color-primary)' : 'rgba(200,155,60,0.1)'}
                strokeWidth={isHighlighted ? '2' : '1'}
                strokeOpacity={isHighlighted ? '0.8' : '0.4'}
                className="india-map-connection-line"
                transition="stroke 0.3s ease, stroke-width 0.3s ease"
              />

              {/* Moving dots on connections */}
              <path
                d={pathD}
                fill="none"
                stroke="var(--color-secondary)"
                strokeWidth="1.5"
                strokeDasharray="5 15"
                className="india-map-connection-line-animated"
                style={{
                  opacity: isHighlighted || !activeCity ? 0.6 : 0.15,
                }}
              />
            </g>
          );
        })}

        {/* City Marker Nodes */}
        {cities.map((city) => {
          const isHQ = city.type === 'Headquarters';
          const isHighlighted = activeCity === city.name;

          return (
            <g
              key={city.name}
              transform={`translate(${city.x}, ${city.y})`}
              className={`india-map-marker ${isHighlighted ? 'india-map-marker--active' : ''}`}
              onMouseEnter={() => setActiveCity(city.name)}
              onMouseLeave={() => setActiveCity(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Pulse rings */}
              {isHQ ? (
                <>
                  <circle r="12" fill="var(--color-primary)" className="marker-hq-pulse" opacity="0.35" />
                  <circle r="6" fill="var(--color-primary)" />
                  <circle r="2.5" fill="#fff" />
                </>
              ) : (
                <>
                  <circle 
                    r={isHighlighted ? '10' : '6'} 
                    fill={isHighlighted ? 'var(--color-primary)' : 'rgba(200, 155, 60, 0.4)'} 
                    className="marker-pulse" 
                    opacity={isHighlighted ? '0.5' : '0.2'} 
                    style={{ transition: 'r 0.3s ease, fill 0.3s ease' }}
                  />
                  <circle 
                    r="4.5" 
                    fill={isHQ ? 'var(--color-primary)' : city.type.includes('Sourcing') ? 'var(--color-secondary)' : '#C89B3C'} 
                  />
                </>
              )}

              {/* Text Labels */}
              <text
                y={city.y > 450 ? 18 : -10}
                x={city.name === 'Guwahati' ? 10 : city.name === 'Ahmedabad' ? -10 : 0}
                textAnchor={city.name === 'Guwahati' ? 'start' : city.name === 'Ahmedabad' ? 'end' : 'middle'}
                className={`india-map-marker-label ${isHighlighted ? 'india-map-marker-label--active' : ''}`}
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip Card overlay on bottom left */}
      <div className="india-map-tooltip-overlay">
        {activeCity ? (
          (() => {
            const cityInfo = cities.find(c => c.name === activeCity);
            if (!cityInfo) return null;
            return (
              <div className="india-map-tooltip-card">
                <span className="tooltip-badge">{cityInfo.type}</span>
                <h4 className="tooltip-name">{cityInfo.name}</h4>
                <p className="tooltip-state">{cityInfo.state}</p>
              </div>
            );
          })()
        ) : (
          <div className="india-map-tooltip-card tooltip-placeholder">
            Hover map pins for location details
          </div>
        )}
      </div>
    </div>
  );
}
