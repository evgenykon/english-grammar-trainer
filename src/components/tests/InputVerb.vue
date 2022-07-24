<template>
<div class="container">
    <div class="block mb-1">{{getTenseParameters.getHint()}}</div>
    <div class="linear-inputs">
        <input class="input is-small" v-model="fields.f1"  />
        <input class="input is-small" v-model="fields.f2" />
        <input class="input is-small" v-model="fields.f3" />
        <span class="tag" v-if="getTenseParameters.isShowQuestion()">?</span>
    </div>
    
</div>
</template>

<script>
import Test from '../../libs/Test';
import Verb from '../../libs/Verb';
import Pronoun from '../../libs/Pronoun';
export default {
    name: 'InputVerb',
    props: {
        test: {
            type: Test,
            default: () => {return new Test();}
        },
        tense: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            fields: {
                f1: '',
                f2: '',
                f3: ''
            }
        }
    },
    computed: {
        /**
         * @return TenseParameters
         */
        getTenseParameters() {
            return this.test.getTenseParameters(this.tense);
        }
    }
}
</script>

<style>
.linear-inputs input {
    width: 33%;
    display: inline-block;
}

</style>