export default class Verb {

    /**
     * @param {string} v1 
     * @param {string} v2 
     * @param {string} v3 
     * @param {string} v4
     * @param {string} vIng
     * @param {string} wword
     */
    constructor(v1, v2, v3, v4, vIng, wword) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
        this.v4 = v4;
        this.vIng = vIng;
        this.wword = wword;
    }

    getV1() {
        return this.v1;
    }

    getV2() {
        return this.v2;
    }

    getV3() {
        return this.v3;
    }

    getV4() {
        return this.v4;
    }

    getVIng() {
        return this.vIng;
    }

    getWWord() {
        return this.wword;
    }
}