import { useMemo, useState } from 'react';
import { addEntry } from '../store/journalSlice';
import { useAppDispatch, useAppSelector } from '../store';

export default function FeelingsJournal() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [visible, setVisible] = useState(10);
  const dispatch = useAppDispatch();
  const entries = useAppSelector((state) => state.journal.entries);

  const orderedEntries = useMemo(
    () => [...entries].sort((a, b) => b.timestamp - a.timestamp).slice(0, visible),
    [entries, visible],
  );

  return (
    <div className="card-grid" aria-label="Feelings journal">
      <div className="panel">
        <h2>Feelings Journal</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          <input
            className="focus-ring"
            aria-label="Entry title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)' }}
          />
          <textarea
            className="focus-ring"
            aria-label="Entry body"
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', padding: 12 }}
          />
          <button
            className="primary focus-ring"
            onClick={() => {
              if (!title.trim() || !body.trim()) return;
              dispatch(addEntry({ title, body }));
              setTitle('');
              setBody('');
            }}
          >
            Add entry
          </button>
        </div>
      </div>
      <div className="panel" aria-live="polite">
        <h3>Entries</h3>
        <div className="scroll-area">
          {orderedEntries.map((entry) => (
            <article key={entry.id} aria-label={entry.title} style={{ marginBottom: 12, padding: 12, borderRadius: 12, background: 'rgba(255,255,255,0.04)' }}>
              <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong>{entry.title}</strong>
                <span style={{ color: 'var(--muted)', fontSize: 12 }}>{new Date(entry.timestamp).toLocaleString()}</span>
              </header>
              <p style={{ marginTop: 6, whiteSpace: 'pre-wrap' }}>{entry.body}</p>
            </article>
          ))}
          {entries.length > visible && (
            <button className="ghost focus-ring" onClick={() => setVisible((v) => v + 10)}>
              Load more memories
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
