import Tenses from "../Tenses";
import AbstractTense from "./AbstractTense";

export default class PresentPerfectNegativeTense extends AbstractTense {

    getHint() {
        return '[pronoun] [have not] [verb]';
    }

    
    getChain(){
        return [
            this.pronoun.getWord(),
            this.pronoun.isPP1() ? ['have not', "haven't"] : ['has not', "hasn't"],
            this.verb.getV3()
        ];
    }
}