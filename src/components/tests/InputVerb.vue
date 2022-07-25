<template>
<div class="container">
    <div class="block mb-1">{{getTenseParameters.getHint()}}</div>
    <div class="linear-inputs">
        <span class="tag" v-if="getTenseParameters.isShowQuestion()">
            {{getTenseParameters.getWWord()}}
        </span>
        <input 
            v-for="(field,i) in this.fields" 
            :class="`input is-small ml-1 mb-1 ${getClassStyle} ${(errors.length > 0 ? (errors[i] ? 'is-danger' : 'is-success') : '')}`" 
            :key="i" 
            v-bind:disabled="disabled"
            v-on:keyup.enter="onSubmit" v-model="fields[i]" 
        />

        <span class="tag" v-if="getTenseParameters.getAddition()">
            {{getTenseParameters.getAddition()}}
        </span>

    </div>
    
</div>
</template>

<script>
import Test from '../../libs/Test';
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
            fields: [],
            errors: [],
            disabled: false
        }
    },
    mounted() {
        for (let i=0;i<this.getTenseParameters.getInputCount();i++) {
            this.fields.push('');
        }
    },
    methods: {
        onSubmit() {
            this.errors = this.test.submit(this.tense, this.fields);
            this.$emit('submit', this.errors);
            this.disabled = true;
        }
    },
    computed: {
        /**
         * @return TenseParameters
         */
        getTenseParameters() {
            return this.test.getTenseParameters(this.tense);
        },

        getClassStyle() {
            return  '';
        }
    }
}
</script>

<style>
.linear-inputs input {
    width: 30%;
    display: inline-block;
}

</style>