import { useState } from 'react';

const defaultLanes = [
  { id: 'rest', label: 'Rest Lane', color: '#7cd4f7' },
  { id: 'growth', label: 'Growth Lane', color: '#f6b0f4' },
  { id: 'connection', label: 'Connection Lane', color: '#8ef1b5' },
];

export default function TrajectoriesScene() {
  const [lanes, setLanes] = useState(
    defaultLanes.map((lane) => ({ ...lane, intention: '', velocity: 40 + Math.random() * 40 })),
  );

  return (
    <div className="panel" aria-label="Trajectories scene">
      <h2>Trajectories</h2>
      <p>Each lane holds a micro-goal. Adjust trajectories and watch gentle movement.</p>
      <div style={{ display: 'grid', gap: 12 }}>
        {lanes.map((lane, idx) => (
          <div
            key={lane.id}
            className="panel"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            aria-label={`${lane.label} lane`}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>{lane.label}</strong>
              <span className="kbd-hint">Velocity: {lane.velocity.toFixed(0)}%</span>
            </div>
            <div
              style={{
                height: 14,
                borderRadius: 999,
                overflow: 'hidden',
                margin: '8px 0',
                background: 'rgba(255,255,255,0.08)',
                position: 'relative',
              }}
              role="img"
              aria-label={`${lane.label} pulse animation`}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `translateX(${(idx + 1) * 10}%)`,
                  background: `linear-gradient(90deg, transparent, ${lane.color}, transparent)`
                    repeat
                    scroll,
                  animation: 'slide 6s linear infinite',
                }}
              />
            </div>
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', marginBottom: 4 }}>Intention</span>
              <input
                className="focus-ring"
                type="text"
                value={lane.intention}
                onChange={(e) =>
                  setLanes((prev) => prev.map((item) => (item.id === lane.id ? { ...item, intention: e.target.value } : item)))
                }
                style={{ width: '100%', padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)' }}
                placeholder="Describe what moves in this lane"
              />
            </label>
          </div>
        ))}
      </div>
      <style>
        {`@keyframes slide { from { transform: translateX(-60%); } to { transform: translateX(160%); } }`}
      </style>
    </div>
  );
}
