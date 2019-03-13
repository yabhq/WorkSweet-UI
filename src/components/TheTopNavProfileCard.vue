<template>
  <div class="profile-nav-card">
    <section
      v-click-outside="handleOutsideClick"
      :class="{active: activeDropdown}"
      class="profile"
      @click="activeDropdown = !activeDropdown">
      <img
        :src="`/img/${user.avatar}`"
        class="avatar"
        alt="Avatar">
      <div class="infos">
        <div class="username">
          {{ user.name }}
        </div>
        <div class="role">
          {{ user.role }}
        </div>
      </div>
    </section>
    <BaseDropDown
      :active="activeDropdown"
      :has-arrow="true">
      <ul class="dropdown-list">
        <li class="list-item">
          <a href>Update profile</a>
        </li>
        <li class="list-item">
          <a href>Settings</a>
        </li>
        <li class="list-item separator">
          <a href>Logout</a>
        </li>
      </ul>
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
    user: {
      type: Object,
      required: true,
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
.profile-nav-card {
  position: relative;
  .profile {
    align-items: center;
    border-radius: $border-radius;
    cursor: pointer;
    display: flex;
    height: 42px;
    padding: 0.4rem 0.8rem;
    transition: background $transition-time;
    user-select: none;
    &:hover,
    &.active {
      background: $neutral_2;
    }
    .avatar {
      border-radius: 50%;
      height: 36px;
      width: 36px;
    }
    .infos {
      color: $black;
      font-size: 0.9rem;
      line-height: 1.1rem;
      margin-left: 0.4rem;
      .role {
        color: $neutral_4;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
