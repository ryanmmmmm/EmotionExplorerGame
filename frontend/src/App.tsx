import React, { Suspense, useEffect, useState } from 'react';
import EmotionList from './components/EmotionList';
import type { Emotion } from './types';

const EmotionDetails = React.lazy(() => import('./components/EmotionDetails'));

const App: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [emotions, setEmotions] = useState<Emotion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_BASE_URL || '/api';
    fetch(`${apiBase}/emotions`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to load emotions');
        }
        const payload = (await response.json()) as Emotion[];
        setEmotions(payload);
        setSelectedEmotion(payload[0]);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleSelect = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
  };

  if (isLoading) {
    return <p>Loading emotions...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <div className="app">
      <header>
        <h1>Emotion Explorer</h1>
        <p>Discover emotional states and how to respond.</p>
      </header>
      <main className="app__content">
        <EmotionList emotions={emotions} onSelect={handleSelect} selected={selectedEmotion} />
        <section className="app__details" aria-live="polite">
          <Suspense fallback={<p>Loading details...</p>}>
            {selectedEmotion ? (
              <EmotionDetails emotion={selectedEmotion} />
            ) : (
              <p>Select an emotion to learn more.</p>
            )}
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default App;
