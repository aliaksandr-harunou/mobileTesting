const selectors = {
    EXPENSE:'new UiSelector().resourceId("com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseName")',
    AMAUNT: 'new UiSelector().resourceId("com.github.vitalliuss.financeanalyzer:id/editTextExpenseAmount")',
    LABEL: 'new UiSelector().resourceId("com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseLabel")',
    SAVE: 'new UiSelector().resourceId("com.github.vitalliuss.financeanalyzer:id/buttonExpenseSave")',
    LAYOUT: 'new UiSelector().className("android.widget.RelativeLayout")',
    DROP_DOWN: 'new UiSelector().resourceId("com.github.vitalliuss.financeanalyzer:id/spinnerChartType")',
    EXPORT_BTN: 'new UiSelector().className("android.widget.Button").text("Export")'
}

module.exports = {selectors};