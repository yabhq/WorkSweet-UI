<template>
  <header class="top-header">
    <form class="search-form">
      <input
        type="search"
        class="searchbar"
        placeholder="Search for anything...">
    </form>
    <nav class="top-nav">
      <div class="notifications">

      </div>
      <div class="user">

      </div>
      <div class="cta">

      </div>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.top-header {
  background: $white;
  height: 60px;
  padding-left: 3rem;
  .search-form {

    &:before {
      content: ' ';
      background: url('~@/assets/img/search.svg') no-repeat;
      width: 20px;
      height: 20px;
      position: absolute;
    }
  }
}

</style>
