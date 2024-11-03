import NoGo from NoGo.js;

const nogos = [
    new NoGo(1,2),
    new NoGo(2,3),
];

function generateEntry() {
    const p = 0; //randomize
    const pl = 0; //randomize

    if (nogos.any((nogo) => nogo.check(p,pl))) {
        return generateEntry();
    } else {
        return [p,pl];
    }
}