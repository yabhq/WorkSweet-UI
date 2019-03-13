<template>
  <div
    :class="{active: active, arrow: hasArrow}"
    class="dropdown card">
    <div class="dropdown-inner">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  background: $white;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin: -1rem 0 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  transition: all $transition-time;
  visibility: hidden;
  z-index: 1;
  width: 100%;
  &.arrow {
    &:before {
      background: $white;
      border-radius: $border-radius / 2;
      box-shadow: $box-shadow;
      content: ' ';
      height: 18px;
      left: 50%;
      margin: -6px -9px;
      position: absolute;
      transform: rotate(45deg);
      width: 18px;
      z-index: -1;
    }
  }
  &.active {
    margin-top: 0.5rem;
    opacity: 1;
    visibility: visible;
  }
  .dropdown-inner {
    background: $white;
    border-radius: $border-radius;
    z-index: 1;
    .dropdown-list {
      .list-item {
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
        &.separator {
          border-top: 1px solid $neutral_2;
        }
        a {
          display: block;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
}
</style>
