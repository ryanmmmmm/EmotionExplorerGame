/**
 * Full Game Flow Test - Test complete game journey with screenshots
 */
import { test, expect } from '@playwright/test';

test('complete game flow with screenshots', async ({ page }) => {
  // Track console errors
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' &&
        !msg.text().includes('Failed to load resource') &&
        !msg.text().includes('VITE_CLAUDE_API_KEY') &&
        !msg.text().includes('React DevTools')) {
      errors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    errors.push(`Page error: ${err.message}`);
  });

  console.log('🎮 Starting game flow test...');

  // 1. Load game - Main Menu
  await page.goto('http://localhost:3003');
  await page.waitForSelector('canvas', { timeout: 15000 });
  await page.waitForTimeout(3000); // Wait for scene to fully render

  console.log('✅ Main Menu loaded');
  await page.screenshot({
    path: 'tests/screenshots/01-main-menu.png',
    fullPage: true
  });

  // Check for errors after main menu
  if (errors.length > 0) {
    console.error('❌ Errors detected at Main Menu:', errors);
    throw new Error(`Found ${errors.length} errors at Main Menu`);
  }

  // 2. Click "New Game" button
  const canvas = page.locator('canvas');

  // Click on "New Game" button (approximate position)
  await canvas.click({ position: { x: 960, y: 600 } });
  await page.waitForTimeout(2000);

  console.log('✅ Clicked New Game');
  await page.screenshot({
    path: 'tests/screenshots/02-age-selection.png',
    fullPage: true
  });

  // Check for errors after age selection
  if (errors.length > 0) {
    console.error('❌ Errors detected at Age Selection:', errors);
    throw new Error(`Found ${errors.length} errors at Age Selection`);
  }

  // 3. Select age bracket (14-15)
  await page.waitForTimeout(1000);
  await canvas.click({ position: { x: 960, y: 520 } }); // Second age bracket
  await page.waitForTimeout(2000);

  console.log('✅ Selected age bracket');
  await page.screenshot({
    path: 'tests/screenshots/03-character-creation.png',
    fullPage: true
  });

  // Check for errors after character creation load
  if (errors.length > 0) {
    console.error('❌ Errors detected at Character Creation:', errors);
    throw new Error(`Found ${errors.length} errors at Character Creation: ${errors.join(', ')}`);
  }

  // 4. Wait a bit for character creation to stabilize
  await page.waitForTimeout(2000);

  console.log('✅ Character Creation scene loaded');

  // 5. Try clicking on a customization option
  await canvas.click({ position: { x: 200, y: 400 } }); // Click body type selector
  await page.waitForTimeout(1000);

  await page.screenshot({
    path: 'tests/screenshots/04-customization-interaction.png',
    fullPage: true
  });

  // Check for errors after interaction
  if (errors.length > 0) {
    console.error('❌ Errors detected during customization:', errors);
    throw new Error(`Found ${errors.length} errors during customization: ${errors.join(', ')}`);
  }

  // 6. Enter player name via prompt (we'll skip this for automated test)
  // and complete character creation
  await canvas.click({ position: { x: 960, y: 950 } }); // Click Complete button area
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'tests/screenshots/05-hub-or-next-scene.png',
    fullPage: true
  });

  console.log('✅ Character creation completed');

  // Final error check
  if (errors.length > 0) {
    console.error('❌ Errors detected during test:', errors);
    throw new Error(`Found ${errors.length} total errors: ${errors.join(', ')}`);
  }

  console.log('✅ ✅ ✅ ALL TESTS PASSED - NO ERRORS! ✅ ✅ ✅');
  expect(errors).toHaveLength(0);
});

test('character creation scene loads without errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' &&
        !msg.text().includes('Failed to load resource') &&
        !msg.text().includes('VITE_CLAUDE_API_KEY') &&
        !msg.text().includes('React DevTools')) {
      errors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    errors.push(`Page error: ${err.message}`);
  });

  await page.goto('http://localhost:3003');
  await page.waitForSelector('canvas', { timeout: 15000 });

  const canvas = page.locator('canvas');

  // Navigate to character creation
  await page.waitForTimeout(3000);
  await canvas.click({ position: { x: 960, y: 600 } }); // New Game
  await page.waitForTimeout(2000);
  await canvas.click({ position: { x: 960, y: 520 } }); // Age selection
  await page.waitForTimeout(3000);

  // Verify no errors
  console.log('Checking for errors...');
  if (errors.length > 0) {
    console.error('Errors found:', errors);
  }

  expect(errors).toHaveLength(0);
  console.log('✅ Character Creation loads without errors!');
});
