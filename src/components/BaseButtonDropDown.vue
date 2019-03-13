<template>
  <div class="btn-dropdown">
    <button
      v-click-outside="handleOutsideClick"
      :class="{active: activeDropdown}"
      class="btn large has-dropdown"
      @click="activeDropdown = !activeDropdown">
      {{ value }}
    </button>
    <BaseDropDown
      :active="activeDropdown">
      <slot/>
    </BaseDropDown>
  </div>
</template>

<script>
import BaseDropDown from '@/components/BaseDropDown.vue';

export default {
  components: {
    BaseDropDown,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    orientation: {
      type: String,
      default: 'left',
    },
  },
  data: () => ({
    activeDropdown: false,
  }),
  methods: {
    handleOutsideClick() {
      this.activeDropdown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-dropdown {
  position: relative;
  .has-dropdown {
    min-width: 128px;
    padding-right: 1.8rem;
    position: relative;
    &:before {
      transition: all $transition-time;
      content: ' ';
      position: absolute;
      right: 0.6rem;
      top: 50%;
      margin-top: -4px;
      width: 12px;
      height: 8px;
      background: url('~@/assets/img/chevron-down_wh.svg') right center no-repeat;
    }
    &.active {
      &:before {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
