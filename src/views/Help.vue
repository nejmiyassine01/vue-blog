<template>
  <div class="help">
    <h1 v-font="100">{{ pageName }}</h1>
    <p v-format.orange>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageName: "Help ",
      pageDescription: "This Is Help Page"
    };
  }
};
</script>
