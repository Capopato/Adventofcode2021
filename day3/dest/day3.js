"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class powerConsumption {
    /**
     *
     * @returns The diagnosticReport from txt file to string
     */
    getDiagnosticReport() {
        const diagnosticReport = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: 'UTF-8' });
        return diagnosticReport;
    }
    /**
     * This method finds the most common bit per index of the row and adds it to either bitZeroCount or bitOneCount.
     * Iterate again over both arrays to find which counts is higher and push the highest to mostCommonBit string and the lowest to leastCommonBit string.
     * Convert the string of bits to a decimal number and multiple these to get the answer.
     */
    findCommonBit() {
        const diagnosticReport = this.getDiagnosticReport();
        let bitValuePerRow = diagnosticReport.split('\n');
        let bitZeroCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let bitOneCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let mostCommonBit = '';
        let leastCommonBit = '';
        // Iterate over every row and add counts to bitZeroCount or bitOneCount
        for (let i = 0; i < bitValuePerRow.length; i++) {
            let bitPerBit = bitValuePerRow[i].split('');
            for (let i = 0; i < bitPerBit.length; i++) {
                if (bitPerBit[i] == '0') {
                    bitZeroCount[i] += 1;
                }
                else if (bitPerBit[i] == '1') {
                    bitOneCount[i] += 1;
                }
            }
        }
        // Iterate over the array with the counts and push the most common and least common bit to mostCommonBit and leastCommonBit.
        for (let i = 0; i < bitZeroCount.length; i++) {
            if (bitZeroCount[i] > bitOneCount[i]) {
                mostCommonBit += 0;
                leastCommonBit += 1;
            }
            else {
                mostCommonBit += 1;
                leastCommonBit += 0;
            }
        }
        // Convert the string of bits to a decimal number
        const decimalMostComBit = parseInt(mostCommonBit, 2);
        const decimalLeastComBit = parseInt(leastCommonBit, 2);
        const totalPowerConsumption = decimalMostComBit * decimalLeastComBit;
        console.log(totalPowerConsumption);
    }
}
let submarine = new powerConsumption();
submarine.getDiagnosticReport();
submarine.findCommonBit();
