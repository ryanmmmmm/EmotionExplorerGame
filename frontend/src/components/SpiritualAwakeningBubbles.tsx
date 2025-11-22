import { useState } from 'react';

const prompts = ['Wonder', 'Trust', 'Surrender', 'Awe', 'Gratitude', 'Playfulness'];

type Bubble = { label: string; expanded: boolean };

export default function SpiritualAwakeningBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>(prompts.map((p) => ({ label: p, expanded: false })));

  return (
    <div className="panel" aria-label="Spiritual awakening bubbles">
      <h2>Spiritual Awakening</h2>
      <p>Tap bubbles to reveal reflections. Keyboard users can press Enter/Space.</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {bubbles.map((bubble) => (
          <button
            key={bubble.label}
            className="focus-ring"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              background: bubble.expanded ? 'rgba(246,176,244,0.2)' : 'rgba(255,255,255,0.06)',
              color: 'var(--text)',
              cursor: 'pointer',
            }}
            aria-pressed={bubble.expanded}
            onClick={() =>
              setBubbles((prev) => prev.map((b) => (b.label === bubble.label ? { ...b, expanded: !b.expanded } : b)))
            }
          >
            <div style={{ fontWeight: 700 }}>{bubble.label}</div>
            {bubble.expanded && <p style={{ fontSize: 12 }}>What small act invites {bubble.label.toLowerCase()} today?</p>}
          </button>
        ))}
      </div>
    </div>
  );
}
