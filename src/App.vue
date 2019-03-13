<template>
  <div id="app">
    <TheAppSwitcher />
    <main class="main">
      <TheTopNav />
      <router-view/>
    </main>
  </div>
</template>

<script>
import TheAppSwitcher from '@/components/TheAppSwitcher.vue';
import TheTopNav from '@/components/TheTopNav.vue';

export default {
  components: {
    TheAppSwitcher,
    TheTopNav,
  },
};
</script>

<style lang="scss">
@import '~@/assets/scss/main.scss';

#app {
  .main {
    padding-left: 80px;
  }
}

</style>
