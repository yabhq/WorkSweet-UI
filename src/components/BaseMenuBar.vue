<template>
  <nav class="menu-bar">
    <slot/>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.menu-bar {
  border-bottom: 1px solid#E8E8E8;
  display: flex;
  justify-content: center;
  .menu-link {
    color: #B3BDD1;
    padding: 1rem 0;
    margin: 0 1rem;
    border: 2px solid transparent;
    transition: all $transition-time;
    &:hover,
    &.router-link-active {
      color: $secondary;
      border-bottom: 2px solid $secondary;
    }
  }
}
</style>
