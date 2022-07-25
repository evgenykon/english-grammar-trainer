import Tenses from "../Tenses";
import AbstractTense from "./AbstractTense";

export default class PresentPerfectQuestionTense extends AbstractTense {

    getHint() {
        return 'Wh.. [have] [pronoun] [verb]?';
    }

    
    getChain(){
        return [
            this.pronoun.isPP1() ? ['have'] : ['has'],
            this.pronoun.getWord(),
            this.verb.getV3()
        ];
    }
}