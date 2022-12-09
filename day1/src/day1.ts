import {readFileSync} from 'fs'

class Depth{
    private numArr?: Number[] = []

    getData = () => {
        this.numArr = readFileSync('./dest/input.txt', {encoding: "utf-8"}).split('\n').map(Number)
    }

    depthMeasurementsPt1 = () => {    
        let increased: Number = 0
        let depth: Number= 0

        for (let i = 0; i < this.numArr.length; i++){
            depth = this.numArr[i]
            if (depth < this.numArr[i+1]){
                depth = this.numArr[i+1]
                increased += 1
            }
        }
        console.log(increased)
    }

    depthMeasurementsPt2 = () => {    
        let increased: Number = 0
        let depth: Number= 0

        for (let i = 0; i < this.numArr.length; i++){
            depth = this.numArr[i] + this.numArr[i+1] + this.numArr[i+2]
            let change: number = this.numArr[i+1] + this.numArr[i+2] + this.numArr[i+3]
                // console.log(`This is depth: ${depth}`)
                // console.log(`This is change: ${change}`)

            if (depth < change){
                console.log(`This is change: ${change}`)
                increased += 1
                change = depth
            }
        }
        console.log(increased)
    }
}

let depth = new Depth
depth.getData()
// depth.depthMeasurementsPt1()
depth.depthMeasurementsPt2()