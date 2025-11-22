import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FeelingIntensity = {
  label: string;
  intensity: number;
};

type EmotionState = {
  primaryFeeling: string;
  subFeeling: string;
  intensity: number;
  bodyNotes: Record<string, string>;
  moodLog: FeelingIntensity[];
};

const initialState: EmotionState = {
  primaryFeeling: 'Calm',
  subFeeling: 'Peaceful',
  intensity: 50,
  bodyNotes: {},
  moodLog: [],
};

const emotionSlice = createSlice({
  name: 'emotion',
  initialState,
  reducers: {
    setPrimaryFeeling(state, action: PayloadAction<string>) {
      state.primaryFeeling = action.payload;
    },
    setSubFeeling(state, action: PayloadAction<string>) {
      state.subFeeling = action.payload;
    },
    setIntensity(state, action: PayloadAction<number>) {
      state.intensity = action.payload;
      state.moodLog.push({ label: state.subFeeling, intensity: action.payload });
      state.moodLog = state.moodLog.slice(-30);
    },
    updateBodyNote(state, action: PayloadAction<{ part: string; note: string }>) {
      const { part, note } = action.payload;
      state.bodyNotes[part] = note;
    },
  },
});

export const { setPrimaryFeeling, setSubFeeling, setIntensity, updateBodyNote } = emotionSlice.actions;
export default emotionSlice.reducer;
