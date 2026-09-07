import { test, expect } from '@playwright/test';

const loginBtn = '[href="/login"]';

test.describe('Automation Exercise Tests', () => {
    test('TC1: Verify sample domain', async ({ page }) => {
        await page.goto('https://www.automationexercise.com/');
        await expect(page).toHaveTitle(/Automation Exercise/);
        await expect(page).toHaveURL('https://www.automationexercise.com/');
    });


    test('TC2: Verify login page', async ({ page }) => {
        await page.goto('https://www.automationexercise.com/');
        await expect(page).toHaveTitle(/Automation Exercise/);
        await expect(page.locator(loginBtn)).toBeVisible();
        await page.click(loginBtn);
        await expect(page).toHaveURL('https://www.automationexercise.com/login');
    });
});