/**
 * Visual Effects Manager
 * Advanced particle systems, lighting, and post-processing effects using Phaser 3 WebGL
 */

import Phaser from 'phaser';

export class VisualEffectsManager {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  /**
   * Create magical aurora background effect
   */
  createAuroraBackground(color: number = 0x9370db): void {
    const width = this.scene.scale.width;
    const height = this.scene.scale.height;

    // Multiple layers of aurora
    for (let i = 0; i < 3; i++) {
      const graphics = this.scene.add.graphics();
      graphics.setDepth(-10 + i);

      // Draw wavy aurora bands
      const waveY = 200 + i * 100;

      graphics.fillGradientStyle(color, color, 0x000000, 0x000000, 0.2, 0.1, 0, 0);

      const points: number[][] = [];
      for (let x = 0; x <= width; x += 20) {
        const y = waveY + Math.sin((x / width) * Math.PI * 4 + i) * 50;
        points.push([x, y]);
      }

      // Create smooth curve
      const curve = new Phaser.Curves.Spline(points);
      const curvePoints = curve.getPoints(100);

      const bottomPoints = [
        new Phaser.Math.Vector2(width, height),
        new Phaser.Math.Vector2(0, height)
      ];
      graphics.fillPoints([...curvePoints, ...bottomPoints], true);

      // Animate aurora
      this.scene.tweens.add({
        targets: graphics,
        alpha: 0.15 + i * 0.05,
        duration: 3000 + i * 500,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    }
  }

  /**
   * Create volumetric light rays
   */
  createLightRays(x: number, y: number, color: number = 0xffd700, count: number = 12): void {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const length = 300 + Math.random() * 200;

      const ray = this.scene.add.rectangle(
        x,
        y,
        5,
        length,
        color,
        0.15
      );

      ray.setOrigin(0.5, 0);
      ray.setRotation(angle);
      ray.setBlendMode(Phaser.BlendModes.ADD);
      ray.setDepth(5);

      // Animate ray
      this.scene.tweens.add({
        targets: ray,
        alpha: 0.05,
        scaleX: 0.5,
        duration: 2000 + Math.random() * 1000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
        delay: Math.random() * 1000
      });

      // Rotate rays slowly
      this.scene.tweens.add({
        targets: ray,
        rotation: angle + Math.PI * 2,
        duration: 20000,
        repeat: -1,
        ease: 'Linear'
      });
    }
  }

  /**
   * Create magical sparkle particles
   */
  createSparkles(x: number, y: number, color: number = 0xffd700, radius: number = 100): Phaser.GameObjects.Particles.ParticleEmitter {
    // Create particle texture
    const graphics = this.scene.add.graphics();
    graphics.fillStyle(0xffffff, 1);
    graphics.fillCircle(4, 4, 4);
    graphics.generateTexture('sparkle', 8, 8);
    graphics.destroy();

    const circle = new Phaser.Geom.Circle(0, 0, radius);
    const emitter = this.scene.add.particles(x, y, 'sparkle', {
      speed: { min: 20, max: 80 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.8, end: 0 },
      alpha: { start: 1, end: 0 },
      tint: color,
      lifespan: 2000,
      frequency: 100,
      blendMode: Phaser.BlendModes.ADD,
      emitZone: { type: 'random', source: circle as any }
    });

    emitter.setDepth(100);
    return emitter;
  }

  /**
   * Create energy pulse effect
   */
  createEnergyPulse(x: number, y: number, color: number = 0x00ced1, count: number = 5): void {
    for (let i = 0; i < count; i++) {
      this.scene.time.delayedCall(i * 300, () => {
        const ring = this.scene.add.circle(x, y, 10, color, 0);
        ring.setStrokeStyle(3, color, 1);
        ring.setBlendMode(Phaser.BlendModes.ADD);
        ring.setDepth(50);

        this.scene.tweens.add({
          targets: ring,
          scaleX: 8,
          scaleY: 8,
          alpha: 0,
          duration: 1500,
          ease: 'Cubic.easeOut',
          onComplete: () => ring.destroy()
        });
      });
    }
  }

  /**
   * Create floating orbs
   */
  createFloatingOrbs(count: number = 20, color: number = 0x9370db): Phaser.GameObjects.Group {
    const orbs = this.scene.add.group();

    for (let i = 0; i < count; i++) {
      const x = Phaser.Math.Between(0, this.scene.scale.width);
      const y = Phaser.Math.Between(0, this.scene.scale.height);

      const container = this.scene.add.container(x, y);

      // Outer glow
      const glow = this.scene.add.circle(0, 0, 15, color, 0.2);
      glow.setBlendMode(Phaser.BlendModes.ADD);

      // Inner orb
      const orb = this.scene.add.circle(0, 0, 8, color, 0.6);
      orb.setBlendMode(Phaser.BlendModes.ADD);

      // Core light
      const core = this.scene.add.circle(0, 0, 3, 0xffffff, 0.8);
      core.setBlendMode(Phaser.BlendModes.ADD);

      container.add([glow, orb, core]);
      container.setDepth(15);

      orbs.add(container);

      // Floating animation
      this.scene.tweens.add({
        targets: container,
        y: y + Phaser.Math.Between(-50, 50),
        x: x + Phaser.Math.Between(-30, 30),
        duration: 3000 + Math.random() * 2000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
        delay: Math.random() * 2000
      });

      // Pulsing animation
      this.scene.tweens.add({
        targets: [glow, orb],
        scale: 1.3,
        alpha: 0.8,
        duration: 2000 + Math.random() * 1000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    }

    return orbs;
  }

  /**
   * Create depth-based parallax stars
   */
  createParallaxStars(layerCount: number = 3): void {
    for (let layer = 0; layer < layerCount; layer++) {
      const depth = layer - 20;
      const count = 50 - layer * 10;
      const speed = (layer + 1) * 0.2;

      for (let i = 0; i < count; i++) {
        const x = Phaser.Math.Between(0, this.scene.scale.width);
        const y = Phaser.Math.Between(0, this.scene.scale.height);
        const size = 1 + (layerCount - layer) * 0.5;
        const alpha = 0.3 + (layerCount - layer) * 0.2;

        const star = this.scene.add.circle(x, y, size, 0xffffff, alpha);
        star.setDepth(depth);
        star.setBlendMode(Phaser.BlendModes.ADD);

        // Twinkling
        this.scene.tweens.add({
          targets: star,
          alpha: alpha * 0.3,
          duration: 1000 + Math.random() * 2000,
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 2000
        });

        // Parallax movement (very subtle)
        this.scene.tweens.add({
          targets: star,
          x: x + 20,
          duration: 10000 / speed,
          repeat: -1,
          yoyo: true,
          ease: 'Linear'
        });
      }
    }
  }

  /**
   * Create emotion-colored glow overlay
   */
  createEmotionGlow(x: number, y: number, color: number, radius: number = 400): Phaser.GameObjects.Graphics {
    const graphics = this.scene.add.graphics();
    graphics.setDepth(2);

    // Radial gradient glow
    graphics.fillGradientStyle(
      color, color, color, color,
      0.3, 0.2, 0.1, 0
    );

    graphics.fillCircle(x, y, radius);
    graphics.setBlendMode(Phaser.BlendModes.ADD);

    // Pulsing animation
    this.scene.tweens.add({
      targets: graphics,
      alpha: 0.5,
      scale: 1.1,
      duration: 3000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    return graphics;
  }

  /**
   * Create mystical portal effect
   */
  createPortalEffect(x: number, y: number, color: number = 0x9370db): void {
    // Outer rings
    for (let i = 0; i < 5; i++) {
      const ring = this.scene.add.circle(x, y, 100 + i * 30, color, 0);
      ring.setStrokeStyle(2, color, 0.3 - i * 0.05);
      ring.setBlendMode(Phaser.BlendModes.ADD);
      ring.setDepth(25);

      this.scene.tweens.add({
        targets: ring,
        scaleX: 1.2,
        scaleY: 1.2,
        alpha: 0,
        duration: 2000,
        repeat: -1,
        delay: i * 400,
        ease: 'Cubic.easeOut'
      });
    }

    // Center glow
    const glow = this.scene.add.circle(x, y, 80, color, 0.4);
    glow.setBlendMode(Phaser.BlendModes.ADD);
    glow.setDepth(25);

    this.scene.tweens.add({
      targets: glow,
      scale: 1.3,
      alpha: 0.2,
      duration: 1500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    // Particle swirl
    const emitter = this.scene.add.particles(x, y, 'sparkle', {
      speed: 50,
      angle: { min: 0, max: 360 },
      scale: { start: 0.5, end: 0 },
      alpha: { start: 0.8, end: 0 },
      tint: color,
      lifespan: 2000,
      frequency: 50,
      blendMode: Phaser.BlendModes.ADD,
      emitZone: {
        type: 'edge',
        source: new Phaser.Geom.Circle(0, 0, 100),
        quantity: 50
      }
    });

    emitter.setDepth(26);
  }

  /**
   * Create rain effect
   */
  createRainEffect(intensity: number = 100, color: number = 0x00ced1): Phaser.GameObjects.Particles.ParticleEmitter {
    const emitter = this.scene.add.particles(0, -50, 'particle', {
      x: { min: 0, max: this.scene.scale.width },
      y: 0,
      lifespan: 2000,
      speedY: { min: 300, max: 500 },
      speedX: { min: -20, max: 20 },
      scaleX: 0.1,
      scaleY: { min: 2, max: 4 },
      alpha: { start: 0.6, end: 0.3 },
      tint: color,
      frequency: 1000 / intensity,
      blendMode: Phaser.BlendModes.ADD
    });

    emitter.setDepth(150);
    return emitter;
  }

  /**
   * Create firefly swarm
   */
  createFireflies(count: number = 30, color: number = 0xffd700): void {
    for (let i = 0; i < count; i++) {
      const x = Phaser.Math.Between(0, this.scene.scale.width);
      const y = Phaser.Math.Between(0, this.scene.scale.height);

      const firefly = this.scene.add.circle(x, y, 3, color, 0.8);
      firefly.setBlendMode(Phaser.BlendModes.ADD);
      firefly.setDepth(30);

      // Erratic movement
      const moveFirefly = () => {
        const newX = Phaser.Math.Between(0, this.scene.scale.width);
        const newY = Phaser.Math.Between(0, this.scene.scale.height);
        const distance = Phaser.Math.Distance.Between(firefly.x, firefly.y, newX, newY);
        const duration = distance * 10;

        this.scene.tweens.add({
          targets: firefly,
          x: newX,
          y: newY,
          duration,
          ease: 'Sine.easeInOut',
          onComplete: moveFirefly
        });
      };

      moveFirefly();

      // Flickering
      this.scene.tweens.add({
        targets: firefly,
        alpha: 0.2,
        scale: 0.5,
        duration: 500 + Math.random() * 1000,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    }
  }

  /**
   * Create screen flash effect
   */
  flashScreen(color: number = 0xffffff, duration: number = 300): void {
    const flash = this.scene.add.rectangle(
      0, 0,
      this.scene.scale.width,
      this.scene.scale.height,
      color,
      0.6
    );
    flash.setOrigin(0);
    flash.setDepth(200);

    this.scene.tweens.add({
      targets: flash,
      alpha: 0,
      duration,
      onComplete: () => flash.destroy()
    });
  }

  /**
   * Create vignette effect
   */
  createVignette(intensity: number = 0.6): Phaser.GameObjects.Graphics {
    const graphics = this.scene.add.graphics();
    graphics.setDepth(180);

    const width = this.scene.scale.width;
    const height = this.scene.scale.height;

    graphics.fillGradientStyle(
      0x000000, 0x000000, 0x000000, 0x000000,
      0, intensity, intensity, 0
    );

    graphics.fillRect(0, 0, width, height);
    graphics.setBlendMode(Phaser.BlendModes.MULTIPLY);

    return graphics;
  }
}
