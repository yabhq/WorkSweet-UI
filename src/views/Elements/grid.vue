<template>
  <section class="page-section">
    <div class="row">
      <div class="col">
        <h2 class="page-title">Grid Sample</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div
            v-for="(col, i) in 12"
            :key="i"
            class="row">
            <div :class="`col-${col}`">
              <div class="grid-item">
                {{ col }}
              </div>
            </div>
            <div
              v-if="col !== 12"
              :class="`col-${12 - col}`">
              <div class="grid-item">
                {{ 12 - col }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
.grid-item {
  background: $neutral_3;
  border-radius: $border-radius;
  padding: 0.5rem;
}
</style>
