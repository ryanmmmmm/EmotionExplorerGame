import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { Howl } from 'howler';
import SidePanel from './SidePanel';
import SubFeelingSelector from './SubFeelingSelector';
import AmbientAudioToggle from './AmbientAudioToggle';
import { useAppSelector, useAppDispatch } from '../store';
import { setTextScale } from '../store/sessionSlice';

const navItems = [
  { label: 'Mood Meter', to: '/mood-meter' },
  { label: 'Mind Map', to: '/mind-map' },
  { label: 'Body Awareness', to: '/body-awareness' },
  { label: 'Letters', to: '/letters' },
  { label: 'Journal', to: '/journal' },
  { label: 'Trajectories', to: '/trajectories' },
  { label: 'Spiritual Awakening', to: '/spiritual-awakening' },
  { label: 'Intentions & Ripples', to: '/intentions' },
  { label: 'Mood Collage', to: '/mood-collage' },
  { label: 'Next Steps', to: '/next-steps' },
  { label: 'Guided Imagery', to: '/guided-imagery' },
];

const ambient = new Howl({
  src: ['data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YQAAAAA='],
  loop: true,
  volume: 0.35,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { ambientEnabled, textScale } = useAppSelector((state) => state.session);

  useEffect(() => {
    if (ambientEnabled && !ambient.playing()) ambient.play();
    if (!ambientEnabled && ambient.playing()) ambient.pause();
  }, [ambientEnabled]);

  return (
    <div className="app-shell" style={{ fontSize: `${textScale}rem` }}>
      <aside>
        <Link to="/" className="panel" style={{ display: 'block', margin: '16px' }} aria-label="Mood Meadow home">
          <h2>Mood Meadow</h2>
          <p>Navigate scenes, rituals, and journals.</p>
        </Link>
        <SidePanel>
          <nav aria-label="Primary navigation">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `focus-ring ${isActive ? 'active' : ''}`}
                    style={{
                      display: 'block',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      marginBottom: 6,
                    }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div style={{ marginTop: 16 }}>
            <label htmlFor="text-size" style={{ display: 'block', marginBottom: 6 }}>
              Adjust text size
            </label>
            <input
              id="text-size"
              className="focus-ring"
              type="range"
              min={0.9}
              max={1.3}
              step={0.05}
              value={textScale}
              onChange={(e) => dispatch(setTextScale(Number(e.target.value)))}
            />
          </div>
          <AmbientAudioToggle />
        </SidePanel>
      </aside>
      <main style={{ padding: 24 }}>
        <SubFeelingSelector />
        {children}
      </main>
    </div>
  );
}
