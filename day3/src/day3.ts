import {readFileSync} from 'fs'

class powerConsumption{
    /**
     * 
     * @returns The diagnosticReport from txt file to string
     */
    getDiagnosticReport(){
        const diagnosticReport: string = readFileSync('./dest/input.txt', {encoding: 'UTF-8'})
        return diagnosticReport
    }

    /**
     * This method finds the most common bit per index of the row and adds it to either bitZeroCount or bitOneCount.
     * Iterate again over both arrays to find which counts is higher and push the highest to mostCommonBit string and the lowest to leastCommonBit string.
     * Convert the string of bits to a decimal number and multiple these to get the answer.
     */
    findCommonBit(){
        const diagnosticReport = this.getDiagnosticReport()
        let bitValuePerRow: string[] = diagnosticReport.split('\n')
        let bitZeroCount: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let bitOneCount: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let mostCommonBit: string = ''
        let leastCommonBit: string = ''
        
        // Iterate over every row and add counts to bitZeroCount or bitOneCount
        for (let i = 0; i < bitValuePerRow.length; i++){
            let bitPerBit: string[] = bitValuePerRow[i].split('')
            for(let i = 0; i < bitPerBit.length; i++){
                if (bitPerBit[i] == '0'){
                    bitZeroCount[i] += 1
                }
                else if(bitPerBit[i] == '1'){
                    bitOneCount[i] += 1
                }
            }
        }

        // Iterate over the array with the counts and push the most common and least common bit to mostCommonBit and leastCommonBit.
        for (let i = 0; i < bitZeroCount.length; i++){
            if (bitZeroCount[i] > bitOneCount[i]){
                mostCommonBit += 0
                leastCommonBit += 1
            }
            else{
                mostCommonBit += 1
                leastCommonBit += 0
            }
        }

        // Convert the string of bits to a decimal number
        const decimalMostComBit: number = parseInt(mostCommonBit, 2)
        const decimalLeastComBit: number = parseInt(leastCommonBit, 2)
        const totalPowerConsumption: number = decimalMostComBit * decimalLeastComBit
        console.log(totalPowerConsumption)
    }
}

let submarine = new powerConsumption()
submarine.getDiagnosticReport()
submarine.findCommonBit()