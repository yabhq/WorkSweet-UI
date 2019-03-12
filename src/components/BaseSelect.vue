<template>
  <div
    :class="{active: optionsToggled}"
    class="base_select">
    <div
      @click="toggleOptions()"
      class="current">
      {{ selectedLabel }}
    </div>
    <ul
      :class="{active: optionsToggled}"
      class="select_list">
      <li
        v-for="(option, i) in options"
        :key="i"
        class="item"
        @click="selectOption(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [Number, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
  },
  data: () => ({
    selectedLabel: null,
    selectedValue: null,
    optionsToggled: false,
  }),
  created() {
    this.selectedLabel = this.placeholder;
    if (this.value) {
      const opt = this.options.find(o => o.value === this.value);
      this.selectOption(opt);
    }
  },
  methods: {
    selectOption(option) {
      this.selectedValue = option.value;
      this.selectedLabel = option.label;
      this.optionsToggled = false;
      this.$emit('input', this.selectedValue);
    },
    toggleOptions() {
      this.optionsToggled = !this.optionsToggled;
    },
  },
};
</script>

<style lang="scss" scoped>
.base_select {
  cursor: pointer;
  border: 1px solid $neutral_3;
  border-radius: $border-radius;
  display: block;
  height: 40px;
  font: 500 0.9rem / #{$line-height} #{$font};
  position: relative;
  margin-top: 0.4rem;
  width: 100%;
  &.active {
    border: 1px solid $primary;
    transition: border $transition-time;
    .current {
      &:before {
        transform: rotate(180deg);

      }
    }
  }
  .current {
    line-height: 38px;
    height: 100%;
    padding: 0 1rem;
    position: relative;
    &:before {
      transition: all $transition-time;
      content: ' ';
      position: absolute;
      right: 0.8rem;
      top: 50%;
      margin-top: -3px;
      width: 12px;
      height: 8px;

      background: url('~@/assets/img/chevron-down.svg') right center no-repeat;
    }

  }
  .select_list {
    position: absolute;
    border-radius: $border-radius;
    background: #fff;
    z-index: 1;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    box-shadow: $box-shadow;
    top: 23px;
    opacity: 0;
    transition: all $transition-time;
    visibility: hidden;
    &.active {
      top: 46px;
      opacity: 1;
      visibility: visible;
    }
    .item {
      padding: 0.5rem 1rem;
      transition: background $transition-time;
      &:first-child {
        border-radius: $border-radius $border-radius 0 0;
      }
      &:last-child {
        border-radius: 0 0 $border-radius $border-radius;
      }
      &:hover {
        background: $neutral_2;
      }
    }
  }
}
</style>
