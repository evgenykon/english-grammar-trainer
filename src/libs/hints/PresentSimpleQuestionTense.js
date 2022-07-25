import Tenses from "../Tenses";
import AbstractTense from "./AbstractTense";

export default class PresentSimpleQuestionTense extends AbstractTense {

    getHint() {
        return 'Wh.. [do] [pronoun] [verb]?';
    }

    getChain(){
        return [
            this.pronoun.isPS1() ? ['do'] : ['does'],
            this.pronoun.getWord(),
            this.verb.getV1()
        ];
    }

}