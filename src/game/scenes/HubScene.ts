/**
 * Hub Scene
 * Central realm where players select emotions to explore
 */

import { BaseScene } from './BaseScene';
import { SCENE_KEYS } from '../config/constants';
import { usePlayerStore } from '@/stores/playerStore';
import { useGameProgressStore } from '@/stores/gameProgressStore';
import { EMOTION_DEFINITIONS, EmotionType } from '@/types/emotion.types';
import { VisualEffectsManager } from '../effects/VisualEffectsManager';

interface EmotionCrystal {
  emotion: EmotionType;
  x: number;
  y: number;
  sprite?: Phaser.GameObjects.Container;
  unlocked: boolean;
}

export class HubScene extends BaseScene {
  private emotionCrystals: EmotionCrystal[] = [];
  private playerSprite!: Phaser.GameObjects.Container;
  private companionSprite!: Phaser.GameObjects.Container;
  private welcomeShown: boolean = false;
  private vfx!: VisualEffectsManager;

  constructor() {
    super(SCENE_KEYS.HUB);
  }

  create(): void {
    this.setEmotion('joy'); // Default welcoming atmosphere
    this.fadeIn();

    // Initialize visual effects manager
    this.vfx = new VisualEffectsManager(this);

    // Enhanced background with effects
    this.createHubBackground();

    // Add stunning visual effects
    this.vfx.createAuroraBackground(0x9370db);
    this.vfx.createParallaxStars(3);
    this.vfx.createFloatingOrbs(25, 0x9370db);
    this.vfx.createFireflies(20, 0xffd700);

    // Center portal effect
    this.vfx.createPortalEffect(
      this.scale.width / 2,
      this.scale.height / 2 - 50,
      0x00ced1
    );

    this.createEmotionalWisps();

    // Get player profile
    const playerProfile = usePlayerStore.getState().profile;
    const playerName = playerProfile?.name || 'Explorer';

    // Title
    this.add
      .text(this.scale.width / 2, 60, 'The Emotional Realm', {
        fontSize: '56px',
        color: '#ffffff',
        fontFamily: 'Cinzel, serif',
      })
      .setOrigin(0.5);

    // Welcome message (first time only)
    if (!this.welcomeShown) {
      this.showWelcomeMessage(playerName);
      this.welcomeShown = true;
    }

    // Player avatar (simplified)
    this.createPlayerAvatar();

    // Companion
    this.createCompanion();

    // Create emotion crystals in a circular arrangement
    this.createEmotionCrystals();

    // UI Elements
    this.createUIPanel();

    console.log('✅ Hub Scene: Ready');
  }

  private createHubBackground(): void {
    // Gradient background
    const graphics = this.add.graphics();

    // Create vertical gradient
    const gradientStops = [
      { offset: 0, color: 0x0f3460 },
      { offset: 0.5, color: 0x16213e },
      { offset: 1, color: 0x1a1a2e },
    ];

    graphics.fillStyle(gradientStops[0].color);
    graphics.fillRect(0, 0, this.scale.width, this.scale.height);

    // Add stars
    for (let i = 0; i < 150; i++) {
      const x = Phaser.Math.Between(0, this.scale.width);
      const y = Phaser.Math.Between(0, this.scale.height);
      const size = Phaser.Math.Between(1, 2);
      const alpha = Phaser.Math.FloatBetween(0.2, 0.8);

      graphics.fillStyle(0xffffff, alpha);
      graphics.fillCircle(x, y, size);
    }

    // Add mystical ground platform
    const platformY = this.scale.height - 150;
    graphics.fillStyle(0x2c3e50, 0.6);
    graphics.fillRoundedRect(
      this.scale.width / 2 - 500,
      platformY,
      1000,
      10,
      5
    );

    // Add ethereal glow
    const glow = this.add.circle(
      this.scale.width / 2,
      this.scale.height / 2,
      400,
      0x00ced1,
      0.05
    );

    this.tweens.add({
      targets: glow,
      scale: 1.2,
      alpha: 0.08,
      duration: 3000,
      yoyo: true,
      repeat: -1,
    });
  }

