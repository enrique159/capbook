<template>
  <div :class="darkMode ? 'darkmain maincard' : 'maincard'">
    <div class="title">
      <h4>Hola mundo</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCardDashboard',
  computed: {
    nombre() {
      const user = this.$store.getters.getUser;
      return user.nombre;
    },
    darkMode() {
      return this.$store.getters.getDarkmode;
    },
  },
};
</script>

<style lang="scss" scoped>
.maincard {
  display: inline-block;
  width: 100%;
  height: 100%;
  .title {
    color: #252525;
  }
}

.darkmain {
  .title {
    color: white;
  }
}
</style>