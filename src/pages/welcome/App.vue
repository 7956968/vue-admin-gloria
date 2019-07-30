<template>
  <div id="app">
    <el-tag v-for="item in navs"
            :key="item.name"
            @click="goTo(item.name)">{{ item.text }}</el-tag>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navs: [
        {
          name: 'index',
          text: 'vue-element-admin'
        },
        {
          name: 'pos',
          text: '快餐收银'
        },
        {
          name: 'mix',
          text: '收集的效果'
        }
      ]
    }
  },
  methods: {
    goTo (name) {
      window.location = location.origin + `/${name}.html`
    }
  }
}
</script>
<style lang="scss">
  #app {
    padding: 100px;
    .el-tag  {
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>

