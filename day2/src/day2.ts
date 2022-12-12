import {readFileSync} from 'fs'

class Day2{
    getData = () => {
        let string: string = readFileSync('./dest/input.txt', {encoding: 'UTF-8'})
        return string
    }

    splitData = () => {
        let string: string = this.getData()
        let splitString: string[] = string.split('\n')
        return splitString
    }

    multiplyDepthHorizontal = () => {
        let horizontal: number = 0
        let vertical: number = 0

        let splitString = this.splitData()

        for (let i = 0; i < splitString.length; i++){

            const movement: string = splitString[i].split(' ')[0]
            const number: number = Number(splitString[i].split(' ')[1])

            if (movement == 'forward'){
                horizontal += number
            }
            else if (movement == 'up'){
                vertical -= number
            }
            else if (movement == 'down'){
                vertical += number
            }
        }§
        console.log(horizontal * vertical) // Answer
    }

    addAim = () => {
        let horizontal: number = 0
        let aim: number = 0
        let depth: number = 0

        let splitString = this.splitData()

        for (let i = 0; i < splitString.length; i++){

            const movement: string = splitString[i].split(' ')[0]
            const number: number = Number(splitString[i].split(' ')[1])

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
        // console.log(horizontal)
        // console.log(depth)
        console.log(horizontal * depth) // Answer

    }
}


let day2 = new Day2()
// day2.getData()
// day2.splitData()
// day2.multiplyDepthHorizontal()
day2.addAim()