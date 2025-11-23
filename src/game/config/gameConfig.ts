/**
 * Phaser Game Configuration
 * Core settings for the game engine
 */

import Phaser from 'phaser';

export const GAME_WIDTH = 1920;
export const GAME_HEIGHT = 1080;

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  parent: 'phaser-game-container',
  backgroundColor: '#1A1A2E',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: import.meta.env.DEV, // Enable debug in development
    },
  },
  render: {
    pixelArt: false, // We want smooth, hand-painted look
    antialias: true,
  },
  fps: {
    target: 60,
    forceSetTimeOut: false,
  },
  scene: [], // Scenes will be added dynamically
};
