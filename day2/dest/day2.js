"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Day2 {
    constructor() {
        /**
         *
         * @returns The data input
         */
        this.getData = () => {
            const movementInput = (0, fs_1.readFileSync)('./dest/input.txt', { encoding: 'UTF-8' });
            return movementInput;
        };
        /**
         *
         * @returns the input splitted on 1. direction (forward, up down) and 2. the amount of movement
         */
        this.splitData = () => {
            const movementInput = this.getData();
            const directionsAndValues = movementInput.split('\n');
            return directionsAndValues;
        };
        /**
         * This method gives the answer.
         * It sums the values of movements horizontal/vertical and then prints horizontal * vertical
         *
         */
        this.multiplyDepthHorizontal = () => {
            let horizontal = 0;
            let vertical = 0;
            let directionsAndValues = this.splitData();
            for (let i = 0; i < directionsAndValues.length; i++) {
                const movement = directionsAndValues[i].split(' ')[0];
                const number = Number(directionsAndValues[i].split(' ')[1]);
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
            console.log(horizontal * vertical);
        };
        /**
         * This method gives the answer.
         * It sums the values of movements horizontal/vertical converted to aim to get the total depth.
         * It the prints horizontal value * depth value
         */
        this.addAim = () => {
            let horizontal = 0;
            let aim = 0;
            let depth = 0;
            let directionsAndValues = this.splitData();
            for (let i = 0; i < directionsAndValues.length; i++) {
                const movement = directionsAndValues[i].split(' ')[0];
                const number = Number(directionsAndValues[i].split(' ')[1]);
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
            console.log(horizontal * depth); // Answer
        };
    }
}
let day2 = new Day2();
// day2.getData()
// day2.splitData()
// day2.multiplyDepthHorizontal()
day2.addAim();
