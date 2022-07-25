import Tenses from "../Tenses";
import AbstractTense from "./AbstractTense";

export default class PresentContiniousQuestionTense extends AbstractTense {

    getHint() {
        return 'Wh.. [be] [pronoun] [verb]?';
    }
    
    getChain(){
        return [
            this.pronoun.isPC1() ? 'am' : (this.pronoun.isPC2() ? 'is' : 'are'),
            this.pronoun.getWord(),
            this.verb.getVIng()
        ];
    }
}