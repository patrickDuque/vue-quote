<template>
  <article class="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw10 center tc">
    <main class="pa4 black-80">
      <form class="measure center">
        <fieldset
          id="sign_up"
          class="ba b--transparent ph0 mh0"
        >
          <legend class="f4 fw6 ph0 mh0">Register</legend>
          <div class="mt3">
            <label
              class="db fw6 lh-copy f6"
              for="name"
            >Name</label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              id="name"
              v-model="name"
              required
            />
          </div>
          <div class="mt3">
            <label
              class="db fw6 lh-copy f6"
              for="email-address"
            >Email</label>
            <input
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
              v-model="email"
              required
            />
          </div>
          <div class="mv3">
            <label
              class="db fw6 lh-copy f6"
              for="password"
            >Password</label>
            <input
              class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"
              v-model="password"
              required
              minlength="8"
            >
          </div>
        </fieldset>
        <div class="tc">
          <button
            @click.prevent="onSubmitRegister"
            class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
          >Register</button>
        </div>
      </form>
    </main>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: ""
      };
    },
    methods: {
      onSubmitRegister() {
        fetch("https://young-brook-06141.herokuapp.com/register", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            name: this.name
          })
        })
          .then(res => res.json())
          .then(data => {
            if (data.id) {
              this.load(data);
              this.route("home");
            }
          });
      }
    },
    props: ["route", "load"]
  };
</script>