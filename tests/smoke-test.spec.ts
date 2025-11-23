/**
 * Smoke Test - Verify game loads without errors
 */
import { test, expect } from '@playwright/test';

test('game loads and initializes without errors', async ({ page }) => {
  // Listen for console errors
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  // Listen for page errors
  page.on('pageerror', (err) => {
    errors.push(err.message);
  });

  // Navigate to the game
  await page.goto('http://localhost:3000');

  // Wait for Phaser game to initialize
  await page.waitForSelector('#phaser-game-container', { timeout: 10000 });

  // Check for critical errors
  expect(errors.filter(e =>
    !e.includes('Failed to load resource') && // Ignore resource loading warnings
    !e.includes('VITE_CLAUDE_API_KEY') // Ignore API key warnings for test
  )).toHaveLength(0);

  // Verify game container exists
  const gameContainer = await page.locator('#phaser-game-container');
  await expect(gameContainer).toBeVisible();

  // Verify Phaser canvas is rendered
  const canvas = await page.locator('canvas');
  await expect(canvas).toBeVisible();

  console.log('✅ Game loaded successfully without critical errors');
});

test('main menu scene renders', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Wait for game to load
  await page.waitForSelector('canvas', { timeout: 10000 });

  // Give Phaser a moment to render the scene
  await page.waitForTimeout(2000);

  // Take a screenshot for visual verification
  await page.screenshot({ path: 'tests/screenshots/main-menu.png', fullPage: true });

  console.log('✅ Main menu scene rendered');
});
