const moment = require('moment');

const mockDate = moment('2018-03-30');
exports.mockDate = mockDate;

const mockName = 'mock name';
exports.mockName = mockName;

const mockType = 'mock type';
exports.mockType = mockType;

const mockCity = 'mock Paris';
exports.mockCity = mockCity;

const rowOne = [
    '2018-03-30',
    mockDate,
    mockName,
    null,
    mockType,
    mockCity
];
exports.rowOne = rowOne;

const sheetOne = [
    rowOne,
    rowOne,
    rowOne
];
exports.sheetOne = sheetOne;