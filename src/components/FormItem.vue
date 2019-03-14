<template>
  <label
    :class="{ error: error, 'has-max': hasMaxlength }"
    class="form-item">
    <span>{{ label }}</span>
    <span
      v-if="attrs.required"
      class="required">required</span>
    <component
      :is="defineComponent"
      @input="input"
      v-on="listeners"
      v-bind="attrs" />
    <span
      v-if="hasMaxlength"
      class="counter">
      {{ counter }}
    </span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    counter: null,
  }),
  watch: {
    value() {
      this.counter = this.maxlength - this.value.length;
    },
  },
  computed: {
    defineComponent() {
      return this.type !== 'textarea' ? 'input' : 'textarea';
    },
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
    attrs() {
      const { rows, ...attrs } = this.$attrs;
      return attrs;
    },
    isTextarea() {
      return this.type === 'textarea';
    },
    maxlength() {
      return this.$attrs.maxlength;
    },
    hasMaxlength() {
      return this.maxlength > 0;
    },
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: $error;
  input {
    border: 1px solid $error;
  }
}
.required {
  color: $neutral_4;
  float: right;
  font-size: 0.65rem;
  margin-top: 4px;
}
.has-max {
  position: relative;
  input {
    padding-right: 1.2rem;
  }
  .counter {
    color: $neutral_4;
    font-weight: bold;
    font-size: 0.75rem;
    position: absolute;
    right: 6px;
    bottom: 4px;
  }
}
</style>
