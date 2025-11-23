/**
 * Game Constants
 * Shared constants used throughout the game
 */

export const SCENE_KEYS = {
  BOOT: 'BootScene',
  MAIN_MENU: 'MainMenuScene',
  AGE_SELECTION: 'AgeSelectionScene',
  CHARACTER_CREATION: 'CharacterCreationScene',
  HUB: 'HubScene',
  MODULE_1: 'Module1AwakeningCircle',
  MODULE_2: 'Module2MemoryConstellation',
  MODULE_3: 'Module3TempleEmbodiment',
  MODULE_4: 'Module4SpeakingStone',
  MODULE_5: 'Module5MirrorPortal',
  MODULE_6: 'Module6CatharticFalls',
  MODULE_7: 'Module7EmotionalCompass',
  MODULE_8: 'Module8WisdomTree',
  MODULE_9: 'Module9RipplePool',
} as const;

export const COLORS = {
  // UI Colors
  UI_BACKGROUND: 0x0f3460,
  UI_PANEL: 0x533483,
  UI_TEXT: 0xffffff,
  UI_ACCENT: 0xe94560,

  // Emotion Colors (hex as numbers)
  ANGRY: 0x8b0000,
  ANXIOUS: 0xcc5500,
  SCARED: 0xb8860b,
  JEALOUS: 0x6b8e23,
  GUILTY: 0x228b22,
  FORGIVING: 0x6a5acd,
  JOY: 0x00ced1,
  LONELY: 0xdaa520,
  PLAYFUL: 0xffd700,
  GRATEFUL: 0x008b8b,
  OTHER: 0x8fbc8f,
  HOPEFUL: 0xbc8f8f,
  SHAMEFUL: 0xdb7093,
  SAD: 0x663399,
  STUCK: 0x9370db,
  NERVOUS: 0xcd853f,
} as const;

export const FONT_FAMILIES = {
  TITLE: 'Cinzel, serif',
  BODY: 'Merriweather, serif',
  UI: 'Raleway, sans-serif',
  HANDWRITING: 'Dancing Script, cursive',
} as const;

export const DEPTHS = {
  BACKGROUND: 0,
  ENVIRONMENT: 10,
  PARTICLES_BG: 20,
  ENTITIES: 30,
  PLAYER: 40,
  COMPANION: 45,
  PARTICLES_FG: 50,
  UI: 100,
  OVERLAY: 200,
} as const;

export const ANIMATIONS = {
  FADE_DURATION: 500,
  SCENE_TRANSITION: 1000,
  UI_TRANSITION: 300,
} as const;
