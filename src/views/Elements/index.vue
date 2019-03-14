<template>
  <section class="page">
    <BaseMenuBar>
      <router-link
        exact
        class="menu-link"
        :to="{name: 'elements'}">
        Grid
      </router-link>
      <router-link
        class="menu-link"
        :to="{name: 'elements-type'}">
        Type
      </router-link>
      <router-link
        class="menu-link"
        :to="{name: 'elements-form'}">
        Form
      </router-link>
    </BaseMenuBar>
    <div class="container full">
      <BasePageTransition>
        <router-view/>
      </BasePageTransition>
    </div>
  </section>
</template>

<script>
import BaseMenuBar from '@/components/BaseMenuBar.vue';
import BasePageTransition from '@/components/BasePageTransition.vue';

export default {
  components: {
    BaseMenuBar,
    BasePageTransition,
  },
};
</script>

<style lang="scss" scoped>
.comp-item {
  .comp-subtitle {
    color: $neutral_4;
  }
}
</style>
