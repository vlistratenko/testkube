import { test, expect } from '@playwright/test';

test.describe('Testkube Documentation', () => {
  test('should display welcome message on Testkube docs page', async ({ page }) => {
    // Navigate to the Testkube documentation page
    await page.goto('https://docs.testkube.io/');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    // Verify that the welcome message is present on the page
    const welcomeText = page.getByText('Welcome to the Testkube Documentation!');
    await expect(welcomeText).toBeVisible();
    
    // Additional verification: check that the text is in the main content area
    await expect(welcomeText).toBeInViewport();
  });

  test('should not contain the word Vitalii anywhere on the page', async ({ page }) => {
    // Navigate to the Testkube documentation page
    await page.goto('https://docs.testkube.io/');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    // Get the entire page content as text
    const pageContent = await page.textContent('body');
    
    // Verify that the word "Vitalii" is not present anywhere on the page
    expect(pageContent).not.toContain('Vitalii');
    
    // Additional verification: check that the word is not present in any case variation
    expect(pageContent?.toLowerCase()).not.toContain('vitalii');
  });
});
