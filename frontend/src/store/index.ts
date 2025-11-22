import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import sessionReducer from './sessionSlice';
import emotionReducer from './emotionSlice';
import journalReducer from './journalSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    emotion: emotionReducer,
    journal: journalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
