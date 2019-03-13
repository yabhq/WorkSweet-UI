import Vue from 'vue';

Vue.directive(
  'click-outside', {
    bind: (el, binding) => {
      const handler = (e) => {
        if (binding.modifiers.bubble || (!el.contains(e.target) && el !== e.target)) {
          binding.value(e);
        }
      };
      el.vueClickOutside = handler;
      document.addEventListener('click', handler);
    },
    unbind: (el) => {
      document.removeEventListener('click', el.vueClickOutside);
      el.vueClickOutside = null;
    },
  },
);
