<template lang="">
    <div class="center tc">
        <p class="f3">This will detect faces in your picture</p>
        <div class="center container w-50">
          <div class="form pa4 br3 shadow-5">
            <input type="text" class="f4 pa2 w-70" @change="onChange"/>
            <button class="w-30 grow f4 link ph3 pv2 dib black bg-light-gray pointer" @click="onSubmit">Dectect</button>
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ["onChange", "onSubmit"]
  };
</script>

<style>
  .form {
    display: flex;
    justify-content: center;
    background: radial-gradient(black 15%, transparent 16%) 0 0,
      radial-gradient(black 15%, transparent 16%) 8px 8px,
      radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
      radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
    background-color: #282828;
    background-size: 16px 16px;
  }
</style>