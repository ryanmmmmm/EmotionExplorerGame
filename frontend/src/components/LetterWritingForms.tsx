import { useState } from 'react';

export default function LetterWritingForms() {
  const [letter, setLetter] = useState('');
  const [reverseLetter, setReverseLetter] = useState('');

  return (
    <div className="card-grid" aria-label="Letter writing">
      <div className="panel">
        <h2>Letter Writing</h2>
        <p>Write to someone (or yourself) and name the emotion, request, or gratitude present.</p>
        <textarea
          aria-label="Letter content"
          className="focus-ring"
          rows={10}
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', padding: 12 }}
        />
        <button className="primary focus-ring" style={{ marginTop: 12 }} onClick={() => setLetter('')}>
          Clear letter
        </button>
      </div>
      <div className="panel">
        <h3>Reverse Letter</h3>
        <p>Swap perspectives and write from the other side to broaden empathy.</p>
        <textarea
          aria-label="Reverse letter content"
          className="focus-ring"
          rows={10}
          value={reverseLetter}
          onChange={(e) => setReverseLetter(e.target.value)}
          style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', padding: 12 }}
        />
        <button className="ghost focus-ring" style={{ marginTop: 12 }} onClick={() => setReverseLetter('')}>
          Reset reverse letter
        </button>
      </div>
    </div>
  );
}
