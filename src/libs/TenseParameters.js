import Tenses from "./Tenses";

export default class TenseParameters {

    constructor(test, tenseId, tenseClass) {
        this.test = test;
        this.tenseId = tenseId;
        this.tenseClass = tenseClass;
    }

    getHint() {
        return this.tenseClass.getHint();
    }

    getInputCount() {
        return this.tenseClass.getInputCount();
    }

    isShowQuestion() {
        return [
            Tenses.PR_CONT_Q,
            Tenses.PR_SIMPLE_Q,
            Tenses.PR_PERF_Q,
        ].includes(this.tenseId);
    }

    getWWord() {
        return this.test.verb.getWWord();
    }

    getAddition() {
        return this.tenseClass.getAdditon();
    }
}