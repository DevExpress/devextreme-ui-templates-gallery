/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { Selector, RequestLogger } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { getPostfix, toggleCommonConfiguration } from './utils';
import { timeoutSecond } from '../config.js';

const project = process.env.project;
const screenMode = process.env.screenMode;
const BASE_URL = `http://localhost:${process.env.port}/#/analytics-sales-report`;
const requestLogger = RequestLogger();

fixture`Analytics Sales Report`;

[false, true].forEach((embedded) => {
  test(`Analytics Sales Report (${project}, embed=${embedded}, ${screenMode})`, async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
    await toggleCommonConfiguration(t, BASE_URL, embedded, () => { },
      timeoutSecond, requestLogger);
    await t.expect(Selector(`body.dx-screenMode-${screenMode}`).count).eql(1);
    await takeScreenshot(`analytics-sales-report-month${getPostfix(embedded)}`, 'body');

    const isPeriodSelectorBoxVisible = screenMode === 'desktop';
    if (isPeriodSelectorBoxVisible) {
      await t.click(Selector('.sales-filter .dx-dropdownbutton'));

      await t.click(Selector('.dx-dropdownbutton-popup-wrapper .dx-list .dx-list-item').nth(0));
      await t.wait(timeoutSecond);
      await takeScreenshot(`analytics-sales-report-day${getPostfix(embedded)}`, 'body');
    }

    await t.drag(Selector('.slider').nth(1), -100, 0, { offsetX: 10, offsetY: 10 });
    await t.drag(Selector('.slider').nth(0), 100, 0, { offsetX: 10, offsetY: 10 });
    await t.wait(timeoutSecond);

    if (isPeriodSelectorBoxVisible) {
      await takeScreenshot(`analytics-sales-report-day-range${getPostfix(embedded)}`, 'body');
      await t.click(Selector('.sales-filter .dx-dropdownbutton'));
      await t.click(Selector('.dx-dropdownbutton-popup-wrapper .dx-list .dx-list-item').nth(1));
      await t.wait(timeoutSecond);
    }

    await takeScreenshot(`analytics-sales-report-month-range${getPostfix(embedded)}`, 'body');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  }).requestHooks(requestLogger);
});
