import { useAppDispatch, useAppSelector } from '../store';
import { updateBodyNote } from '../store/emotionSlice';

const bodyParts = ['Head', 'Chest', 'Hands', 'Stomach', 'Legs', 'Feet'];

export default function BodyAwarenessDiagram() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.emotion.bodyNotes);

  return (
    <div className="card-grid" aria-label="Body awareness">
      <div className="panel">
        <h2>Body Awareness</h2>
        <svg viewBox="0 0 200 400" role="img" aria-label="Body outline" style={{ width: '100%', height: 320 }}>
          <g stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth={2}>
            <circle cx="100" cy="60" r="40" />
            <line x1="100" y1="100" x2="100" y2="240" />
            <line x1="100" y1="140" x2="60" y2="200" />
            <line x1="100" y1="140" x2="140" y2="200" />
            <line x1="100" y1="240" x2="70" y2="320" />
            <line x1="100" y1="240" x2="130" y2="320" />
          </g>
          {bodyParts.map((part, idx) => (
            <text key={part} x={20} y={40 + idx * 50} fill="var(--muted)" aria-hidden>
              {part}
            </text>
          ))}
        </svg>
      </div>
      <div className="panel" aria-label="Body notes">
        <h3>What sensations are present?</h3>
        <div className="scroll-area">
          {bodyParts.map((part) => (
            <label key={part} style={{ display: 'block', marginBottom: 12 }}>
              <span style={{ display: 'block', marginBottom: 4 }}>{part}</span>
              <input
                className="focus-ring"
                type="text"
                value={notes[part] || ''}
                onChange={(e) => dispatch(updateBodyNote({ part, note: e.target.value }))}
                placeholder="Warmth, tightness, tingling"
                style={{ width: '100%', padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)' }}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
