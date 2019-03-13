<template>
  <div class="notifications">
    <a
      href
      class="toggler"
      @click.prevent="openPanel">
      <svg
        :class="{active: activePanel}"
        class="svg-ico"
        width="18px"
        height="18px"
        viewBox="0 0 18 19"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M12.3028786,13.6170213 L5.6971214,13.6170213 L3.62536504,13.6170213 L3.62536504,8.82019191 C3.62536504,5.85648728 6.03587818,3.44597413 8.99958281,3.44597413 C11.9641218,3.44597413 14.374635,5.85648728 14.374635,8.82019191 L14.374635,13.6170213 L12.3028786,13.6170213 Z M10.634126,15.5402587 C10.634126,16.4413851 9.90070922,17.1748018 8.99958281,17.1748018 C8.0984564,17.1748018 7.36587401,16.4413851 7.36587401,15.5402587 L7.36587401,15.2857739 L10.634126,15.2857739 L10.634126,15.5402587 Z M17.1656237,13.6170213 L16.0433876,13.6170213 L16.0433876,8.82019191 C16.0433876,5.50104297 13.7329996,2.71756362 10.6374635,1.97747184 C10.6558198,1.87734668 10.6683354,1.7747184 10.6683354,1.66875261 C10.6683354,0.746766792 9.92156863,0 8.99958281,0 C8.07843137,0 7.3308302,0.746766792 7.3308302,1.66875261 C7.3308302,1.7747184 7.34334585,1.87734668 7.36170213,1.97747184 C4.26700042,2.71756362 1.95661243,5.50104297 1.95661243,8.82019191 L1.95661243,13.6170213 L0.834376304,13.6170213 C0.372966208,13.6170213 0,13.9899875 0,14.4513976 C0,14.9128077 0.372966208,15.2857739 0.834376304,15.2857739 L1.95661243,15.2857739 L5.6971214,15.2857739 L5.6971214,15.5402587 C5.6971214,17.3608678 7.17813934,18.8435544 8.99958281,18.8435544 C10.8210263,18.8435544 12.3028786,17.3608678 12.3028786,15.5402587 L12.3028786,15.2857739 L16.0433876,15.2857739 L17.1656237,15.2857739 C17.6270338,15.2857739 18,14.9128077 18,14.4513976 C18,13.9899875 17.6270338,13.6170213 17.1656237,13.6170213 L17.1656237,13.6170213 Z"></path>
      </svg>
    </a>
    <section
      :class="{active: activePanel}"
      class="notifications-overlay"
      @click="closePanel">
      <section class="notifications-panel">
        <section class="notifications-inner">
          <h4>Notifications</h4>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    activePanel: false,
  }),
  methods: {
    openPanel() {
      this.activePanel = true;
      document.body.classList.add('no-scroll');
    },
    closePanel() {
      this.activePanel = false;
      document.body.classList.remove('no-scroll');
    },
  },
};
</script>

<style lang="scss" scoped>
.notifications {
  align-items: center;
  display: flex;
  .toggler {
    height: 20px;
  }
}
.notifications-overlay {
  background: rgba(0,0,0,0.5);
  bottom: 0;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.3s;
  visibility: hidden;
  z-index: 100;
  .notifications-panel {
    background: $white;
    bottom: 0;
    position: fixed;
    right: -999px;
    top: 0;
    transition: right 0.4s;
    width: 280px;
    .notifications-inner {
      padding: 1rem;
      h4 {
        margin: 0;
      }
    }
  }
  &.active {
    opacity: 1;
    visibility: visible;
    .notifications-panel{
      right: 0;
    }
  }
}
</style>
