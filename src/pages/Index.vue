<template>
  <Layout>

    <div class="container">

      <base-header />

      <h3 class="title is-5 pt-5 mt-5">Trainers</h3>

      <base-tabs :list="tabs.list" :current="tabs.current" />

      <h3 class="title is-5 pt-5 mt-5">Cheatsheet</h3>

      <cheat-sheet></cheat-sheet>

    </div>

  </Layout>
</template>

<script>
import BaseHeader from '../components/BaseHeader.vue'
import BaseTabs from '../components/BaseTabs.vue'
import CheatSheet from '../components/CheatSheet.vue'
export default {
  metaInfo: {
    title: 'Evgeny Kon Github Page'
  },
  components: {
    BaseHeader, BaseTabs, CheatSheet
  },
  data() {
    return {
      tabs: {
        current: 'Index',
        list: [
          {name: 'Verbs', icon: '📑'}
        ],
      }

    }
  }
}
</script>
