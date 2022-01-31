const selectors = require('../utils/selectors');
const EC = protractor.ExpectedConditions;

describe('Onliner tests', () => {


    it('forum should be opened', async () => {
        await browser.get("https://www.onliner.by/");
        const humb = element(by.css(selectors.HUMBURGER.selector));
        await humb.click();
        const forum = element(by.css(selectors.FORUM.selector));
        await forum.click();
        const forumTitle = element(by.css(selectors.FORUM_TITLE.selector));
        await browser.wait(EC.visibilityOf(forumTitle), 10000);
        let header = await forumTitle.getText();
        expect(header).toEqual('Форум');
    });

    it('currency amount should be less than 3 BYN', async () => {
        await browser.get("https://www.onliner.by/");
        const humb = element(by.css(selectors.HUMBURGER.selector));
        await humb.click();
        const currency_amount = await element(by.xpath(selectors.CURRENCY_AMOUNT.selector)).getText();
        const slicedCurrencyAmount = currency_amount.slice(2);
        expect(parseFloat(slicedCurrencyAmount)).toBeLessThan(3);
    });

    it('degrees should be integer', async () => {
        const degree = await element(by.css(selectors.WEATHER.selector)).getText();
        expect(Number.isInteger(parseFloat(degree))).toBeTruthy();
    });
});