const moment = require('moment');
const SheetManager = require('../hooks/shared/sfeirEventSheet/sheetManager');

describe("SheetManager", () => {
  it("can initialize from sheet", () => {

    const mocks = require('./mocks');
    const sheetOne = mocks.sheetOne;

    const sheetManager = new SheetManager(sheetOne);

    expect(sheetManager.initialSheet).toBe(sheetOne);
  });
});