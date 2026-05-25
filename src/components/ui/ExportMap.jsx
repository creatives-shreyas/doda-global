import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ExportMap.css';

export default function ExportMap() {
  const containerRef = useRef(null);

  // Connection data from India (Nagpur) to global destinations
  // Nagpur coordinate is roughly at x=610, y=215 on a 900x450 canvas
  const connections = [
    { name: 'North America (USA)', from: [610, 215], to: [200, 130], curve: -80, labelDir: 'left' },
    { name: 'Europe (UK/Rotterdam)', from: [610, 215], to: [450, 110], curve: -40, labelDir: 'top' },
    { name: 'Middle East (Dubai)', from: [610, 215], to: [530, 195], curve: -20, labelDir: 'top' },
    { name: 'Southeast Asia (Singapore)', from: [610, 215], to: [690, 275], curve: 20, labelDir: 'bottom' },
    { name: 'Australia (Sydney)', from: [610, 215], to: [800, 360], curve: 50, labelDir: 'right' },
  ];

  return (
    <div className="export-map-container" ref={containerRef}>
      <svg
        viewBox="0 0 900 450"
        className="export-map-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized World Map Continents */}
        <g className="map-continents" fill="var(--bg-surface-2)" stroke="rgba(200, 155, 60, 0.15)" strokeWidth="1.5">
          {/* North America */}
          <path d="M 50,110 C 60,110 80,90 90,80 C 110,60 140,50 160,70 C 180,80 200,80 220,90 C 230,100 240,90 260,100 C 280,110 290,130 280,150 C 270,170 240,190 220,200 C 200,210 180,210 170,225 C 160,240 150,260 140,270 C 135,260 130,240 120,230 C 110,220 90,210 80,190 C 70,175 60,160 50,140 Z" />
          
          {/* South America */}
          <path d="M 220,230 C 235,235 250,250 265,270 C 280,290 290,320 280,350 C 270,380 250,410 230,430 C 225,435 220,430 220,420 C 220,400 210,380 205,360 C 200,340 190,310 190,290 C 190,270 200,250 210,240 Z" />
          
          {/* Europe */}
          <path d="M 400,90 C 410,80 430,70 450,70 C 470,70 480,80 495,95 C 500,105 510,110 515,120 C 520,130 500,140 490,140 C 480,140 470,135 460,145 C 450,155 430,150 420,140 C 410,130 395,110 400,90 Z" />
          
          {/* Africa */}
          <path d="M 420,170 C 440,165 470,160 490,175 C 510,190 530,210 535,235 C 540,260 530,285 520,310 C 510,335 490,360 480,380 C 475,390 470,390 465,375 C 460,350 445,330 435,310 C 425,290 415,270 410,250 C 405,230 405,200 410,185 Z" />
          
          {/* Asia */}
          <path d="M 500,120 C 520,110 550,100 580,95 C 610,90 650,80 690,85 C 730,90 770,80 810,90 C 830,95 850,110 860,130 C 870,150 865,180 855,200 C 845,220 830,230 820,250 C 810,270 815,290 805,310 C 795,330 775,320 765,300 C 755,280 740,260 725,250 C 710,240 680,240 660,230 C 640,220 625,240 610,245 C 595,250 580,240 570,230 C 560,220 540,210 535,190 C 530,170 515,150 500,120 Z" />
          
          {/* India Peninsula Detail */}
          <path d="M 590,210 L 610,215 L 620,240 L 610,250 L 600,230 Z" fill="rgba(200, 155, 60, 0.4)" stroke="var(--color-primary)" strokeWidth="1.5" />
          
          {/* Australia */}
          <path d="M 740,310 C 760,305 780,310 800,320 C 820,330 830,350 820,370 C 810,390 780,410 760,400 C 740,390 725,370 725,350 C 725,330 730,315 740,310 Z" />
        </g>

        {/* Connection Curves and Animated Dots */}
        {connections.map((conn, idx) => {
          const [x1, y1] = conn.from;
          const [x2, y2] = conn.to;
          
          // Calculate quadratic curve control point
          // We warp it slightly using the 'curve' offset
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2 - conn.curve;
          const pathD = `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;

          return (
            <g key={conn.name} className="map-connection">
              {/* Curve line */}
              <path
                d={pathD}
                fill="none"
                className="connection-line"
                stroke="url(#goldGradient)"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />

              {/* Running Dash Animation representing active shipment */}
              <path
                d={pathD}
                fill="none"
                className="connection-line-animated"
                stroke="var(--color-secondary)"
                strokeWidth="2"
                strokeDasharray="8 20"
                style={{
                  animationDelay: `${idx * 0.8}s`,
                }}
              />

              {/* Target Location Pulse */}
              <g transform={`translate(${x2}, ${y2})`}>
                <circle r="6" fill="var(--color-secondary)" opacity="0.3" className="pulse-glow" />
                <circle r="3" fill="var(--color-primary)" />
              </g>

              {/* Text label for target */}
              <text
                x={conn.labelDir === 'left' ? x2 - 10 : conn.labelDir === 'right' ? x2 + 10 : x2}
                y={conn.labelDir === 'top' ? y2 - 12 : conn.labelDir === 'bottom' ? y2 + 15 : y2 + 4}
                textAnchor={conn.labelDir === 'left' ? 'end' : conn.labelDir === 'right' ? 'start' : 'middle'}
                className="map-label"
              >
                {conn.name.split(' ')[0]}
              </text>
            </g>
          );
        })}

        {/* India Origin Hub (Nagpur) */}
        <g transform="translate(610, 215)">
          <circle r="12" fill="var(--color-primary)" opacity="0.4" className="hub-pulse" />
          <circle r="5" fill="var(--color-primary)" />
          <circle r="2" fill="#fff" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-secondary)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
