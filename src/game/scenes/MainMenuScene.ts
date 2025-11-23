/**
 * Main Menu Scene
 * First interactive scene - title screen and menu options
 */

import { BaseScene } from './BaseScene';
import { SCENE_KEYS, DEPTHS } from '../config/constants';

export class MainMenuScene extends BaseScene {
  constructor() {
    super(SCENE_KEYS.MAIN_MENU);
  }

  create(): void {
    // Fade in
    this.fadeIn();

    // Background gradient
    this.cameras.main.setBackgroundColor('#1A1A2E');

    // Create starfield effect
    this.createStarfield();

    // Title
    const title = this.add
      .text(this.scale.width / 2, 300, 'EMOTION EXPLORER', {
        fontSize: '96px',
        color: '#ffffff',
        fontFamily: 'Cinzel, serif',
        fontStyle: 'bold',
      })
      .setOrigin(0.5)
      .setDepth(DEPTHS.UI);

    const subtitle = this.add
      .text(this.scale.width / 2, 420, 'Realm of Feelings', {
        fontSize: '48px',
        color: '#00CED1',
        fontFamily: 'Cinzel, serif',
        fontStyle: 'italic',
      })
      .setOrigin(0.5)
      .setDepth(DEPTHS.UI);

    // Glow effect on title
    this.tweens.add({
      targets: [title, subtitle],
      alpha: 0.7,
      duration: 2000,
      yoyo: true,
      repeat: -1,
    });

    // Menu buttons
    const buttonY = 700;
    const buttonSpacing = 120;

    this.createButton(
      this.scale.width / 2,
      buttonY,
      'New Journey',
      () => this.startNewGame(),
      400,
      100
    );

    this.createButton(
      this.scale.width / 2,
      buttonY + buttonSpacing,
      'Continue Journey',
      () => this.continueGame(),
      400,
      100
    );

    this.createButton(
      this.scale.width / 2,
      buttonY + buttonSpacing * 2,
      'Settings',
      () => this.openSettings(),
      400,
      100
    );

    // Version text
    this.add
      .text(this.scale.width - 20, this.scale.height - 20, 'v1.0.0 MVP', {
        fontSize: '20px',
        color: '#888888',
        fontFamily: 'Raleway, sans-serif',
      })
      .setOrigin(1)
      .setDepth(DEPTHS.UI);

    // Floating particles
    this.setEmotion('joy');
    this.createEmotionalWisps();

    console.log('✅ Main Menu Scene: Ready');
  }

  private createStarfield(): void {
    const graphics = this.add.graphics();

    // Create random stars
    for (let i = 0; i < 200; i++) {
      const x = Phaser.Math.Between(0, this.scale.width);
      const y = Phaser.Math.Between(0, this.scale.height);
      const size = Phaser.Math.Between(1, 3);
      const alpha = Phaser.Math.FloatBetween(0.3, 1);

      graphics.fillStyle(0xffffff, alpha);
      graphics.fillCircle(x, y, size);
    }

    graphics.setDepth(DEPTHS.BACKGROUND);

    // Twinkling effect
    this.tweens.add({
      targets: graphics,
      alpha: 0.6,
      duration: 3000,
      yoyo: true,
      repeat: -1,
    });
  }

  private startNewGame(): void {
    console.log('📝 Starting new game...');
    // Transition to age selection
    this.transitionToScene(SCENE_KEYS.AGE_SELECTION);
  }

  private continueGame(): void {
    console.log('▶️ Continuing game...');
    // TODO: Load saved progress
    // For MVP, show placeholder
    const notice = this.createCenteredText(
      this.scale.height / 2,
      'Load Game Coming Soon!\n\nThis will load your saved progress\nand continue your emotional journey.',
      32,
      '#00CED1'
    );

    this.time.delayedCall(3000, () => {
      notice.destroy();
    });
  }

  private openSettings(): void {
    console.log('⚙️ Opening settings...');
    // TODO: Open settings UI
    // For MVP, show placeholder
    const notice = this.createCenteredText(
      this.scale.height / 2,
      'Settings Coming Soon!\n\nVolume Controls\nText Size\nAccessibility Options',
      32,
      '#00CED1'
    );

    this.time.delayedCall(3000, () => {
      notice.destroy();
    });
  }
}
