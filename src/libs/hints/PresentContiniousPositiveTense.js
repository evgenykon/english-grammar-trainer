import AbstractTense from "./AbstractTense";

export default class PresentContiniousPositiveTense extends AbstractTense {

    getHint() {
        return '[pronoun] [be] [verb]';
    }

    
    getChain(){
        return [
            this.pronoun.getWord(),
            this.pronoun.isPC1() ? 'am' : (this.pronoun.isPC2() ? 'is' : 'are'),
            this.verb.getVIng()
        ];
    }
}