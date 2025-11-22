import { useState } from 'react';

export default function IntentionsRipples() {
  const [intention, setIntention] = useState('Offer kindness to myself and one other person.');
  const [shareable, setShareable] = useState(false);

  return (
    <div className="card-grid" aria-label="Intentions and ripples">
      <div className="panel">
        <h2>Intentions & Ripples</h2>
        <p>Drop a pebble of intention and watch ripples expand. Share to the moderated gallery.</p>
        <div
          style={{ position: 'relative', height: 260, background: 'radial-gradient(circle, rgba(124,212,247,0.18), transparent 60%)', borderRadius: 16 }}
          role="img"
          aria-label="Ripple animation"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: `${120 + i * 60}px`,
                height: `${120 + i * 60}px`,
                borderRadius: '50%',
                border: '1px solid rgba(124,212,247,0.4)',
                transform: 'translate(-50%, -50%)',
                animation: `pulse 6s ease-in-out ${i * 0.8}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="panel">
        <h3>Daily intention</h3>
        <textarea
          className="focus-ring"
          aria-label="Daily intention"
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          rows={6}
          style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', padding: 12 }}
        />
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <input
            type="checkbox"
            className="focus-ring"
            checked={shareable}
            onChange={(e) => setShareable(e.target.checked)}
            aria-label="Allow sharing to gallery"
          />
          <span>Share to moderated gallery</span>
        </label>
        <button className="primary focus-ring" style={{ marginTop: 10 }} aria-disabled={!intention.trim()}>
          Send ripples
        </button>
      </div>
      <style>
        {`@keyframes pulse { from { opacity: 0.7; transform: translate(-50%, -50%) scale(0.9); } to { opacity: 0; transform: translate(-50%, -50%) scale(1.2); } }`}
      </style>
    </div>
  );
}
