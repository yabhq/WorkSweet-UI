<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="comp-title">Components</h1>
      </div>
    </div>
    <section class="comp-item">
      <div class="row">
        <div class="col">
          <h2 class="comp-subtitle">Grid</h2>
        </div>
      </div>
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
    </section>
    <section class="comp-item">
      <div class="row">
        <div class="col">
          <h2 class="comp-subtitle">Headings</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h1>Header 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
          <h2>Header 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
          <h3>Header 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
          <h4>Header 4</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
          <h5>Header 5</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
          <h6>Header 6</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a
            href="#"
            class="link">
            I'm a link
          </a>
        </div>
      </div>
    </section>
    <section class="comp-item">
      <div class="row">
        <div class="col">
          <h2 class="comp-subtitle">Form</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form>
            <div class="form-group">
              <label
                class="form-item">
                Name
                <input
                  type="text"
                  placeholder="i.e John Doe">
              </label>
              <label
                class="form-item">
                Email address
                <input
                  type="text"
                  placeholder="i.e john@doe.com">
              </label>
            </div>
            <div class="form-group">
              <label
                class="form-item">
                Country
                <BaseSelect
                  placeholder="Select your Country"
                  :options="options" />
              </label>
              <label
                class="form-item">
                Email address
                <input
                  type="text"
                  placeholder="i.e john@doe.com">
              </label>
            </div>
            <div class="form-group">
              <label
                class="form-item">
                Message
                <textarea
                  placeholder="Message" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect.vue';

export default {
  components: {
    BaseSelect,
  },
  data: () => ({
    country: 4,
    options: [
      {
        value: 1,
        label: 'France',
      },
      {
        value: 2,
        label: 'Canada',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.comp-title {
  color: $primary;
}
.grid-item {
  background: $neutral_3;
  border-radius: $border-radius;
  padding: 0.5rem;
}
.comp-item {
  .comp-subtitle {
    color: $neutral_4;
  }
}
</style>
