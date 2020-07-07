'use strict';

function leftJoin(lTable, rTable) {

    let tableResults = [];

    let leftSide = Object.keys(lTable);
    let rightSide = Object.keys(rTable);

    for (let i = 0; i < leftSide.length; i++) {

        if (rightSide.includes(leftSide[i])) {
            tableResults.push([leftSide[i], lTable[leftSide[i]], rTable[leftSide[i]]])
        } else {
            tableResults.push([leftSide[i], lTable[leftSide[i]], null])
        }
    }
    return tableResults;
}

module.exports = leftJoin;