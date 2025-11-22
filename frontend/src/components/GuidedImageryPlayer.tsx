import { useMemo, useState } from 'react';

const playlist = [
  { id: 'forest', title: 'Forest Stream', duration: '06:20' },
  { id: 'shore', title: 'Moonlit Shore', duration: '08:10' },
  { id: 'cabin', title: 'Cabin Hearth', duration: '04:55' },
];

export default function GuidedImageryPlayer() {
  const [current, setCurrent] = useState<string>(playlist[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeTrack = useMemo(() => playlist.find((p) => p.id === current)!, [current]);

  return (
    <div className="panel" aria-label="Guided imagery and audio player">
      <h2>Guided Imagery</h2>
      <p>Keyboard friendly controls: Space toggles play/pause, arrow keys change tracks.</p>
      <div className="card-grid">
        <div className="panel">
          <strong>{activeTrack.title}</strong>
          <p style={{ color: 'var(--muted)' }}>Duration {activeTrack.duration}</p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              className="primary focus-ring"
              aria-pressed={isPlaying}
              onClick={() => setIsPlaying((v) => !v)}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              className="ghost focus-ring"
              onClick={() => {
                const nextIndex = (playlist.findIndex((p) => p.id === current) + 1) % playlist.length;
                setCurrent(playlist[nextIndex].id);
                setIsPlaying(true);
              }}
            >
              Next
            </button>
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={isPlaying ? 42 : 0}
              style={{ flex: 1, height: 10, background: 'rgba(255,255,255,0.08)', borderRadius: 999 }}
            >
              <div style={{ width: `${isPlaying ? 42 : 0}%`, height: '100%', background: 'linear-gradient(90deg, #7cd4f7, #f6b0f4)', borderRadius: 999 }} />
            </div>
          </div>
        </div>
        <div className="panel" aria-label="Playlist">
          <h3>Playlist</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {playlist.map((track) => (
              <li key={track.id} style={{ marginBottom: 8 }}>
                <button
                  className="ghost focus-ring"
                  style={{ width: '100%', justifyContent: 'space-between', display: 'flex' }}
                  aria-pressed={current === track.id}
                  onClick={() => {
                    setCurrent(track.id);
                    setIsPlaying(true);
                  }}
                >
                  <span>{track.title}</span>
                  <span style={{ color: 'var(--muted)' }}>{track.duration}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
