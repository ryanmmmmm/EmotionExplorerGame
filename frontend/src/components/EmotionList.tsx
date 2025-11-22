import React from 'react';
import type { Emotion } from '../types';

interface EmotionListProps {
  emotions: Emotion[];
  selected: Emotion | null;
  onSelect: (emotion: Emotion) => void;
}

const EmotionList: React.FC<EmotionListProps> = ({ emotions, selected, onSelect }) => {
  return (
    <aside className="app__list" aria-label="Emotion list">
      <ul>
        {emotions.map((emotion) => (
          <li key={emotion.name}>
            <button
              type="button"
              className={selected?.name === emotion.name ? 'selected' : ''}
              onClick={() => onSelect(emotion)}
            >
              {emotion.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default EmotionList;
