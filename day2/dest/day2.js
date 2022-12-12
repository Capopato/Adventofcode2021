"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Day2 {
    constructor() {
        this.getData = () => {
            let string = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: 'UTF-8' });
            return string;
        };
        this.splitData = () => {
            let string = this.getData();
            let splitString = string.split('\n');
            return splitString;
        };
        this.multiplyDepthHorizontal = () => {
            let horizontal = 0;
            let vertical = 0;
            let splitString = this.splitData();
            for (let i = 0; i < splitString.length; i++) {
                const movement = splitString[i].split(' ')[0];
                const number = Number(splitString[i].split(' ')[1]);
                if (movement == 'forward') {
                    horizontal += number;
                }
                else if (movement == 'up') {
                    vertical -= number;
                }
                else if (movement == 'down') {
                    vertical += number;
                }
            }
            console.log(horizontal * vertical); // Answer
        };
        this.addAim = () => {
            let horizontal = 0;
            let aim = 0;
            let depth = 0;
            let splitString = this.splitData();
            for (let i = 0; i < splitString.length; i++) {
                const movement = splitString[i].split(' ')[0];
                const number = Number(splitString[i].split(' ')[1]);
                if (movement == 'forward') {
                    horizontal += number;
                    depth += number * aim;
                }
                else if (movement == 'up') {
                    aim -= number;
                }
                else if (movement == 'down') {
                    aim += number;
                }
            }
            // console.log(horizontal)
            // console.log(depth)
            console.log(horizontal * depth); // Answer
        };
    }
}
let day2 = new Day2();
// day2.getData()
// day2.splitData()
// day2.multiplyDepthHorizontal()
day2.addAim();
