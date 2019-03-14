<template>
  <section class="page-section">
        <div class="row">
          <div class="col">
            <h2 class="page-title">Form</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <form>
                <div class="form-group">
                  <FormItem
                    v-model="name"
                    type="tel"
                    :maxlength="10"
                    label="Name"
                    required="true"
                    :error="true"
                    placeholder="i.e John Doe" />
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
        </div>
      </section>
</template>

<script>
import FormItem from '@/components/FormItem.vue';
import BaseSelect from '@/components/BaseSelect.vue';

export default {
  components: {
    FormItem,
    BaseSelect,
  },
  data: () => ({
    name: null,
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
