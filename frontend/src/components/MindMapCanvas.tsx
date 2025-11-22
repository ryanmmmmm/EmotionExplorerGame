import { useMemo, useRef, useState } from 'react';

const initialNodes = [
  { id: 'core', label: 'Core feeling', x: 220, y: 180, color: '#7cd4f7' },
  { id: 'memory', label: 'Memory', x: 120, y: 120, color: '#f6b0f4' },
  { id: 'need', label: 'Need', x: 320, y: 80, color: '#8ef1b5' },
];

type Node = (typeof initialNodes)[number];

export default function MindMapCanvas() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [active, setActive] = useState<string | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const lines = useMemo(
    () => nodes.slice(1).map((n) => ({ from: 'core', to: n.id })),
    [nodes],
  );

  const updateNode = (id: string, position: { x: number; y: number }) => {
    setNodes((prev) => prev.map((node) => (node.id === id ? { ...node, ...position } : node)));
  };

  return (
    <div className="panel" aria-label="Mind map canvas" style={{ position: 'relative' }}>
      <h2>Mind Map</h2>
      <p>Drag with mouse or use keyboard arrows when a node is focused.</p>
      <div
        ref={boardRef}
        style={{ width: '100%', minHeight: 320, position: 'relative', borderRadius: 16, background: 'rgba(255,255,255,0.04)' }}
      >
        <svg style={{ position: 'absolute', inset: 0 }} aria-hidden>
          {lines.map((line) => {
            const from = nodes.find((n) => n.id === line.from)!;
            const to = nodes.find((n) => n.id === line.to)!;
            return <line key={line.to} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="rgba(255,255,255,0.35)" strokeWidth={2} />;
          })}
        </svg>
        {nodes.map((node) => (
          <div
            key={node.id}
            role="button"
            tabIndex={0}
            aria-label={`${node.label} node`}
            className="focus-ring"
            style={{
              position: 'absolute',
              left: node.x,
              top: node.y,
              padding: '10px 14px',
              borderRadius: 12,
              background: node.color,
              color: '#0d1b2a',
              cursor: 'grab',
              touchAction: 'none',
              userSelect: 'none',
              transform: 'translate(-50%, -50%)',
            }}
            onKeyDown={(e) => {
              const step = e.shiftKey ? 10 : 4;
              if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
                const offset =
                  e.key === 'ArrowUp'
                    ? { x: node.x, y: node.y - step }
                    : e.key === 'ArrowDown'
                      ? { x: node.x, y: node.y + step }
                      : e.key === 'ArrowLeft'
                        ? { x: node.x - step, y: node.y }
                        : { x: node.x + step, y: node.y };
                updateNode(node.id, offset);
              }
            }}
            onPointerDown={(e) => {
              setActive(node.id);
              const rect = boardRef.current?.getBoundingClientRect();
              const move = (ev: PointerEvent) => {
                if (!rect) return;
                updateNode(node.id, { x: ev.clientX - rect.left, y: ev.clientY - rect.top });
              };
              const up = () => {
                setActive(null);
                window.removeEventListener('pointermove', move);
                window.removeEventListener('pointerup', up);
              };
              window.addEventListener('pointermove', move);
              window.addEventListener('pointerup', up, { once: true });
            }}
            aria-pressed={active === node.id}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}
