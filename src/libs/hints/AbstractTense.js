export default class AbstractTense {

    /**
     * @param {Verb} verb 
     * @param {Pronoun} pronoun 
     */
     constructor(verb, pronoun) {
        this.verb = verb;
        this.pronoun = pronoun;
    }

    getChain(){
        return [];
    }

    getHint() {
        return '';
    }

    getInputCount() {
        return this.getChain().length;
    }

    validate(fields) {
        let errors = [];
        for (let i=0; i<this.getInputCount(); i++) {
            const chainNode = this.getChain()[i];
            console.log('validate', chainNode, fields[i].toLowerCase());
            let result = false;
            if (Array.isArray(chainNode)) {
                result = !chainNode.includes(fields[i].toLowerCase());
            } else {
                result = chainNode !== fields[i].toLowerCase();
            }
            errors.push(result);
        }
        return errors;
    }

    getAdditon() {
        return '';
    }
}