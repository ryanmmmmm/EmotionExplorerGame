/**
 * Manual Visual Test - Headful Browser
 * Run with --headed to see what's actually happening
 */
import { test, expect } from '@playwright/test';

test('Manual Visual Test - See Actual Game State', async ({ page }) => {
  test.setTimeout(600000); // 10 minutes

  const errors: string[] = [];

  page.on('console', (msg) => {
    const text = msg.text();
    console.log(`[BROWSER] ${text}`);
    if (msg.type() === 'error' &&
        !text.includes('Failed to load resource') &&
        !text.includes('VITE_CLAUDE_API_KEY') &&
        !text.includes('React DevTools')) {
      errors.push(text);
    }
  });

  page.on('pageerror', (err) => {
    console.error(`[PAGE ERROR] ${err.message}`);
    errors.push(`Page error: ${err.message}`);
  });

  console.log('\n====================');
  console.log('STEP 1: Load game');
  console.log('====================\n');

  await page.goto('http://localhost:3003');
  await page.waitForSelector('canvas', { timeout: 15000 });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'tests/screenshots/MANUAL-01-MainMenu.png', fullPage: true });
  console.log('✅ Screenshot: Main Menu');

  console.log('\n====================');
  console.log('STEP 2: Click New Journey');
  console.log('====================\n');

  const canvas = page.locator('canvas');
  await canvas.click({ position: { x: 640, y: 466 }, force: true });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: 'tests/screenshots/MANUAL-02-AgeSelection.png', fullPage: true });
  console.log('✅ Screenshot: Age Selection');

  console.log('\n====================');
  console.log('STEP 3: Select Age 14-15');
  console.log('====================\n');

  await canvas.click({ position: { x: 640, y: 475 }, force: true });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'tests/screenshots/MANUAL-03-CharacterCreation.png', fullPage: true });
  console.log('✅ Screenshot: Character Creation');

  console.log('\n====================');
  console.log('STEP 4: Check current Phaser scene');
  console.log('====================\n');

  const currentScene = await page.evaluate(() => {
    const game = (window as any).game;
    if (game && game.scene && game.scene.scenes) {
      const activeScenes = game.scene.scenes
        .filter((s: any) => s.scene.isActive())
        .map((s: any) => s.scene.key);
      return activeScenes;
    }
    return ['No game found'];
  });
  console.log('Active Phaser scenes:', currentScene);

  console.log('\n====================');
  console.log('STEP 5: Inject name and check');
  console.log('====================\n');

  const injectionResult = await page.evaluate(() => {
    const game = (window as any).game;
    if (game && game.scene && game.scene.scenes) {
      const charScene = game.scene.scenes.find((s: any) =>
        s.scene.key === 'CharacterCreationScene' && s.scene.isActive()
      );
      if (charScene) {
        console.log('Found CharacterCreationScene');
        (charScene as any).playerName = 'TestPlayer';
        if ((charScene as any).nameText) {
          (charScene as any).nameText.setText('TestPlayer').setAlpha(1);
        }
        return {
          success: true,
          playerName: (charScene as any).playerName,
          hasNameText: !!(charScene as any).nameText
        };
      }
    }
    return { success: false, error: 'Scene not found' };
  });
  console.log('Injection result:', injectionResult);
  await page.waitForTimeout(2000);

  console.log('\n====================');
  console.log('STEP 6: Click Begin Your Journey');
  console.log('====================\n');

  await canvas.click({ position: { x: 640, y: 1000 }, force: true });
  await page.waitForTimeout(8000);
  await page.screenshot({ path: 'tests/screenshots/MANUAL-04-AfterBeginJourney.png', fullPage: true });
  console.log('✅ Screenshot: After Begin Journey');

  const sceneAfterClick = await page.evaluate(() => {
    const game = (window as any).game;
    if (game && game.scene && game.scene.scenes) {
      return game.scene.scenes
        .filter((s: any) => s.scene.isActive())
        .map((s: any) => s.scene.key);
    }
    return [];
  });
  console.log('Active scenes after Begin Journey:', sceneAfterClick);

  console.log('\n====================');
  console.log('Test paused - check screenshots');
  console.log('====================\n');

  console.log('Errors detected:', errors.length);
  if (errors.length > 0) {
    console.error('Errors:', errors);
  }

  expect(errors).toHaveLength(0);
});
