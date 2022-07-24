import TenseParameters from "./TenseParameters";

export default class Test {
    constructor(verb, pronoun) {
        this.verb = verb;
        this.pronoun = pronoun;
    }

    getTenseParameters(tense) {
        return new TenseParameters(this, tense);
    }
};