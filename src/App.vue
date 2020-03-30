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
    <div v-if="route === 'home'">
      <app-navigation :route="changeRoute" />
      <app-logo />
      <app-rank :name="user" />
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
    <div v-else-if="route === 'signin'">
      <app-sign-in
        :route="changeRoute"
        :load="loadUser"
      />
    </div>
    <div v-else>
      <app-register
        :route="changeRoute"
        :load="loadUser"
      />
    </div>
  </div>
</template>

<script>
  import "tachyons";
  import Navigation from "./components/face-detector/Navigation.vue";
  import Logo from "./components/face-detector/Logo.vue";
  import Rank from "./components/face-detector/Rank.vue";
  import ImageLinkForm from "./components/face-detector/ImageLinkForm.vue";
  import FaceRecognition from "./components/face-detector/FaceRecognition.vue";
  import SignIn from "./components/forms/SignIn.vue";
  import Register from "./components/forms/Register.vue";

  export default {
    data() {
      return {
        input: "",
        imageUrl: "",
        box: {},
        route: "signin",
        user: {
          id: "",
          name: "",
          email: "",
          password: "",
          entries: 0,
          joined: ""
        }
      };
    },
    methods: {
      onChangeInput(event) {
        this.input = event.target.value;
        console.log(this.input);
      },
      onButtonSubmit() {
        this.imageUrl = this.input;
        fetch("https://young-brook-06141.herokuapp.com/imageurl", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            input: this.input
          })
        })
          .then(res => res.json())
          .then(response => {
            if (response) {
              fetch("https://young-brook-06141.herokuapp.com/image", {
                method: "put",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: this.user.id
                })
              })
                .then(response => response.json())
                .then(count => {
                  this.user.entries = count;
                })
                .catch(err => console.log(err));
              this.displayFaceBox(this.calculateFaceLocation(response));
            }
          })
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
      },
      changeRoute(route) {
        this.input = "";
        this.route = route;
      },
      loadUser(data) {
        this.user.id = data.id;
        this.user.name = data.name;
        this.user.email = data.email;
        this.user.password = data.password;
        this.user.joined = new Date();
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
      appFaceRecognition: FaceRecognition,
      appSignIn: SignIn,
      appRegister: Register
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
