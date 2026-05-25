import { useState } from 'react';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import TextReveal from '../components/motion/TextReveal';
import ScrollReveal from '../components/motion/ScrollReveal';
import IndiaMap from '../components/ui/IndiaMap';
import { domesticStats } from '../data/stats';
import { domesticCities, domesticCapabilities } from '../data/domesticData';

export default function DomesticSupply() {
  const [activeCity, setActiveCity] = useState(null);

  return (
    <>
      <SEOHead title="Domestic Supply" description="DODA GLOBAL's pan-India supply network covering 24+ states — sourcing to distribution." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">Pan-India Network</p>
          <TextReveal tag="h1" className="heading-1">Domestic Supply Network</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Connecting India's agricultural heartlands with buyers across 24+ states.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline="Our Strengths" title="Network Capabilities" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
            {domesticCapabilities.map((cap) => (
              <ScrollReveal key={cap.title} className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 'var(--space-md)' }}>{cap.icon}</span>
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-sm)' }}>{cap.title}</h4>
                <p className="body-sm color-secondary">{cap.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive India Map & Presence Locations */}
      <section className="section">
        <div className="container">
          <SectionHeading overline="Presence" title="Key Locations" description="Our sourcing and distribution network spans India's most important agro-trade centers." />
          
          <div className="domestic-presence-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'start', marginTop: 'var(--space-xl)' }}>
            {/* Left: India Vector Interactive Map */}
            <ScrollReveal>
              <IndiaMap activeCity={activeCity} setActiveCity={setActiveCity} />
            </ScrollReveal>

            {/* Right: City Cards List (Scrollable) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxHeight: '600px', overflowY: 'auto', paddingRight: '10px' }} className="domestic-cities-list">
              {domesticCities.map((city) => {
                const isHighlighted = activeCity === city.name;
                return (
                  <ScrollReveal 
                    key={city.name} 
                    className={`card ${isHighlighted ? 'card--highlighted' : ''}`}
                    style={{ 
                      padding: 'var(--space-md)', 
                      cursor: 'pointer',
                      borderColor: isHighlighted ? 'var(--color-primary)' : 'var(--color-border)',
                      boxShadow: isHighlighted ? 'var(--shadow-glow)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={() => setActiveCity(city.name)}
                    onMouseLeave={() => setActiveCity(null)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ fontWeight: 600, color: isHighlighted ? 'var(--color-primary)' : 'var(--color-text)' }}>{city.name}</h4>
                        <p className="body-sm color-secondary">{city.state}</p>
                      </div>
                      <span style={{ 
                        padding: '0.25rem 0.75rem', 
                        background: isHighlighted ? 'var(--color-primary)' : 'rgba(200,155,60,0.1)', 
                        color: isHighlighted ? 'var(--bg-surface)' : 'var(--color-primary)',
                        border: '1px solid var(--color-border)', 
                        borderRadius: 'var(--radius-full)', 
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                      }}>
                        {city.type}
                      </span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--dark">
        <div className="container">
          <div className="home-stats__grid">
            {domesticStats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
          </div>
        </div>
      </section>
    </>
  );
}
