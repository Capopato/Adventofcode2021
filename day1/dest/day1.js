"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Depth {
    constructor() {
        this.numArr = [];
        this.getData = () => {
            this.numArr = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: "utf-8" }).split('\n').map(Number);
        };
        this.depthMeasurementsPt1 = () => {
            let increased = 0;
            let depth = 0;
            for (let i = 0; i < this.numArr.length; i++) {
                depth = this.numArr[i];
                if (depth < this.numArr[i + 1]) {
                    depth = this.numArr[i + 1];
                    increased += 1;
                }
            }
            console.log(increased);
        };
        this.depthMeasurementsPt2 = () => {
            let increased = 0;
            let depth = 0;
            for (let i = 0; i < this.numArr.length; i++) {
                depth = this.numArr[i] + this.numArr[i + 1] + this.numArr[i + 2];
                let change = this.numArr[i + 1] + this.numArr[i + 2] + this.numArr[i + 3];
                // console.log(`This is depth: ${depth}`)
                // console.log(`This is change: ${change}`)
                if (depth < change) {
                    console.log(`This is change: ${change}`);
                    increased += 1;
                    change = depth;
                }
            }
            console.log(increased);
        };
    }
}
let depth = new Depth;
depth.getData();
// depth.depthMeasurementsPt1()
depth.depthMeasurementsPt2();
