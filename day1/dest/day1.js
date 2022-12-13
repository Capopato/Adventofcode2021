"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Depth {
    constructor() {
        this.getData = () => {
            let sonarSweepReport = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: "utf-8" }).split('\n').map(Number);
            return sonarSweepReport;
        };
        this.depthMeasurementsPt1 = () => {
            let sonarSweepReport = this.getData();
            let depthIncreased = 0;
            let depth = 0;
            for (let i = 0; i < sonarSweepReport.length; i++) {
                depth = sonarSweepReport[i];
                if (depth < sonarSweepReport[i + 1]) {
                    depth = sonarSweepReport[i + 1];
                    depthIncreased += 1;
                }
            }
            console.log(depthIncreased);
        };
        this.depthMeasurementsPt2 = () => {
            let sonarSweepReport = this.getData();
            let depthIncreased = 0;
            let depth = 0;
            for (let i = 0; i < sonarSweepReport.length; i++) {
                depth = sonarSweepReport[i] + sonarSweepReport[i + 1] + sonarSweepReport[i + 2];
                let change = sonarSweepReport[i + 1] + sonarSweepReport[i + 2] + sonarSweepReport[i + 3];
                if (depth < change) {
                    console.log(`This is change: ${change}`);
                    depthIncreased += 1;
                    change = depth;
                }
            }
            console.log(depthIncreased);
        };
    }
}
let depth = new Depth;
depth.getData();
depth.depthMeasurementsPt1();
depth.depthMeasurementsPt2();
