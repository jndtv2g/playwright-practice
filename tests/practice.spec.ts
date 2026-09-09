import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const headerLoginBtn = '[href="/login"]';

test.describe('Automation Exercise Tests', () => {

    test('TC1: Verify sample domain', async ({ page }) => {

        await page.goto('https://www.automationexercise.com/');
        await expect(page).toHaveTitle(/Automation Exercise/);
        await expect(page).toHaveURL('https://www.automationexercise.com/');
    });


    test('TC2: Verify login page', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await page.goto('https://www.automationexercise.com/');
        await expect(page).toHaveTitle(/Automation Exercise/);
        await expect(page.locator(headerLoginBtn)).toBeVisible();
        await page.click(headerLoginBtn);
        await expect(page).toHaveURL('https://www.automationexercise.com/login');

        await expect(page.locator(loginPage.loginEmailField)).toBeVisible();
        await expect(page.locator(loginPage.loginPasswordField)).toBeVisible();
    });


    test('TC3: Verify valid login credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await page.goto('https://www.automationexercise.com/');
        await expect(page).toHaveTitle(/Automation Exercise/);
        await expect(page.locator(headerLoginBtn)).toBeVisible();
        await page.click(headerLoginBtn);
        await expect(page).toHaveURL('https://www.automationexercise.com/login');


        await page.fill(loginPage.loginEmailField, 'test@abc.com');
        await page.fill(loginPage.loginPasswordField, 'password');
        await page.click('[data-qa="login-button"]');

    });



});