const assert = require('chai').assert;
const {selectors} = require('../utils/selectors');

describe('basic tests', () => {
    it('entity should be saved', async () => {
        const expenseField = $(`android=${selectors.EXPENSE}`);
        const amountField = $(`android=${selectors.AMAUNT}`);
        const labelField = $(`android=${selectors.LABEL}`);
        const saveBtn = $(`android=${selectors.SAVE}`);
        const layout = $(`android=${selectors.LAYOUT}`);

        // steps
        await expenseField.setValue('milk');
        await amountField.setValue('1000');
        await labelField.setValue('food');
        await saveBtn.click();
        assert.exists(layout);
    });

    it('drop-down should be displayed in statistics', async () => {
        await $("~Statistics").click();
        await browser.pause(2000);
        assert.exists($(`android=${selectors.DROP_DOWN}`));
    });

    it('export button should be displayed in import/export', async () => {
        await $("~Import/Export").click();
        await browser.pause(2000);
        assert.exists($(`android=${selectors.EXPORT_BTN}`));
    });
});