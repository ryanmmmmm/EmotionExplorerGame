/**
 * Age Selection Scene
 * Player selects their age bracket for age-appropriate content
 */

import { BaseScene } from './BaseScene';
import { SCENE_KEYS } from '../config/constants';

interface AgeBracket {
  range: string;
  minAge: number;
  maxAge: number;
  description: string;
}

export class AgeSelectionScene extends BaseScene {
  private selectedAge?: number;

  private ageBrackets: AgeBracket[] = [
    {
      range: '12-13',
      minAge: 12,
      maxAge: 13,
      description: 'Early Teens - Starting your journey',
    },
    {
      range: '14-15',
      minAge: 14,
      maxAge: 15,
      description: 'Mid Teens - Growing and learning',
    },
    {
      range: '16-17',
      minAge: 16,
      maxAge: 17,
      description: 'Late Teens - Becoming independent',
    },
    {
      range: '18-20',
      minAge: 18,
      maxAge: 20,
      description: 'Young Adult - Stepping into the world',
    },
  ];

  constructor() {
    super(SCENE_KEYS.AGE_SELECTION);
  }

  create(): void {
    this.setEmotion('joy'); // Welcoming, positive emotion
    this.fadeIn();

    // Background
    this.cameras.main.setBackgroundColor('#1A1A2E');
    this.createStarfield();
    this.createEmotionalWisps();

    // Title
    const title = this.add
      .text(this.scale.width / 2, 200, 'Who Will You Become?', {
        fontSize: '72px',
        color: '#ffffff',
        fontFamily: 'Cinzel, serif',
        align: 'center',
      })
      .setOrigin(0.5);

    // Subtitle
    const subtitle = this.add
      .text(
        this.scale.width / 2,
        300,
        'First, tell us your age so we can personalize your journey',
        {
          fontSize: '32px',
          color: '#00CED1',
          fontFamily: 'Merriweather, serif',
          align: 'center',
        }
      )
      .setOrigin(0.5);

    // Entrance animation for title and subtitle
    this.tweens.add({
      targets: [title, subtitle],
      alpha: { from: 0, to: 1 },
      y: { from: '-=30', to: '+=30' },
      duration: 1000,
      ease: 'Power2',
    });

    // Create age bracket buttons
    const startY = 450;
    const spacing = 140;

    this.ageBrackets.forEach((bracket, index) => {
      this.createAgeBracketButton(
        this.scale.width / 2,
        startY + index * spacing,
        bracket,
        index
      );
    });

    // Instructions at bottom
    const instructions = this.add
      .text(
        this.scale.width / 2,
        this.scale.height - 100,
        'Select your age range to continue',
        {
          fontSize: '24px',
          color: '#ffffff',
          fontFamily: 'Raleway, sans-serif',
        }
      )
      .setOrigin(0.5)
      .setAlpha(0.7);

    // Pulsing animation for instructions
    this.tweens.add({
      targets: instructions,
      alpha: 0.4,
      duration: 1500,
      yoyo: true,
      repeat: -1,
    });
  }

  private createAgeBracketButton(
    x: number,
    y: number,
    bracket: AgeBracket,
    index: number
  ): void {
    const container = this.add.container(x, y);
    const width = 600;
    const height = 110;

    // Background with gradient effect
    const bg = this.add
      .rectangle(0, 0, width, height, this.emotionColor, 0.7)
      .setInteractive({ useHandCursor: true })
      .setStrokeStyle(3, 0xffffff, 0.5);

    // Age range text (large)
    const rangeText = this.add
      .text(0, -20, bracket.range, {
        fontSize: '48px',
        color: '#ffffff',
        fontFamily: 'Cinzel, serif',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    // Description text (smaller)
    const descText = this.add
      .text(0, 25, bracket.description, {
        fontSize: '24px',
        color: '#ffffff',
        fontFamily: 'Merriweather, serif',
      })
      .setOrigin(0.5)
      .setAlpha(0.9);

    container.add([bg, rangeText, descText]);

    // Staggered entrance animation
    container.setAlpha(0);
    this.tweens.add({
      targets: container,
      alpha: 1,
      x: { from: x - 50, to: x },
      duration: 600,
      delay: index * 150,
      ease: 'Back.easeOut',
    });

    // Hover effects
    bg.on('pointerover', () => {
      bg.setFillStyle(this.emotionColor, 1);
      bg.setStrokeStyle(4, 0xffffff, 1);
      this.tweens.add({
        targets: container,
        scaleX: 1.05,
        scaleY: 1.05,
        duration: 200,
      });
    });

    bg.on('pointerout', () => {
      bg.setFillStyle(this.emotionColor, 0.7);
      bg.setStrokeStyle(3, 0xffffff, 0.5);
      this.tweens.add({
        targets: container,
        scaleX: 1,
        scaleY: 1,
        duration: 200,
      });
    });

    bg.on('pointerdown', () => {
      // Click animation
      this.tweens.add({
        targets: container,
        scaleX: 0.95,
        scaleY: 0.95,
        duration: 100,
        yoyo: true,
        onComplete: () => {
          this.selectAgeBracket(bracket);
        },
      });
    });
  }

  private selectAgeBracket(bracket: AgeBracket): void {
    // Store the middle age of the bracket for profile creation
    this.selectedAge = Math.floor((bracket.minAge + bracket.maxAge) / 2);

    // Visual feedback - flash effect
    this.cameras.main.flash(300, 0, 206, 209); // Joy color

    // Transition to character creation with age data
    this.time.delayedCall(400, () => {
      this.transitionToScene(SCENE_KEYS.CHARACTER_CREATION, {
        age: this.selectedAge,
        ageBracket: bracket.range,
      });
    });
  }

  private createStarfield(): void {
    const graphics = this.add.graphics();

    for (let i = 0; i < 200; i++) {
      const x = Phaser.Math.Between(0, this.scale.width);
      const y = Phaser.Math.Between(0, this.scale.height);
      const size = Phaser.Math.Between(1, 3);
      const alpha = Phaser.Math.FloatBetween(0.3, 1);

      graphics.fillStyle(0xffffff, alpha);
      graphics.fillCircle(x, y, size);
    }

    graphics.setDepth(0);
  }
}
