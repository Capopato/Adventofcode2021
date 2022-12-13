import {readFileSync} from 'fs'

class Day2{
    /**
     * 
     * @returns The data input
     */
    getData = () => {
        const movementInput: string = readFileSync('./dest/input.txt', {encoding: 'UTF-8'})
        return movementInput
    }

    /**
     * 
     * @returns the input splitted on 1. direction (forward, up down) and 2. the amount of movement
     */
    splitData = () => {
        const movementInput: string = this.getData()
        const directionsAndValues: string[] = movementInput.split('\n')
        return directionsAndValues
    }

    /**
     * This method gives the answer. 
     * It sums the values of movements horizontal/vertical and then prints horizontal * vertical
     * 
     */
    multiplyDepthHorizontal = () => {
        let horizontal: number = 0
        let vertical: number = 0

        let directionsAndValues = this.splitData()

        for (let i = 0; i < directionsAndValues.length; i++){

            const movement: string = directionsAndValues[i].split(' ')[0]
            const number: number = Number(directionsAndValues[i].split(' ')[1])

            if (movement == 'forward'){
                horizontal += number
            }
            else if (movement == 'up'){
                vertical -= number
            }
            else if (movement == 'down'){
                vertical += number
            }
        }
        console.log(horizontal * vertical)
    }

    /**
     * This method gives the answer. 
     * It sums the values of movements horizontal/vertical converted to aim to get the total depth.
     * It the prints horizontal value * depth value
     */
    addAim = () => {
        let horizontal: number = 0
        let aim: number = 0
        let depth: number = 0

        let directionsAndValues = this.splitData()

        for (let i = 0; i < directionsAndValues.length; i++){

            const movement: string = directionsAndValues[i].split(' ')[0]
            const number: number = Number(directionsAndValues[i].split(' ')[1])

            if (movement == 'forward'){
                horizontal += number
                depth += number * aim
            }
            else if (movement == 'up'){
                aim -= number
            }
            else if (movement == 'down'){
                aim += number
            }
        }
        console.log(horizontal * depth) // Answer
    }
}

let day2 = new Day2()
// day2.getData()
// day2.splitData()
// day2.multiplyDepthHorizontal()
day2.addAim()