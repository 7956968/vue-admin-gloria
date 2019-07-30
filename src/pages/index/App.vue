<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route (val, oldVal) {
      if (oldVal.path === '/') {
        window.location = location.origin + '/welcome.html'
      }
    }
  }
}
</script>
