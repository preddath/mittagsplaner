class NoGo {
    constructor(person, place) {
        this.person = person;
        this.place = place;
    }

    check(randPer, randPl) {
        return randPer === this.person && randPl === this.place;
    }
}