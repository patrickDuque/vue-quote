<template>
  <div
    v-tilt
    class="ma4 mt0 br2 shadow-2 tc"
  >
    <img
      class="pa-3"
      :src="logo"
      alt="brain-logo"
    >
  </div>
</template>

<script>
  import brain from "./brain.png";
  export default {
    data() {
      return {
        logo: brain
      };
    }
  };
</script>

<style scoped>
  div.ma4 {
    height: 150px;
    width: 150px;
    background: #e6dada; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #274046,
      #e6dada
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #274046, #e6dada);
  }

  img {
    width: 100%;
  }
</style>