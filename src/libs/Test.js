import PresentContiniousNegativeTense from "./hints/PresentContiniousNegativeTense";
import PresentContiniousPositiveTense from "./hints/PresentContiniousPositiveTense";
import PresentContiniousQuestionTense from "./hints/PresentContiniousQuestionTense";
import PresentSimpleNegativeTense from "./hints/PresentSimpleNegativeTense";
import PresentSimplePositiveTense from "./hints/PresentSimplePositiveTense";
import PresentSimpleQuestionTense from "./hints/PresentSimpleQuestionTense";
import PresentPerfectPositiveTense from "./hints/PresentPerfectPositiveTense";
import PresentPerfectNegativeTense from "./hints/PresentPerfectNegativeTense";
import PresentPerfectQuestionTense from "./hints/PresentPerfectQuestionTense";
import Tenses from "./Tenses";
import TenseParameters from "./TenseParameters";
import Verb from "./Verb";
import Pronoun from "./Pronoun";

export default class Test {

    /**
     * @param {Verb} verb 
     * @param {Pronoun} pronoun 
     */
    constructor(verb, pronoun) {
        this.verb = verb;
        this.pronoun = pronoun;
    }

    getTenseClass(tenseId) {
        let classes = {};
        classes[Tenses.PR_SIMPLE_POS] = new PresentSimplePositiveTense(this.verb, this.pronoun);
        classes[Tenses.PR_SIMPLE_NEG] = new PresentSimpleNegativeTense(this.verb, this.pronoun);
        classes[Tenses.PR_SIMPLE_Q] = new PresentSimpleQuestionTense(this.verb, this.pronoun);
        classes[Tenses.PR_CONT_POS] = new PresentContiniousPositiveTense(this.verb, this.pronoun);
        classes[Tenses.PR_CONT_NEG] = new PresentContiniousNegativeTense(this.verb, this.pronoun);
        classes[Tenses.PR_CONT_Q] = new PresentContiniousQuestionTense(this.verb, this.pronoun);
        classes[Tenses.PR_PERF_POS] = new PresentPerfectPositiveTense(this.verb, this.pronoun);
        classes[Tenses.PR_PERF_NEG] = new PresentPerfectNegativeTense(this.verb, this.pronoun);
        classes[Tenses.PR_PERF_Q] = new PresentPerfectQuestionTense(this.verb, this.pronoun);
        return classes[tenseId];
    }

    getTenseParameters(tenseId) {
        return new TenseParameters(this, tenseId, this.getTenseClass(tenseId));
    }

    /**
     * @param {string} tenseId 
     * @param {Array<string>} fields 
     * @returns 
     */
    submit(tenseId, fields) {
        const tenseClass = this.getTenseClass(tenseId);
        console.log('SUBMIT', tenseClass, tenseId);
        return tenseClass.validate(fields);
    }
};