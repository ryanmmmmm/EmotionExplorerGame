import { toggleAmbient } from '../store/sessionSlice';
import { useAppDispatch, useAppSelector } from '../store';

export default function AmbientAudioToggle() {
  const dispatch = useAppDispatch();
  const enabled = useAppSelector((state) => state.session.ambientEnabled);

  return (
    <button
      className="ghost focus-ring"
      aria-pressed={enabled}
      onClick={() => dispatch(toggleAmbient())}
      style={{ alignSelf: 'flex-start' }}
    >
      {enabled ? 'Pause ambient audio' : 'Play ambient audio'}
    </button>
  );
}