  private showWelcomeMessage(playerName: string): void {
    const overlay = this.add.container(this.scale.width / 2, this.scale.height / 2);
    overlay.setDepth(1000);

    const bg = this.add.rectangle(0, 0, 900, 400, 0x000000, 0.85);

    const welcomeText = this.add
      .text(0, -120, `Welcome, ${playerName}!`, {
        fontSize: '52px',
        color: '#FFD700',
        fontFamily: 'Cinzel, serif',
      })
      .setOrigin(0.5);

    const messageText = this.add
      .text(
        0,
        0,
        'You have entered the Emotional Realm,\na mystical space where feelings take form.\n\n' +
        'Each glowing crystal represents an emotion.\n' +
        'Choose one to begin your journey of discovery.',
        {
          fontSize: '24px',
          color: '#ffffff',
          fontFamily: 'Merriweather, serif',
          align: 'center',
          lineSpacing: 10,
        }
      )
      .setOrigin(0.5);

    const continueButton = this.createButton(
      0,
      140,
      'Begin Exploration',
      () => {
        this.tweens.add({
          targets: overlay,
          alpha: 0,
          duration: 500,
          onComplete: () => overlay.destroy(),
        });
      },
      300,
      70
    );

    overlay.add([bg, welcomeText, messageText, continueButton]);
    overlay.setAlpha(0);

    this.tweens.add({
      targets: overlay,
      alpha: 1,
      duration: 800,
    });
  }

  private createPlayerAvatar(): void {
    const x = this.scale.width / 2;
    const y = this.scale.height - 200;

    this.playerSprite = this.add.container(x, y);

    const playerProfile = usePlayerStore.getState().profile;
    if (!playerProfile) return;

    // Simplified avatar representation
    const avatar = playerProfile.avatar;
    const bodyColor = parseInt(avatar.skinTone.replace('#', ''), 16);
    const hairColor = parseInt(avatar.hairColor.replace('#', ''), 16);

    // Body
    const body = this.add.ellipse(0, 20, 40, 60, bodyColor);

    // Head
    const head = this.add.circle(0, -20, 25, bodyColor);

    // Hair
    const hair = this.add.ellipse(0, -30, 50, 40, hairColor);

    // Simple eyes
    const leftEye = this.add.circle(-8, -20, 4, 0x000000);
    const rightEye = this.add.circle(8, -20, 4, 0x000000);

    this.playerSprite.add([hair, body, head, leftEye, rightEye]);

    // Gentle idle animation
    this.tweens.add({
      targets: this.playerSprite,
      y: y - 10,
      duration: 2000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });
  }

