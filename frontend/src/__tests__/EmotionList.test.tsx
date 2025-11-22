import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import EmotionList from '../components/EmotionList';
import type { Emotion } from '../types';

const emotions: Emotion[] = [
  { name: 'Joy', description: 'Happiness', responses: ['Smile'] },
  { name: 'Fear', description: 'Anxiety', responses: ['Deep breaths'] },
];

describe('EmotionList', () => {
  it('renders and selects emotions', () => {
    const onSelect = jest.fn();
    render(<EmotionList emotions={emotions} onSelect={onSelect} selected={emotions[0]} />);

    const fearButton = screen.getByText('Fear');
    fireEvent.click(fearButton);

    expect(onSelect).toHaveBeenCalledWith(emotions[1]);
  });
});
