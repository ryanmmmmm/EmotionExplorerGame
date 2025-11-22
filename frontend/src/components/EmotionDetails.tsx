import React from 'react';
import type { Emotion } from '../types';

interface EmotionDetailsProps {
  emotion: Emotion;
}

const EmotionDetails: React.FC<EmotionDetailsProps> = ({ emotion }) => (
  <article>
    <h2>{emotion.name}</h2>
    <p>{emotion.description}</p>
    <h3>Suggested Responses</h3>
    <ul>
      {emotion.responses.map((response) => (
        <li key={response}>{response}</li>
      ))}
    </ul>
  </article>
);

export default EmotionDetails;