  private createCompanion(): void {
    const x = this.scale.width / 2 - 120;
    const y = this.scale.height - 250;

    this.companionSprite = this.add.container(x, y);

    // Simplified companion (mystical creature)
    const companionBody = this.add.circle(0, 0, 30, 0x9370db, 0.8);

    // Glow effect
    const glow = this.add.circle(0, 0, 40, 0x9370db, 0.3);

    // Eyes
    const leftEye = this.add.circle(-10, -5, 5, 0xffffff);
    const rightEye = this.add.circle(10, -5, 5, 0xffffff);

    // Pupils
    const leftPupil = this.add.circle(-10, -5, 2, 0x000000);
    const rightPupil = this.add.circle(10, -5, 2, 0x000000);

    this.companionSprite.add([glow, companionBody, leftEye, rightEye, leftPupil, rightPupil]);

    // Floating animation
    this.tweens.add({
      targets: this.companionSprite,
      y: y - 15,
      duration: 1800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    // Pulsing glow
    this.tweens.add({
      targets: glow,
      scale: 1.3,
      alpha: 0.1,
      duration: 2000,
      yoyo: true,
      repeat: -1,
    });

    // Companion name label
    const companionName = usePlayerStore.getState().profile?.companionName || 'Companion';
    this.add
      .text(x, y + 60, companionName, {
        fontSize: '18px',
        color: '#9370db',
        fontFamily: 'Merriweather, serif',
      })
      .setOrigin(0.5);
  }

  private createEmotionCrystals(): void {
    const centerX = this.scale.width / 2;
    const centerY = this.scale.height / 2 - 50;
    const radius = 320;

    // Get all 16 emotions
    const emotions = Object.keys(EMOTION_DEFINITIONS) as EmotionType[];

    emotions.forEach((emotionId, index) => {
      const angle = (Math.PI * 2 * index) / emotions.length - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      const emotion = EMOTION_DEFINITIONS[emotionId];
      const crystal = this.createEmotionCrystal(x, y, emotionId, emotion.name, emotion.color);

      this.emotionCrystals.push({
        emotion: emotionId,
        x,
        y,
        sprite: crystal,
        unlocked: true, // All unlocked for MVP
      });
    });
  }

  private createEmotionCrystal(
    x: number,
    y: number,
    emotionId: EmotionType,
    emotionName: string,
    colorHex: string
  ): Phaser.GameObjects.Container {
    const container = this.add.container(x, y);
    const color = parseInt(colorHex.replace('#', ''), 16);

    // Crystal shape (diamond)
    const graphics = this.add.graphics();
    graphics.fillStyle(color, 0.7);
    graphics.beginPath();
    graphics.moveTo(0, -25);
    graphics.lineTo(15, 0);
    graphics.lineTo(0, 25);
    graphics.lineTo(-15, 0);
    graphics.closePath();
    graphics.fillPath();

    // Glow
    const glow = this.add.circle(0, 0, 30, color, 0.2);

    // Label
    const label = this.add
      .text(0, 45, emotionName, {
        fontSize: '16px',
        color: '#ffffff',
        fontFamily: 'Raleway, sans-serif',
      })
      .setOrigin(0.5)
      .setAlpha(0.8);

    container.add([glow, graphics, label]);

    // Make interactive
    const hitArea = this.add.circle(0, 0, 35, 0xffffff, 0).setInteractive({ useHandCursor: true });
    container.add(hitArea);

    // Hover effect
    hitArea.on('pointerover', () => {
      graphics.setScale(1.2);
      label.setScale(1.1);
      glow.setScale(1.5);
      this.tweens.add({
        targets: [graphics, label],
        duration: 200,
      });
    });

    hitArea.on('pointerout', () => {
      graphics.setScale(1);
      label.setScale(1);
      glow.setScale(1);
    });

    hitArea.on('pointerdown', () => {
      this.selectEmotion(emotionId, emotionName);
    });

    // Floating animation with slight variation
    this.tweens.add({
      targets: container,
      y: y - 10,
      duration: 2000 + Math.random() * 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });

    // Twinkling
    this.tweens.add({
      targets: glow,
      alpha: 0.3,
      scale: 1.2,
      duration: 1500 + Math.random() * 1000,
      yoyo: true,
      repeat: -1,
    });

    return container;
  }

  private selectEmotion(emotionId: EmotionType, emotionName: string): void {
    console.log(`✨ Selected emotion: ${emotionName}`);

    const emotion = EMOTION_DEFINITIONS[emotionId];
    const color = parseInt(emotion.color.replace('#', ''), 16);

    // Enhanced visual feedback
    this.cameras.main.flash(300, ...this.hexToRgb(emotion.color));

    // Find the crystal position
    const crystal = this.emotionCrystals.find(c => c.emotion === emotionId);
    if (crystal) {
      // Energy pulse from crystal
      this.vfx.createEnergyPulse(crystal.x, crystal.y, color, 8);

      // Sparkles burst
      this.vfx.createSparkles(crystal.x, crystal.y, color, 80);

      // Light rays
      this.vfx.createLightRays(crystal.x, crystal.y, color, 16);
    }

    // Show emotion selection dialog
    this.showEmotionSelectionDialog(emotionId, emotionName);
  }

  private showEmotionSelectionDialog(emotionId: EmotionType, emotionName: string): void {
    const overlay = this.add.container(this.scale.width / 2, this.scale.height / 2);
    overlay.setDepth(1000);

    const emotion = EMOTION_DEFINITIONS[emotionId];
    const color = parseInt(emotion.color.replace('#', ''), 16);

    const bg = this.add.rectangle(0, 0, 800, 500, 0x000000, 0.9)
      .setStrokeStyle(4, color);

    const titleText = this.add
      .text(0, -180, emotionName.toUpperCase(), {
        fontSize: '48px',
        color: emotion.color,
        fontFamily: 'Cinzel, serif',
      })
      .setOrigin(0.5);

    const domainText = this.add
      .text(0, -120, emotion.domainName, {
        fontSize: '28px',
        color: '#FFD700',
        fontFamily: 'Merriweather, serif',
        fontStyle: 'italic',
      })
      .setOrigin(0.5);

    const descText = this.add
      .text(0, -50, emotion.description, {
        fontSize: '20px',
        color: '#ffffff',
        fontFamily: 'Merriweather, serif',
        align: 'center',
        wordWrap: { width: 700 },
        lineSpacing: 8,
      })
      .setOrigin(0.5);

    const companionDialogue = this.add
      .text(0, 60, `"${emotion.companionDialogue}"`, {
        fontSize: '18px',
        color: '#9370db',
        fontFamily: 'Merriweather, serif',
        fontStyle: 'italic',
        align: 'center',
        wordWrap: { width: 700 },
      })
      .setOrigin(0.5);

    const exploreButton = this.createButton(
      -120,
      180,
      'Begin Journey',
      () => {
        this.startEmotionJourney(emotionId);
      },
      200,
      60
    );

    const backButton = this.createButton(
      120,
      180,
      'Not Yet',
      () => {
        this.tweens.add({
          targets: overlay,
          alpha: 0,
          duration: 300,
          onComplete: () => overlay.destroy(),
        });
      },
      200,
      60
    );

    overlay.add([bg, titleText, domainText, descText, companionDialogue, exploreButton, backButton]);
    overlay.setAlpha(0);

    this.tweens.add({
      targets: overlay,
      alpha: 1,
      duration: 300,
    });
  }

  private startEmotionJourney(emotionId: EmotionType): void {
    console.log(`🚀 Starting journey for emotion: ${emotionId}`);

    // Initialize progress tracking
    const progressStore = useGameProgressStore.getState();
    progressStore.startEmotionJourney(emotionId);

    // Visual feedback
    this.cameras.main.flash(500, 255, 215, 0);

    // Determine which module to navigate to based on progress
    const currentSession = progressStore.currentSession;
    const moduleNumber = currentSession?.currentModule || 1;

    // Map module number to scene key
    const moduleSceneKeys = [
      SCENE_KEYS.MODULE_1,
      SCENE_KEYS.MODULE_2,
      SCENE_KEYS.MODULE_3,
      SCENE_KEYS.MODULE_4,
      SCENE_KEYS.MODULE_5,
      SCENE_KEYS.MODULE_6,
      SCENE_KEYS.MODULE_7,
      SCENE_KEYS.MODULE_8,
      SCENE_KEYS.MODULE_9,
    ];

    const sceneKey = moduleSceneKeys[moduleNumber - 1];

    console.log(`📍 Navigating to Module ${moduleNumber}: ${sceneKey}`);

    // Transition to the appropriate module
    this.time.delayedCall(600, () => {
      this.transitionToScene(sceneKey, { emotionId });
    });
  }

  private createUIPanel(): void {
    // Top-right info panel
    const panelX = this.scale.width - 20;
    const panelY = 20;

    const playerProfile = usePlayerStore.getState().profile;
    if (!playerProfile) return;

    this.add
      .text(panelX, panelY, `${playerProfile.name}`, {
        fontSize: '24px',
        color: '#FFD700',
        fontFamily: 'Raleway, sans-serif',
      })
      .setOrigin(1, 0);

    this.add
      .text(panelX, panelY + 30, `Age: ${playerProfile.ageGroup}`, {
        fontSize: '18px',
        color: '#ffffff',
        fontFamily: 'Raleway, sans-serif',
      })
      .setOrigin(1, 0);

    // Menu button (bottom-left)
    this.createButton(
      120,
      this.scale.height - 50,
      'Main Menu',
      () => {
        this.transitionToScene(SCENE_KEYS.MAIN_MENU);
      },
      200,
      50
    );
  }

  private hexToRgb(hex: string): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
      : [0, 0, 0];
  }
}
