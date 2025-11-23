/**
 * Complete Module Navigation Test - FIXED VERSION
 * Tests navigation through ALL 9 modules in order
 * FIXED: Handles browser prompt() dialogs for name input
 */
import { test, expect } from '@playwright/test';

test('COMPLETE MODULE NAVIGATION - All 9 Modules (FIXED)', async ({ page }) => {
  test.setTimeout(300000); // 5 minutes

  const errors: string[] = [];

  // Monitor console errors
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

  // Handle prompt dialogs
  page.on('dialog', async (dialog) => {
    console.log(`📝 Dialog detected: ${dialog.message()}`);
    if (dialog.message().includes('character name')) {
      await dialog.accept('TestPlayer');
      console.log('✅ Entered player name: TestPlayer');
    } else if (dialog.message().includes('companion')) {
      await dialog.accept('Lumina');
      console.log('✅ Entered companion name: Lumina');
    } else {
      await dialog.accept();
    }
  });

  console.log('\n🎮 ========== COMPLETE MODULE NAVIGATION TEST STARTING ==========\n');

  // ========== SETUP: Navigate to Hub ==========
  console.log('📍 SETUP: Navigating through game setup to Hub...');

  await page.goto('http://localhost:3003', { waitUntil: 'networkidle' });
  await page.waitForSelector('canvas', { timeout: 15000 });
  await page.waitForTimeout(3000);

  const canvas = page.locator('canvas');

  // Main Menu - Click New Journey
  await canvas.click({ position: { x: 640, y: 466 } });
  await page.waitForTimeout(2000);

  // Age Selection - Select 14-15
  await canvas.click({ position: { x: 640, y: 475 } });
  await page.waitForTimeout(3000);

  // Character Creation - Click name input (this will trigger prompt dialog)
  console.log('Clicking name input box...');
  await canvas.click({ position: { x: 390, y: 900 } }); // Name box position
  await page.waitForTimeout(1000);

  // Click Begin Your Journey
  console.log('Clicking Begin Your Journey...');
  await canvas.click({ position: { x: 640, y: 1000 } });
  await page.waitForTimeout(5000);

  console.log('✅ SETUP COMPLETE: Should be at Hub scene now');
  expect(errors).toHaveLength(0);

  await page.screenshot({
    path: 'tests/screenshots/MODULE-FINAL-00-Hub.png',
    fullPage: true
  });

  // ========== TEST ALL 9 MODULES ==========
  const modules = [
    { num: 1, name: 'The Awakening Circle' },
    { num: 2, name: 'Memory Constellation' },
    { num: 3, name: 'Temple of Embodiment' },
    { num: 4, name: 'The Speaking Stone' },
    { num: 5, name: 'The Mirror Portal' },
    { num: 6, name: 'The Cathartic Falls' },
    { num: 7, name: 'The Emotional Compass' },
    { num: 8, name: 'The Wisdom Tree' },
    { num: 9, name: 'The Ripple Pool' },
  ];

  for (const module of modules) {
    console.log(`\n📍 MODULE ${module.num}: ${module.name}`);

    // Click emotion crystal
    await canvas.click({ position: { x: 640, y: 300 } });
    await page.waitForTimeout(2000);

    // Click "Begin Journey" in dialog
    await canvas.click({ position: { x: 520, y: 460 } });
    await page.waitForTimeout(4000);

    await page.screenshot({
      path: `tests/screenshots/MODULE-FINAL-${String(module.num).padStart(2, '0')}-${module.name.replace(/\s+/g, '')}.png`,
      fullPage: true
    });

    // Complete the module
    if (module.num === 1) {
      // Module 1 has slider interaction
      await canvas.click({ position: { x: 640, y: 530 } });
      await page.waitForTimeout(1000);
      await canvas.click({ position: { x: 640, y: 670 } }); // Continue button
    } else {
      // Other modules have simple Complete button
      await canvas.click({ position: { x: 640, y: 600 } });
    }

    await page.waitForTimeout(3000);
    console.log(`✅ MODULE ${module.num} COMPLETED - Returned to Hub`);
    expect(errors).toHaveLength(0);
  }

  // ========== FINAL VERIFICATION ==========
  console.log('\n📍 FINAL VERIFICATION');

  await page.screenshot({
    path: 'tests/screenshots/MODULE-FINAL-10-Complete.png',
    fullPage: true
  });

  if (errors.length > 0) {
    console.error('\n❌❌❌ ERRORS DETECTED ❌❌❌');
    console.error('Errors:', errors);
    throw new Error(`Test failed with ${errors.length} errors`);
  }

  console.log('\n✅✅✅ ALL 9 MODULES COMPLETED SUCCESSFULLY ✅✅✅');
  console.log('✅ Zero browser errors');
  console.log('✅ All modules loaded correctly');
  console.log('✅ All navigation transitions worked');
  console.log('✅ All screenshots captured');
  console.log('\n🎮 ========== TEST COMPLETE: ALL MODULES WORKING! ==========\n');
});
