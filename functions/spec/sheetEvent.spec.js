const moment = require('moment');
const SheetEvent = require('../hooks/shared/sfeirEventSheet/sheetEvent');

describe('SheetEvent', () => {

    const mocks = require('./mocks');

    it('can initialize from a sheet\' row', () => {
        const sheetEvent = new SheetEvent(mocks.rowOne);

        expect(sheetEvent.beginDate.isSame(mocks.mockDate)).toBeTruthy();
        expect(sheetEvent.endDate.isSame(mocks.mockDate)).toBeTruthy();
        expect(sheetEvent.name).toEqual(mocks.mockName);
        expect(sheetEvent.type).toEqual(mocks.mockType);
        expect(sheetEvent.city).toEqual(mocks.mockCity);
    });

    it('should filter as generic', () => {

    });
});