/**
 * Boot Scene
 * Initial scene that loads essential assets
 */

import Phaser from 'phaser';
import { SCENE_KEYS } from '../config/constants';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.BOOT });
  }

  preload(): void {
    // Show loading text
    const loadingText = this.add
      .text(this.scale.width / 2, this.scale.height / 2, 'Loading...', {
        fontSize: '48px',
        color: '#ffffff',
        fontFamily: 'Raleway, sans-serif',
      })
      .setOrigin(0.5);

    // Create a simple particle for MVP (1x1 white pixel)
    const graphics = this.add.graphics();
    graphics.fillStyle(0xffffff, 1);
    graphics.fillCircle(2, 2, 2);
    graphics.generateTexture('particle', 4, 4);
    graphics.destroy();

    // TODO: Load actual game assets here
    // this.load.image('background', 'assets/images/backgrounds/hub.png');
    // this.load.spritesheet('player', 'assets/images/characters/player.png', ...);
    // this.load.audio('hub-music', 'assets/audio/music/hub-theme.mp3');

    // For MVP, we'll use generated/placeholder graphics

    this.load.on('progress', (value: number) => {
      loadingText.setText(`Loading... ${Math.floor(value * 100)}%`);
    });

    this.load.on('complete', () => {
      loadingText.setText('Ready!');
    });
  }

  create(): void {
    console.log('✅ Boot Scene: Assets loaded');

    // Initialize database
    import('@/services/storage/database').then(({ initializeDatabase }) => {
      initializeDatabase().then(() => {
        // Transition to main menu
        this.time.delayedCall(500, () => {
          this.scene.start(SCENE_KEYS.MAIN_MENU);
        });
      });
    });
  }
}
