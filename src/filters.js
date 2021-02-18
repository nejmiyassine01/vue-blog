import Vue from "vue";

// Make UpperCase
Vue.filter("uppercase", v => v.toUpperCase());

// Shorten Text
Vue.filter(
  "shorten",
  (v, textLength, suffix) => v.substring(0, textLength) + suffix
);
