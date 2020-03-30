<template>
  <div>
    <vue-particles
      class="particles"
      color="#151715"
      :particleOpacity="0.9"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="4"
      linesColor="#151715"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <app-navigation />
    <app-logo />
    <app-rank />
    <app-image-link-form
      :onChange="onChangeInput"
      :onSubmit="onButtonSubmit"
    />
    <app-face-recognition
      :image="imageUrl"
      v-if="input.length != 0"
      :box="box"
    />
  </div>
</template>

<script>
  import Clarifai from "clarifai";
  import "tachyons";
  import Navigation from "./Navigation.vue";
  import Logo from "./Logo.vue";
  import Rank from "./Rank.vue";
  import ImageLinkForm from "./ImageLinkForm.vue";
  import FaceRecognition from "./FaceRecognition.vue";

  const app = new Clarifai.App({
    apiKey: "f4ee1c07f80044d69f11f0799339386b"
  });

  export default {
    data() {
      return {
        input: "",
        imageUrl: "",
        box: {}
      };
    },
    methods: {
      onChangeInput(event) {
        this.input = event.target.value;
        console.log(this.input);
      },
      onButtonSubmit() {
        console.log("click");
        this.imageUrl = this.input;
        app.models
          .predict(Clarifai.FACE_DETECT_MODEL, this.input)
          .then(response =>
            this.displayFaceBox(this.calculateFaceLocation(response))
          )
          .catch(err => console.log(err));
      },
      calculateFaceLocation(data) {
        const clarifaiFace =
          data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById("inputImage");
        const width = Number(image.width);
        const height = Number(image.height);
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - clarifaiFace.right_col * width,
          botRow: height - clarifaiFace.bottom_row * height
        };
      },
      displayFaceBox(box) {
        console.log(box);
        this.box = box;
      }
    },
    computed: {
      onInputChange() {
        return this.input.value;
      }
    },
    components: {
      appNavigation: Navigation,
      appLogo: Logo,
      appImageLinkForm: ImageLinkForm,
      appRank: Rank,
      appFaceRecognition: FaceRecognition
    }
  };
</script>

<style>
  .particles {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
</style>
