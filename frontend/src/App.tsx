import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MoodMeter from './components/MoodMeter';
import MindMapCanvas from './components/MindMapCanvas';
import BodyAwarenessDiagram from './components/BodyAwarenessDiagram';
import LetterWritingForms from './components/LetterWritingForms';
import FeelingsJournal from './components/FeelingsJournal';
import TrajectoriesScene from './components/TrajectoriesScene';
import SpiritualAwakeningBubbles from './components/SpiritualAwakeningBubbles';
import IntentionsRipples from './components/IntentionsRipples';
import MoodCollageStudio from './components/MoodCollageStudio';
import NextStepsBridge from './components/NextStepsBridge';
import GuidedImageryPlayer from './components/GuidedImageryPlayer';

function Home() {
  return (
    <div className="card-grid" aria-label="Mood Meadow menu grid">
      {[
        'Mood Meter',
        'Mind Map',
        'Body Awareness',
        'Letters',
        'Journal',
        'Trajectories',
        'Spiritual Awakening',
        'Intentions & Ripples',
        'Collage Studio',
        'Next Steps Bridge',
        'Guided Imagery',
      ].map((item) => (
        <div className="panel" key={item} role="article" aria-label={`${item} preview`}>
          <h3>{item}</h3>
          <p>
            Quick access tile for {item}. Use the navigation or keyboard shortcuts (Alt + Shift + arrow keys)
            to move focus between sections.
          </p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood-meter" element={<MoodMeter />} />
        <Route path="/mind-map" element={<MindMapCanvas />} />
        <Route path="/body-awareness" element={<BodyAwarenessDiagram />} />
        <Route path="/letters" element={<LetterWritingForms />} />
        <Route path="/journal" element={<FeelingsJournal />} />
        <Route path="/trajectories" element={<TrajectoriesScene />} />
        <Route path="/spiritual-awakening" element={<SpiritualAwakeningBubbles />} />
        <Route path="/intentions" element={<IntentionsRipples />} />
        <Route path="/mood-collage" element={<MoodCollageStudio />} />
        <Route path="/next-steps" element={<NextStepsBridge />} />
        <Route path="/guided-imagery" element={<GuidedImageryPlayer />} />
      </Routes>
    </Layout>
  );
}
