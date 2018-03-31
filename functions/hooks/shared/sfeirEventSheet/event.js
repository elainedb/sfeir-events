let moment = require('moment');

/**
 * Column represent the index from the sheet
 * (column A correspond to the 0 in the matrix)
 */
const BEGIN_DATE_COLUMN_INDEX = 0;
const EVENT_NAME_COLUMN_INDEX = 2;
const EVENT_TYPE_COLUMN_INDEX = 4;
const EVENT_CITY_COLUMN_INDEX = 5;

module.exports = class {

    constructor(sheetRow) {
        this.beginDate = this.initFromDate(sheetRow[BEGIN_DATE_COLUMN_INDEX]);
        this.name = sheetRow[EVENT_NAME_COLUMN_INDEX];
        /**
         * type correspond to ...
         * <list of bot entites>
         */
        this.type = sheetRow[EVENT_TYPE_COLUMN_INDEX];
        this.city = sheetRow[EVENT_CITY_COLUMN_INDEX];
    }

    initFromDate(dateAsString) {
        return moment(dateAsString, 'YYYY-MM-DD');
    }

    static getBeginDateIndex() {
        return BEGIN_DATE_COLUMN_INDEX;
    }

    static getEndDateIndex() {
        return END_DATE_COLUMN_INDEX;
    }

    static getNameIndex() {
        return EVENT_NAME_COLUMN_INDEX;
    }

    static getTypeIndex() {
        return EVENT_TYPE_COLUMN_INDEX;
    }

    static getCityIndex() {
        return EVENT_CITY_COLUMN_INDEX;
    }
};