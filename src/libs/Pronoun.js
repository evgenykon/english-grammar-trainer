export default class Pronoun {
    /**
     * @param {string} word 
     */
    constructor(word) {
        this.word = word;
    }

    getWord() {
        return this.word;
    }

    isPS1() {
        return ['I', 'we', 'you', 'they'].includes(this.word);
    }

    isPS2() {
        return ['he', 'she', 'it'].includes(this.word);
    }

    isPC1() {
        return ['I'].includes(this.word);
    }

    isPC2() {
        return ['he', 'she', 'it'].includes(this.word);
    }

    isPC3() {
        return ['we', 'you', 'they'].includes(this.word);
    }

    isPP1() {
        return ['I', 'we', 'you', 'they'].includes(this.word);
    }

    isPP2() {
        return ['he', 'she', 'it'].includes(this.word);
    }
}