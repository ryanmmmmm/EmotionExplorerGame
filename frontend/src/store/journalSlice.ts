import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

type JournalEntry = {
  id: string;
  title: string;
  body: string;
  timestamp: number;
};

type JournalState = {
  entries: JournalEntry[];
};

const initialState: JournalState = {
  entries: [],
};

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action: PayloadAction<JournalEntry>) {
        state.entries.unshift(action.payload);
      },
      prepare(entry: Omit<JournalEntry, 'id' | 'timestamp'>) {
        return {
          payload: {
            ...entry,
            id: nanoid(),
            timestamp: Date.now(),
          },
        };
      },
    },
  },
});

export const { addEntry } = journalSlice.actions;
export default journalSlice.reducer;
