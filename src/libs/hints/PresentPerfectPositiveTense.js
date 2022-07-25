import AbstractTense from "./AbstractTense";

export default class PresentPerfectPositiveTense extends AbstractTense {

    getHint() {
        return '[pronoun] [have] [verb]';
    }

    
    getChain(){
        return [
            this.pronoun.getWord(),
            this.pronoun.isPP1() ? 'have' : 'has',
            this.verb.getV3()
        ];
    }
}