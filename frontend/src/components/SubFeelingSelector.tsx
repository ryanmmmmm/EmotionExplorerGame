import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { setSubFeeling } from '../store/emotionSlice';

const feelings = {
  Joy: ['Cheerful', 'Playful', 'Proud', 'Creative'],
  Calm: ['Peaceful', 'Content', 'Secure', 'Accepted'],
  Anger: ['Irritated', 'Frustrated', 'Resentful', 'Bold'],
  Fear: ['Anxious', 'Overwhelmed', 'Nervous', 'Alert'],
  Sadness: ['Lonely', 'Disappointed', 'Tender', 'Sensitive'],
};

export default function SubFeelingSelector() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { subFeeling } = useAppSelector((state) => state.emotion);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const options = Object.entries(feelings).flatMap(([group, subs]) =>
    subs
      .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
      .map((label) => ({ group, label })),
  );

  return (
    <div>
      <button className="primary focus-ring" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
        Choose a sub-feeling (current: {subFeeling})
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sub-feeling selector"
          className="panel"
          ref={dialogRef}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'grid', placeItems: 'center' }}
        >
          <div className="panel" style={{ maxWidth: 640, width: '90vw', maxHeight: '80vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Sub-feelings</h3>
              <button className="ghost focus-ring" onClick={() => setOpen(false)} aria-label="Close selector">
                Close
              </button>
            </div>
            <input
              aria-label="Filter feelings"
              className="focus-ring"
              placeholder="Search by name"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ width: '100%', marginBottom: 12, padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.16)' }}
            />
            <div className="scroll-area" tabIndex={0} aria-live="polite">
              {options.map((option) => (
                <button
                  key={option.label}
                  className="ghost focus-ring"
                  style={{ width: '100%', justifyContent: 'flex-start', marginBottom: 8 }}
                  onClick={() => {
                    dispatch(setSubFeeling(option.label));
                    setOpen(false);
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{option.label}</span>
                  <span style={{ color: 'var(--muted)', marginLeft: 8 }}>({option.group})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
