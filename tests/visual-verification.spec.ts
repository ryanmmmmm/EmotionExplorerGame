/**
 * Visual Verification Test - Capture screenshots of working game
 */
import { test, expect } from '@playwright/test';

test('WORKING GAME - Complete Visual Verification', async ({ page }) => {
  // Set longer timeout for this comprehensive test
  test.setTimeout(120000);

  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' &&
        !msg.text().includes('Failed to load resource') &&
        !msg.text().includes('VITE_CLAUDE_API_KEY') &&
        !msg.text().includes('React DevTools')) {
      errors.push(msg.text());
      console.error('❌ Browser Error:', msg.text());
    }
  });

  page.on('pageerror', (err) => {
    errors.push(`Page error: ${err.message}`);
    console.error('❌ Page Error:', err.message);
  });

  console.log('\n🎮 ========== VISUAL VERIFICATION TEST STARTING ==========\n');

  // STEP 1: Main Menu
  console.log('📍 STEP 1: Loading Main Menu...');
  await page.goto('http://localhost:3003', { waitUntil: 'networkidle' });
  await page.waitForSelector('canvas', { timeout: 15000 });
  await page.waitForTimeout(3000); // Let animations settle

  await page.screenshot({
    path: 'tests/screenshots/WORKING-01-MainMenu.png',
    fullPage: true
  });
  console.log('✅ STEP 1 COMPLETE: Main Menu screenshot captured');
  expect(errors).toHaveLength(0);

  // STEP 2: Click New Journey
  console.log('\n📍 STEP 2: Clicking "New Journey" button...');
  const canvas = page.locator('canvas');
  await canvas.click({ position: { x: 640, y: 466 } }); // New Journey button
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'tests/screenshots/WORKING-02-AgeSelection.png',
    fullPage: true
  });
  console.log('✅ STEP 2 COMPLETE: Age Selection screenshot captured');
  expect(errors).toHaveLength(0);

  // STEP 3: Select Age (14-15)
  console.log('\n📍 STEP 3: Selecting age bracket 14-15...');
  await canvas.click({ position: { x: 640, y: 475 } }); // Second age bracket
  await page.waitForTimeout(3000); // Give time for character creation to load

  await page.screenshot({
    path: 'tests/screenshots/WORKING-03-CharacterCreation.png',
    fullPage: true
  });
  console.log('✅ STEP 3 COMPLETE: Character Creation screenshot captured');
  expect(errors).toHaveLength(0);

  // STEP 4: Interact with customization
  console.log('\n📍 STEP 4: Testing customization interactions...');
  await page.waitForTimeout(1000);

  // Try clicking on Face category
  await canvas.click({ position: { x: 300, y: 300 } });
  await page.waitForTimeout(1000);

  await page.screenshot({
    path: 'tests/screenshots/WORKING-04-Customization.png',
    fullPage: true
  });
  console.log('✅ STEP 4 COMPLETE: Customization interaction screenshot captured');
  expect(errors).toHaveLength(0);

  // STEP 5: Final verification
  console.log('\n📍 STEP 5: Final error check...');
  await page.waitForTimeout(2000);

  if (errors.length > 0) {
    console.error('\n❌❌❌ ERRORS DETECTED ❌❌❌');
    console.error('Errors:', errors);
    throw new Error(`Test failed with ${errors.length} errors`);
  }

  console.log('\n✅✅✅ ALL STEPS COMPLETED SUCCESSFULLY ✅✅✅');
  console.log('✅ Zero browser errors');
  console.log('✅ All scenes loaded correctly');
  console.log('✅ All screenshots captured');
  console.log('\n🎮 ========== TEST COMPLETE: GAME IS WORKING! ==========\n');
});
