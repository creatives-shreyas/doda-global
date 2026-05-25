import './Logo.css';

export default function Logo({ height = 40, variant = 'light', className = '' }) {
  // variant can be:
  // - 'original' (exact green/gold colors from the image)
  // - 'light' (inverted cream/white for dark backgrounds)
  
  return (
    <div 
      className={`doda-logo doda-logo--${variant} ${className}`} 
      style={{ height: `${height}px` }}
    >
      <img 
        src="/images/logo_transparent.png" 
        alt="DODA Global Logo" 
        className="doda-logo-img"
        style={{ height: '100%', width: 'auto', display: 'block' }}
      />
    </div>
  );
}
