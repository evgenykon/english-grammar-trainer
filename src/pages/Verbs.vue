<template>

  <Layout>

    <div class="container">

      <base-header />

      <h3 class="title is-5 pt-5 mt-5">Trainers</h3>

      <base-tabs :list="tabs.list" :current="tabs.current" />

      <div class="columns">
        <div class="column buttons">
            <b-button rounded type="is-primary" @click="randomizeTest">Get random words</b-button>
            <!-- b-button rounded type="is-primary" outlined>Reset</b-button -->
            <!-- div class="block"><label class="checkbox"><input type="checkbox"> Show hints</label></div -->
        </div>
        <div class="column buttons">
            <!-- b-button type="is-primary" outlined>Verbs</b-button>
            <b-button type="is-primary" outlined>Pronouns</b-button>
            <b-button type="is-primary" outlined>Additions</b-button -->
        </div>
      </div>

      <nav class="level" v-if="this.test.model">
        
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Pronoun</p>
            <p class="title">{{this.test.model.pronoun.getWord()}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Verb</p>
            <p class="title">{{this.test.model.verb.getV1()}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Correct</p>
            <p class="title has-text-success">{{this.test.successCount}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Errors</p>
            <p class="title has-text-danger">{{this.test.errorsCount}}</p>
          </div>
        </div>
      </nav>

      <table class="table is-bordered is-fullwidth">

        <thead>
            <tr>
                <th width="5%"></th>
                <th width="1%"></th>
                <th>Simple</th>
                <th>Continuous</th>
                <th>Perfect</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <th rowspan="3">Present</th>
            <th>+</th>
            <td>
              <input-verb :tense="Tenses.PR_SIMPLE_POS" :test="test.model" v-if="test.model" v-on:submit="onSubmit" ></input-verb>
            </td>
            <td>
              <input-verb :tense="Tenses.PR_CONT_POS" :test="test.model" v-if="test.model"  v-on:submit="onSubmit" ></input-verb>
            </td>
            <td>
              <input-verb :tense="Tenses.PR_PERF_POS" :test="test.model" v-if="test.model" v-on:submit="onSubmit" ></input-verb>
            </td>
        </tr>
        <tr>
            <!-- present -->
            <th>-</th>
            <td>
              <input-verb :tense="Tenses.PR_SIMPLE_NEG" :test="test.model" v-if="test.model" v-on:submit="onSubmit" ></input-verb>
            </td>
            <td>
              <input-verb :tense="Tenses.PR_CONT_NEG" :test="test.model" v-if="test.model" v-on:submit="onSubmit"  ></input-verb>
            </td>
            <td>
              <input-verb :tense="Tenses.PR_PERF_NEG" :test="test.model" v-if="test.model" v-on:submit="onSubmit"  ></input-verb>
            </td>
        </tr>
        <tr>
            <!-- present -->
            <th>?</th>
            <td>
              <input-verb :tense="Tenses.PR_SIMPLE_Q" :test="test.model" v-if="test.model" v-on:submit="onSubmit"  ></input-verb>
            </td>
            <td>
              <input-verb :tense="Tenses.PR_CONT_Q" :test="test.model" v-if="test.model" v-on:submit="onSubmit"  ></input-verb>
            </td>
            <td>
              <input-verb :tense="Tenses.PR_PERF_Q" :test="test.model" v-if="test.model" v-on:submit="onSubmit"  ></input-verb>
            </td>
        </tr>
        <!-- tr>
            <th rowspan="3">Past</th>
            <th>+</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>-</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>?</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th rowspan="3">Future</th>
            <td>+</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>-</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>?</th>
            <td></td>
            <td></td>
            <td></td>
        </tr -->
        </tbody>

      </table>


    </div>

  </Layout>

</template>


<script>
import Vue from "vue";

import BaseHeader from '../components/BaseHeader.vue'
import BaseTabs from '../components/BaseTabs.vue'
import CheatSheet from '../components/CheatSheet.vue'
import InputVerb from '../components/tests/InputVerb.vue'

import Tenses from '../libs/Tenses';
import Test from '../libs/Test';
import Verb from '../libs/Verb';
import Pronoun from '../libs/Pronoun';

export default {
  metaInfo: {
    title: 'Evgeny Kon Github Page'
  },
  components: {
    BaseHeader, BaseTabs, CheatSheet, InputVerb
  },
  data() {
    return {
      tabs: {
        current: 'Verbs',
        list: [
          {name: 'Verbs', icon: '📑'}
        ],
      },
      test: {
        isGenerated: true,
        model: null,
        errorsCount: 0,
        successCount: 0
      },
      Tenses
    }
  },
  methods: {
    randomizeTest() {
      this.test.model = null;
      Vue.nextTick(() => {
        const list = this.$page.verbs.edges.map(item => item.node);
        const randomVerb = list[Math.floor(Math.random()*list.length)];

        const pronouns = (new Pronoun).getAll();
        const randomPronoun = pronouns[Math.floor(Math.random()*pronouns.length)];

        this.test.model = new Test(
          new Verb(
            randomVerb.verbs[0], randomVerb.verbs[1], randomVerb.verbs[2], randomVerb.verbs[3], randomVerb.verbs[4], randomVerb.wword
          ),
          new Pronoun(randomPronoun)
        );
      });
    },
    onSubmit(data) {
      for(let isError of data) {
        if (isError) {
          this.test.errorsCount++;
        } else {
          this.test.successCount++;
        }
      }
    }
  }
}
</script>


<page-query>
query {
  verbs: allDocs(filter: {type: {eq: "verbs"}}) {
    edges {
      node {
        id
        verbs
        wword
      }
    }
  }
}
</page-query>