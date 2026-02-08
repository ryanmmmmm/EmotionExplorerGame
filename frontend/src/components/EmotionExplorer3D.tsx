import { useEffect, useMemo, useRef, useState } from 'react';

type EmotionZone = {
  id: string;
  name: string;
  color: string;
  energy: number;
  description: string;
};

const zones: EmotionZone[] = [
  {
    id: 'clarity',
    name: 'Clarity Spire',
    color: '#7cd4f7',
    energy: 82,
    description: 'A calm ridge where clarity rises like a lighthouse beam.',
  },
  {
    id: 'wonder',
    name: 'Wonder Bloom',
    color: '#b694ff',
    energy: 74,
    description: 'Curious sparks that lift the canopy into a soft lavender glow.',
  },
  {
    id: 'joy',
    name: 'Joy Harbor',
    color: '#f6b0f4',
    energy: 91,
    description: 'Playful currents and rhythmic pulses guide you forward.',
  },
  {
    id: 'resolve',
    name: 'Resolve Gate',
    color: '#8cf0a6',
    energy: 69,
    description: 'Steady footfalls, anchored in emerald light.',
  },
  {
    id: 'gratitude',
    name: 'Gratitude Vale',
    color: '#ffd479',
    energy: 88,
    description: 'Warm constellations thread between gilded arches.',
  },
];

function useStarfield(canvasRef: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame = 0;
    let stars = Array.from({ length: 180 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      radius: 0.6 + Math.random() * 1.8,
    }));

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      if (!canvas) return;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(8, 12, 28, 0.6)';
      ctx.fillRect(0, 0, width, height);

      stars = stars.map((star) => ({
        ...star,
        y: star.y + 0.0008 + star.z * 0.0012,
      }));

      stars.forEach((star) => {
        const x = star.x * width;
        const y = (star.y % 1) * height;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + star.z * 0.6})`;
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [canvasRef]);
}

export default function EmotionExplorer3D() {
  const [activeZone, setActiveZone] = useState(zones[0]);
  const [tilt, setTilt] = useState({ x: -8, y: 12 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const orbitOffsets = useMemo(() => zones.map((_, index) => index * 72), []);

  useStarfield(canvasRef);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setTilt({
      x: -12 + y * 24,
      y: -18 + x * 36,
    });
  };

  return (
    <div className="emotion-explorer-3d" aria-label="Emotion Explorer 3D game">
      <section className="panel">
        <h2>Emotion Explorer 3D</h2>
        <p>
          A playable 3D-inspired vista built with layered depth, animated lighting, and responsive motion. Hover to
          tilt the world and choose a zone to tune the mood journey.
        </p>
      </section>

      <div className="canvas-shell" onMouseMove={handleMove} ref={stageRef} role="presentation">
        <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
        <div
          className="horizon"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          <div className="glow-ring" />
          <div className="island-base" />
          <div className="island-plate" />
          <div className="island-core" />
          <div className="bridge-steps">
            {Array.from({ length: 8 }, (_, index) => (
              <span key={`bridge-${index}`} style={{ '--step': index } as React.CSSProperties} />
            ))}
          </div>
          <div className="orbital-track">
            {zones.map((zone, index) => (
              <button
                key={zone.id}
                type="button"
                className={`emotion-orb ${activeZone.id === zone.id ? 'active' : ''}`}
                style={{
                  '--orbit': `${orbitOffsets[index]}deg`,
                  '--orb-color': zone.color,
                } as React.CSSProperties}
                onClick={() => setActiveZone(zone)}
              >
                <span className="orb-label">{zone.name}</span>
                <span className="orb-core" />
              </button>
            ))}
          </div>
          <div className="tower">
            <div className="tower-top" />
            <div className="tower-beam" />
          </div>
          <div className="arches">
            {zones.map((zone, index) => (
              <span
                key={`arch-${zone.id}`}
                className="arch"
                style={{
                  '--arch-index': index,
                  '--arch-color': zone.color,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
        <div className="hud">
          <div className="panel">
            <h3>{activeZone.name}</h3>
            <p>{activeZone.description}</p>
            <div className="hud-meter">
              <span>Energy</span>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: `${activeZone.energy}%`, background: activeZone.color }} />
              </div>
              <strong>{activeZone.energy}%</strong>
            </div>
          </div>
          <div className="panel">
            <h4>Explorer Controls</h4>
            <ul>
              <li>Hover to rotate the world.</li>
              <li>Click a zone orb to focus its energy.</li>
              <li>Track energy flow with the HUD meter.</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="panel">
        <h3>Scene Highlights</h3>
        <ul>
          <li>Layered 3D transforms build a floating island without external 3D engines.</li>
          <li>Orbiting emotion orbs are mapped to unique color and energy signatures.</li>
          <li>Animated starfield and gradient lighting deepen the immersive feel.</li>
        </ul>
      </section>
    </div>
  );
}
