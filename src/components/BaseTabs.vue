<template>
<div class="tabs">
  <ul>
    <li v-for="item of list" :class="{'is-active': current === item.name}">
      <a href="verbs">
        <span class="icon">{{item.icon}}</span>
        <span>{{item.name}}</span>
      </a>
    </li>
    
  </ul>
</div>
</template>

<script>
export default {
    name: 'BaseTabs',
    props: {
        current: {
            type: String
        },
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>