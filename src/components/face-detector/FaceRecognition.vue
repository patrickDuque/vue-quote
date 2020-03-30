<template>
  <div class="center ma relative">
    <div class="absolute mt2">
      <img
        id="inputImage"
        :src="image"
        alt="face-recog-img"
        width="500px"
        height="auto"
        class="br3"
      >
      <div
        class="bounding-box grow"
        :style="boundingBox"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["image", "box"],
    computed: {
      boundingBox() {
        return {
          top: this.box.topRow + "px",
          right: this.box.rightCol + "px",
          bottom: this.box.botRow + "px",
          left: this.box.leftCol + "px"
        };
      }
    }
  };
</script>

<style scoped>
  div.center.ma {
    left: 25%;
  }

  .bounding-box {
    position: absolute;
    box-shadow: 0 0 0 3px #149df2 inset;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;

    /* {leftCol: 135.18654999999998, topRow: 49.84821485, rightCol: 141.96998000000002, botRow: 73.68593820000001} */
  }
</style>