<template>
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
.comp-item {
  .comp-subtitle {
    color: $neutral_4;
  }
}
</style>
