import Tenses from "../Tenses";
import AbstractTense from "./AbstractTense";

export default class PresentContiniousNegativeTense extends AbstractTense {

    getHint() {
        return '[pronoun] [not be] [verb].';
    }
    
    getChain(){
        return [
            this.pronoun.getWord(),
            this.pronoun.isPC1() ? ['am not'] : (this.pronoun.isPC2() ? ['is not', "isn't"] : ['are not', "aren't"]),
            this.verb.getVIng()
        ];
    }
}