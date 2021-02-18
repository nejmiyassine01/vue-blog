import Vue from "vue";

// Make Bold Custom Directives
Vue.directive("bold", {
  bind: el => {
    el.style.fontWeight = "bold";
  }
});

// Make dynamic Font Size Custom Directives
Vue.directive("font", {
  bind: (el, binding) => {
    el.style.fontSize = `${binding.value}px`;
  }
});

Vue.directive("format", {
  bind: (el, binding) => {
    el.style.fontSize = `${binding.value}px`;

    if (binding.modifiers.orange) {
      el.style.color = "orange";
    }
  }
});
