import Tenses from "../Tenses";
import AbstractTense from "./AbstractTense";

export default class PresentSimpleNegativeTense extends AbstractTense {

    getHint() {
        return '[pronoun] [do not] [verb].';
    }

    getChain(){
        return [
            this.pronoun.getWord(),
            this.pronoun.isPS1() ? ['do not', "dont't"] : ['does not', "doesn't"],
            this.verb.getV1()
        ];
    }

}