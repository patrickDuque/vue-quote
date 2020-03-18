<template>
  <div class="row">
    <appQuote v-for="(quote, i) in quotes" :key="{i}" @click.native="deleteQuote(i)">{{quote}}</appQuote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(quote) {
      this.$emit("quoteDelete", quote);
    }
  }
};
</script>