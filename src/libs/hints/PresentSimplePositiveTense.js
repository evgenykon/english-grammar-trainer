import Tenses from "../Tenses";
import Verb from "../Verb";
import AbstractTense from "./AbstractTense";

export default class PresentSimplePositiveTense extends AbstractTense {

    getHint() {
        return '[pronoun] [verb].';
    }

    
    getChain(){
        return [
            this.pronoun.getWord(),
            this.pronoun.isPS1() ? this.verb.getV1() : this.verb.getV4()
        ];
    }

}