/**
 * Debug Navigation Test
 * Step-by-step debugging to find correct navigation flow
 */
import { test, expect } from '@playwright/test';

test('Debug Navigation Flow', async ({ page }) => {
  test.setTimeout(180000);

  await page.goto('http://localhost:3003', { waitUntil: 'networkidle' });
  await page.waitForSelector('canvas', { timeout: 15000 });
  await page.waitForTimeout(3000);

  console.log('\n📍 STEP 1: Main Menu');
  await page.screenshot({ path: 'tests/screenshots/DEBUG-01-MainMenu.png', fullPage: true });

  // Click New Journey
  const canvas = page.locator('canvas');
  await canvas.click({ position: { x: 640, y: 466 } });
  await page.waitForTimeout(3000);

  console.log('\n📍 STEP 2: Age Selection');
  await page.screenshot({ path: 'tests/screenshots/DEBUG-02-AgeSelection.png', fullPage: true });

  // Select Age
  await canvas.click({ position: { x: 640, y: 475 } });
  await page.waitForTimeout(4000);

  console.log('\n📍 STEP 3: Character Creation - Initial');
  await page.screenshot({ path: 'tests/screenshots/DEBUG-03-CharCreation-Initial.png', fullPage: true });

  // Try to find and fill the name input using DOM
  console.log('Attempting to fill name using DOM input...');

  // Check if there's an HTML input element
  const inputElements = await page.$$('input[type="text"]');
  console.log(`Found ${inputElements.length} text input elements`);

  if (inputElements.length > 0) {
    await inputElements[0].fill('TestPlayer');
    await page.waitForTimeout(1000);
    console.log('✅ Filled name via DOM input');
  } else {
    // Try clicking the canvas name input area and typing
    console.log('No DOM input found, trying canvas click...');
    await canvas.click({ position: { x: 472, y: 599 } });
    await page.waitForTimeout(500);
    await page.keyboard.type('TestPlayer');
    await page.waitForTimeout(500);
    console.log('✅ Typed name via keyboard');
  }

  await page.screenshot({ path: 'tests/screenshots/DEBUG-04-CharCreation-NameFilled.png', fullPage: true });

  // Click Begin Your Journey button
  console.log('Clicking Begin Your Journey button...');
  await canvas.click({ position: { x: 640, y: 666 } });
  await page.waitForTimeout(5000);

  console.log('\n📍 STEP 4: After Begin Journey Click');
  await page.screenshot({ path: 'tests/screenshots/DEBUG-05-AfterBeginJourney.png', fullPage: true });

  // Wait longer for transition
  await page.waitForTimeout(3000);

  console.log('\n📍 STEP 5: Should be at Hub now');
  await page.screenshot({ path: 'tests/screenshots/DEBUG-06-Hub.png', fullPage: true });

  // Try clicking an emotion crystal
  console.log('Clicking emotion crystal...');
  await canvas.click({ position: { x: 640, y: 300 } });
  await page.waitForTimeout(3000);

  console.log('\n📍 STEP 6: After Emotion Click');
  await page.screenshot({ path: 'tests/screenshots/DEBUG-07-EmotionDialog.png', fullPage: true });

  // Try clicking Begin Journey in the dialog
  console.log('Clicking Begin Journey in dialog...');
  await canvas.click({ position: { x: 520, y: 460 } });
  await page.waitForTimeout(4000);

  console.log('\n📍 STEP 7: Should be in Module 1');
  await page.screenshot({ path: 'tests/screenshots/DEBUG-08-Module1.png', fullPage: true });

  console.log('\n✅ Debug test complete - check screenshots to see where navigation breaks');
});
