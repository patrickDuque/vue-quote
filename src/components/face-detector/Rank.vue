<template>
  <div class="tc">
    <div class="black f3">
      <p>{{ name.name }}, Current Entries is: <span class="black f1">{{ name.entries }}</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["name"]
  };
</script>

<style>
</style>
