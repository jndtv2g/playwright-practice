import { Page } from '@playwright/test';


export class LoginPage {

    readonly page: Page;

    // readonly headerLoginBtn = '[href="/login"]';
    readonly loginEmailField = '[data-qa="login-email"]';
    readonly loginPasswordField = '[data-qa="login-password"]';

    constructor(page: Page) {
        this.page = page;
    }

}