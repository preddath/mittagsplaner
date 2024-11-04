export default class NoGo {
    constructor(person=null, place=null, day=null) {
        this.person = person;
        this.place = place;
        this.day = day;
    }

    check(randPer, randPl, day) {
        return (this.person === null || randPer === this.person) && (this.place === null || randPl === this.place) && (this.day === null || day === this.day);
    }
}