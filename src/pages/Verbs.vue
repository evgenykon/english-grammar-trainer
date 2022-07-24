<template>

  <Layout>

    <div class="container">

      <base-header />

      <h3 class="title is-5 pt-5 mt-5">Trainers</h3>

      <base-tabs :list="tabs.list" :current="tabs.current" />

      <div class="columns">
        <div class="column buttons">
            <b-button rounded type="is-primary" @click="randomizeTest">Get random words</b-button>
            <b-button rounded type="is-primary" outlined>Reset</b-button>
            <div class="block"><label class="checkbox"><input type="checkbox"> Show hints</label></div>
        </div>
        <div class="column buttons">
            <b-button type="is-primary" outlined>Verbs</b-button>
            <b-button type="is-primary" outlined>Pronouns</b-button>
            <b-button type="is-primary" outlined>Additions</b-button>
        </div>
      </div>

      <b-notification v-model="test.isGenerated"  class="content" v-if="test.model">
        <h5>Generated words</h5>
        <table class="table is-bordered is-fullwidth">
          <tbody>
          <tr>
              <th width="5%">Verb</th>
              <td>to hide</td>
          </tr>
          <tr>
              <th>Pronoun</th>
              <td>she</td>
          </tr>
          </tbody>
        </table>
      </b-notification>

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
              <input-verb :tense="Tenses.PR_SIMPLE_POS" :test="test.model" v-if="test.model" ></input-verb>
            </td>
            <td>
              <input-verb :tense="Tenses.PR_CONT_POS" :test="test.model" v-if="test.model"  ></input-verb>
            </td>
            <td>
              
            </td>
        </tr>
        <tr>
            <!-- present -->
            <th>-</th>
            <td>
              <input-verb :tense="Tenses.PR_SIMPLE_NEG" :test="test.model" v-if="test.model" ></input-verb>
            </td>
            <td>
      
            </td>
            <td>

            </td>
        </tr>
        <tr>
            <!-- present -->
            <th>?</th>
            <td>
              <input-verb :tense="Tenses.PR_SIMPLE_Q" :test="test.model" v-if="test.model"  ></input-verb>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th rowspan="3">Past</th>
            <th>+</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <!-- past -->
            <th>-</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <!-- past -->
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
            <!-- future -->
            <th>-</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <!-- future -->
            <th>?</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        </tbody>

      </table>


    </div>

  </Layout>

</template>


<script>

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
        model: null
      },
      Tenses
    }
  },
  methods: {
    randomizeTest() {
      this.test.model = new Test(
        new Verb(),
        new Pronoun()
      );
    }
  }
}
</script>
