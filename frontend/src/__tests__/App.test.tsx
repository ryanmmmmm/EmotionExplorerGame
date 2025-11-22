import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import App from '../App';
import type { Emotion } from '../types';

type FetchMock = jest.MockedFunction<typeof fetch>;

const mockEmotions: Emotion[] = [
  {
    name: 'Joy',
    description: 'Feeling happy and light.',
    responses: ['Share gratitude', 'Celebrate with friends'],
  },
  {
    name: 'Calm',
    description: 'Peaceful and relaxed.',
    responses: ['Enjoy nature', 'Meditate for five minutes'],
  },
];

describe('App core flows', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockEmotions,
    }) as unknown as FetchMock;
  });

  it('loads and renders emotions then allows selection', async () => {
    render(<App />);

    expect(screen.getByText(/Loading emotions/)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('Joy')).toBeInTheDocument());

    fireEvent.click(screen.getByText('Calm'));

    expect(screen.getByRole('heading', { name: 'Calm' })).toBeInTheDocument();
    expect(screen.getByText('Peaceful and relaxed.')).toBeInTheDocument();
  });

  it('shows error message when API fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    render(<App />);

    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent('Failed to load emotions'),
    );
  });
});
