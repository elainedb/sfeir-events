const moment = require('moment');
const event = require('./event');

module.exports = class {
    /**
     * @param {any[][]} sheetMatrix a matrix extract from google sheet api
     */
    constructor(sheetMatrix) {
        /**
         * sheet formed as any[][]
         */
        this.initialSheet = sheetMatrix;
        /**
         * save search results to improve performances
         */
        this.identifyiedSheetEvent = {};
    }

    sortByDate(list) {
        return list
        .map(expectedDate => {
            if (expectedDate instanceof moment) {
                return expectedDate;
            } else if (typeof expectedDate === 'number') {
                return moment(expectedDate, 'YYYY-MM-DD');
            } else return void 0;
        })
        // remove unknown values
        .filter((date) => date)
        .sort((a, b) => {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    getEventByDate() {
        return this.initialSheet[event.getBeginDateIndex()].filter(filterFn)
    }
}