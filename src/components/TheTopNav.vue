<template>
  <header class="top-header">
    <form class="search-form form-item">
      <input
        type="search"
        class="searchbar"
        placeholder="Search for anything...">
    </form>
    <nav class="top-nav">
      <TheTopNavNotifications />
      <TheTopNavProfileCard :user="demo.user" />
      <BaseButtonDropDown :value="demo.cta">
        <ul class="dropdown-list">
          <li class="list-item">
            <a href @click.prevent="toggleBtnAction($event)">New T</a>
          </li>
          <li class="list-item">
            <a href @click.prevent="toggleBtnAction($event)">New Issue</a>
          </li>
          <li class="list-item">
            <a href @click.prevent="toggleBtnAction($event)">New Project</a>
          </li>
        </ul>
      </BaseButtonDropDown>
    </nav>
  </header>
</template>

<script>
import TheTopNavNotifications from '@/components/TheTopNavNotifications.vue';
import TheTopNavProfileCard from '@/components/TheTopNavProfileCard.vue';
import BaseButtonDropDown from '@/components/BaseButtonDropDown.vue';

export default {
  components: {
    TheTopNavNotifications,
    TheTopNavProfileCard,
    BaseButtonDropDown,
  },
  data: () => ({
    demo: {
      user: {
        avatar: 'demo/avatar.jpg',
        name: 'Lara Johnson',
        role: 'Administrator',
      },
      cta: 'New Task',
    },
  }),
  methods: {
    toggleBtnAction(e) {
      this.demo.cta = e.target.text;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-header {
  background: $white;
  height: 60px;
  padding-left: 2rem;
  padding-right: 1rem;
  display: grid;
  grid-template-columns: auto 24rem;
  grid-template-rows: 60px;
  align-items: center;
  .search-form {
    position: relative;
    &:before {
      background: url('~@/assets/img/search.svg') no-repeat;
      content: ' ';
      height: 20px;
      margin-top: -10px;
      position: absolute;
      top: 50%;
      width: 20px;
    }
    .searchbar {
      border: none;
      margin-top: 0;
      padding-left: 1.8rem;
    }
  }
  .top-nav {
    display: flex;
    justify-content: space-between;
  }
}

</style>
