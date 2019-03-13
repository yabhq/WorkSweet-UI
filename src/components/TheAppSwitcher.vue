<template>
  <aside class="app-switcher">
    <nav class="main-nav">
      <router-link
        to="/"
        class="nav-link">
        <img
          src="@/assets/img/logo.svg"
          class="logo">
      </router-link>
    </nav>
    <nav class="settings">
      <router-link
        to="/"
        class="settings-link">
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M7.77759532,11 C6.12759532,11 4.77759532,9.65 4.77759532,8 C4.77759532,6.35 6.12759532,5 7.77759532,5 C9.42759532,5 10.7775953,6.35 10.7775953,8 C10.7775953,9.65 9.42759532,11 7.77759532,11 L7.77759532,11 Z M13.7275953,8.78 C13.7575953,8.53 13.7775953,8.27 13.7775953,8 C13.7775953,7.73 13.7575953,7.47 13.7175953,7.22 L15.4075953,5.9 C15.5575953,5.78 15.5975953,5.56 15.5075953,5.39 L13.9075953,2.62 C13.8075953,2.44 13.5975953,2.38 13.4175953,2.44 L11.4275953,3.24 C11.0075953,2.92 10.5675953,2.66 10.0775953,2.46 L9.77759532,0.34 C9.74759532,0.14 9.57759532,0 9.37759532,0 L6.17759532,0 C5.97759532,0 5.81759532,0.14 5.78759532,0.34 L5.48759532,2.46 C4.99759532,2.66 4.54759532,2.93 4.13759532,3.24 L2.14759532,2.44 C1.96759532,2.37 1.75759532,2.44 1.65759532,2.62 L0.0575953242,5.39 C-0.0424046758,5.57 -0.00240467578,5.78 0.157595324,5.9 L1.84759532,7.22 C1.80759532,7.47 1.77759532,7.74 1.77759532,8 C1.77759532,8.26 1.79759532,8.53 1.83759532,8.78 L0.147595324,10.1 C-0.00240467578,10.22 -0.0424046758,10.44 0.0475953242,10.61 L1.64759532,13.38 C1.74759532,13.56 1.95759532,13.62 2.13759532,13.56 L4.12759532,12.76 C4.54759532,13.08 4.98759532,13.34 5.47759532,13.54 L5.77759532,15.66 C5.81759532,15.86 5.97759532,16 6.17759532,16 L9.37759532,16 C9.57759532,16 9.74759532,15.86 9.76759532,15.66 L10.0675953,13.54 C10.5575953,13.34 11.0075953,13.07 11.4175953,12.76 L13.4075953,13.56 C13.5875953,13.63 13.7975953,13.56 13.8975953,13.38 L15.4975953,10.61 C15.5975953,10.43 15.5575953,10.22 15.3975953,10.1 L13.7275953,8.78 Z"></path>
        </svg>
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.app-switcher {
  border-right: 1px solid  $neutral_2;
  background: $white;
  display: grid;
  grid-template-areas:
    'nav'
    'settings';
  grid-column: 1;
  grid-template-rows: auto 4rem;
  height: 100vh;
  justify-items: center;
  padding: 1.5rem 0;
  position: fixed;
  width: 100px;
  .main-nav {
    grid-area: nav;
    .nav-link {
      margin-top: 1rem;
    }
  }
  .settings {
    grid-area: settings;
    .settings-link {
      border: 1px solid transparent;
      border-radius: $border-radius;
      height: 2.5rem;
      width: 2.5rem;
      line-height: 2.5rem;
      display: block;
      text-align: center;
      transition: border $transition-time;
      svg {
        transition: fill $transition-time;
        fill: $secondary;
      }
      &:hover {
        border: 1px solid $neutral_2;
        svg {
          fill: $primary;
        }
      }
    }
  }
}
</style>
