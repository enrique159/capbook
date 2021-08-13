<template>
  <div id="app" :style='darkMode'>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    darkMode() {
      document.querySelector('body').style.backgroundColor = this.$store.getters.getDarkmode ? '#252525' : '#EDF0F3';
    }
  }
}
</script>

<style lang="scss">
@import './assets/main.css';
@import './assets/normalize.css';

body {
  background-color: #EDF0F3;
}

#app {
  font-family: GT Walsheim, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
