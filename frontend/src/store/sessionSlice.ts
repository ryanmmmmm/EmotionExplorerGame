import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SessionState = {
  userName: string;
  textScale: number;
  ambientEnabled: boolean;
};

const initialState: SessionState = {
  userName: 'Traveler',
  textScale: 1,
  ambientEnabled: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    setTextScale(state, action: PayloadAction<number>) {
      state.textScale = action.payload;
    },
    toggleAmbient(state) {
      state.ambientEnabled = !state.ambientEnabled;
    },
  },
});

export const { setUserName, setTextScale, toggleAmbient } = sessionSlice.actions;
export default sessionSlice.reducer;
