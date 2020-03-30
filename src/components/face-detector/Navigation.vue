<template>
  <nav>
    <h5
      class="f3 link dim black underline pa3 pointer ma0"
      @click="route('signin')"
    >Sign Out</h5>
  </nav>
</template>

<script>
  export default {
    props: ["route"]
  };
</script>

<style>
  nav {
    display: flex;
    justify-content: flex-end;
  }
</style>