import { useState } from 'react';

export default function NextStepsBridge() {
  const [step, setStep] = useState('Schedule a rest day.');
  const [obstacle, setObstacle] = useState('Busy calendar');
  const [support, setSupport] = useState('Ask a friend to keep me accountable');

  return (
    <div className="panel" aria-label="Next steps bridge">
      <h2>Next Steps Bridge</h2>
      <p>Fill in the boards of the bridge: step, obstacle, support. Watch the bridge glow.</p>
      <div style={{ position: 'relative', height: 220, marginBottom: 12 }} aria-hidden>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${20 + i * 25}%`,
              bottom: 30,
              width: '18%',
              height: 10,
              borderRadius: 6,
              background: 'linear-gradient(90deg, #7cd4f7, #f6b0f4)',
              animation: `bridgePulse 3s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            left: '10%',
            bottom: 10,
            width: '80%',
            height: 6,
            background: 'rgba(255,255,255,0.2)',
            borderRadius: 4,
          }}
        />
      </div>
      <div className="card-grid">
        <label className="panel" style={{ display: 'block' }}>
          <span style={{ display: 'block', marginBottom: 4 }}>Step</span>
          <input className="focus-ring" value={step} onChange={(e) => setStep(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)' }} />
        </label>
        <label className="panel" style={{ display: 'block' }}>
          <span style={{ display: 'block', marginBottom: 4 }}>Obstacle</span>
          <input className="focus-ring" value={obstacle} onChange={(e) => setObstacle(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)' }} />
        </label>
        <label className="panel" style={{ display: 'block' }}>
          <span style={{ display: 'block', marginBottom: 4 }}>Support</span>
          <input className="focus-ring" value={support} onChange={(e) => setSupport(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)' }} />
        </label>
      </div>
      <style>
        {`@keyframes bridgePulse { from { opacity: 0.6; transform: translateY(0); } to { opacity: 1; transform: translateY(-6px); } }`}
      </style>
    </div>
  );
}
