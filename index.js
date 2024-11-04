import {drivers, options, nogos} from "./data/data.js";

const days = [
    'montag',
    'dienstag',
    'mittwoch',
    'donnerstag',
    'freitag'
];

function generate() {
    let d = JSON.parse(JSON.stringify(drivers));
    let op = JSON.parse(JSON.stringify(options));
    days.forEach(day => {
        let value = generateEntry(day, d, op);
        document.getElementById('driver_'+day).innerHTML = d[value[0]];
        document.getElementById('value_'+day).innerHTML = op[value[1]];
        d = d.filter((item, index) => index !== value[0]);
        op = op.filter((item, index) => index !== value[1]);
    });
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateEntry(day, d, op) {
    const p = randomInteger(0, d.length-1);
    const pl = randomInteger(0, op.length-1);

    if (nogos.some((nogo) => nogo.check(p,pl,day))) {
        return generateEntry(day, d, op);
    } else {
        return [p,pl];
    }
}

document.getElementById('generator').addEventListener('click', generate);