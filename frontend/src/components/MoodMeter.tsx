import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { addEntry } from '../store/journalSlice';
import { setIntensity } from '../store/emotionSlice';

const markerLabels = [
  { value: 10, label: 'Low energy' },
  { value: 40, label: 'Reflective' },
  { value: 70, label: 'Activated' },
  { value: 90, label: 'Surging' },
];

export default function MoodMeter() {
  const dispatch = useAppDispatch();
  const { subFeeling, intensity } = useAppSelector((s) => s.emotion);
  const [notes, setNotes] = useState('');

  return (
    <div className="card-grid" aria-label="Mood meter">
      <div className="panel" aria-label="Intensity slider">
        <h2>Mood Meter</h2>
        <p>Use keyboard arrows to adjust the slider. Values announce to screen readers.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={intensity}
              aria-label="Mood intensity"
              className="focus-ring"
              type="range"
              min={0}
              max={100}
              orient="vertical"
              style={{ writingMode: 'bt-lr', height: 240 }}
              value={intensity}
              onChange={(e) => dispatch(setIntensity(Number(e.target.value)))}
            />
            <span style={{ marginTop: 8 }}>Intensity: {intensity}</span>
          </div>
          <div>
            {markerLabels.map((mark) => (
              <div key={mark.value} style={{ marginBottom: 10 }}>
                <span aria-hidden>•</span> {mark.label} ({mark.value})
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="panel" aria-label="Mood notes">
        <h3>Journal this moment</h3>
        <textarea
          className="focus-ring"
          aria-label="Mood journal note"
          rows={8}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', padding: 12 }}
        />
        <button
          className="primary focus-ring"
          onClick={() => {
            if (!notes.trim()) return;
            dispatch(addEntry({ title: `${subFeeling} at ${intensity}%`, body: notes }));
            setNotes('');
          }}
          style={{ marginTop: 12 }}
        >
          Save to journal
        </button>
      </div>
    </div>
  );
}
