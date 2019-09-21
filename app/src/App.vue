<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  beforeCreate () {
    console.log(new Date())
  },
  created () {}
}
</script>