import {readFileSync} from 'fs'

class Depth{
    getData = () => {
        let sonarSweepReport: number[] = readFileSync('./dest/input.txt', {encoding: "utf-8"}).split('\n').map(Number)
        return sonarSweepReport
    }

    depthMeasurementsPt1 = () => { 
        let sonarSweepReport: number[] = this.getData()
        let depthIncreased: number = 0
        let depth: number= 0

        for (let i = 0; i < sonarSweepReport.length; i++){
            depth = sonarSweepReport[i]
            if (depth < sonarSweepReport[i+1]){
                depth = sonarSweepReport[i+1]
                depthIncreased += 1
            }
        }
        console.log(depthIncreased)
    }

    depthMeasurementsPt2 = () => {   
        let sonarSweepReport: number[] = this.getData() 
        let depthIncreased: number = 0
        let depth: number= 0

        for (let i = 0; i < sonarSweepReport.length; i++){
            depth = sonarSweepReport[i] + sonarSweepReport[i+1] + sonarSweepReport[i+2]
            let change: number = sonarSweepReport[i+1] + sonarSweepReport[i+2] + sonarSweepReport[i+3]
            if (depth < change){
                console.log(`This is change: ${change}`)
                depthIncreased += 1
                change = depth
            }
        }
        console.log(depthIncreased)
    }
}

let depth = new Depth
depth.getData()
depth.depthMeasurementsPt1()
depth.depthMeasurementsPt2()