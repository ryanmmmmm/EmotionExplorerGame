import { useRef, useState } from 'react';

const assets = ['🌿', '🌙', '🪽', '💌', '⭐️', '🌊'];

type Sticker = {
  id: string;
  label: string;
  x: number;
  y: number;
  rotation: number;
};

export default function MoodCollageStudio() {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const addSticker = (label: string) => {
    setStickers((prev) => [
      ...prev,
      { id: `${label}-${Date.now()}`, label, x: 160 + Math.random() * 120, y: 120 + Math.random() * 120, rotation: 0 },
    ]);
  };

  return (
    <div className="panel" aria-label="Mood collage studio">
      <h2>Mood Collage Studio</h2>
      <p>Drag and rotate stickers. Long-press or right/left arrows to adjust rotation.</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
        {assets.map((asset) => (
          <button key={asset} className="ghost focus-ring" onClick={() => addSticker(asset)}>
            Add {asset}
          </button>
        ))}
        <button className="primary focus-ring" aria-label="Save collage">Save / Share</button>
      </div>
      <div
        ref={boardRef}
        style={{ position: 'relative', height: 360, background: 'rgba(255,255,255,0.05)', borderRadius: 16, overflow: 'hidden' }}
        aria-label="Collage board"
      >
        {stickers.map((sticker) => (
          <div
            key={sticker.id}
            role="button"
            tabIndex={0}
            aria-label={`${sticker.label} sticker`}
            className="focus-ring"
            style={{
              position: 'absolute',
              left: sticker.x,
              top: sticker.y,
              transform: `translate(-50%, -50%) rotate(${sticker.rotation}deg)`,
              fontSize: 42,
              cursor: 'grab',
              userSelect: 'none',
              touchAction: 'none',
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                setStickers((prev) =>
                  prev.map((s) => (s.id === sticker.id ? { ...s, rotation: s.rotation + (e.key === 'ArrowRight' ? 10 : -10) } : s)),
                );
              }
            }}
            onPointerDown={(e) => {
              const rect = boardRef.current?.getBoundingClientRect();
              setActive(sticker.id);
              const startX = e.clientX;
              const startY = e.clientY;
              const startRot = sticker.rotation;
              const move = (ev: PointerEvent) => {
                if (!rect) return;
                if (ev.shiftKey) {
                  const delta = ev.clientX - startX;
                  setStickers((prev) => prev.map((s) => (s.id === sticker.id ? { ...s, rotation: startRot + delta / 2 } : s)));
                } else {
                  setStickers((prev) =>
                    prev.map((s) =>
                      s.id === sticker.id
                        ? { ...s, x: ev.clientX - rect.left, y: ev.clientY - rect.top }
                        : s,
                    ),
                  );
                }
              };
              const up = () => {
                setActive(null);
                window.removeEventListener('pointermove', move);
                window.removeEventListener('pointerup', up);
              };
              window.addEventListener('pointermove', move);
              window.addEventListener('pointerup', up, { once: true });
            }}
            aria-pressed={active === sticker.id}
          >
            {sticker.label}
          </div>
        ))}
      </div>
    </div>
  );
}
