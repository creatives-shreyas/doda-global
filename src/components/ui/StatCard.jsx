import AnimatedCounter from '../motion/AnimatedCounter';

export default function StatCard({ stat }) {
  return (
    <div className="stat-card" id={`stat-${stat.label.replace(/\s+/g, '-').toLowerCase()}`}>
      {stat.icon && <span className="stat-card__icon">{stat.icon}</span>}
      <div className="stat-card__value">
        {stat.prefix && <span>{stat.prefix}</span>}
        <AnimatedCounter target={stat.value} suffix={stat.suffix || ''} prefix={stat.prefix || ''} className="heading-2 color-primary" />
      </div>
      <p className="stat-card__label">{stat.label}</p>
    </div>
  );
}
