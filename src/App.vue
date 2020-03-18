<template>
  <div class="container">
    <appHeader :maxQuote="maxQuotes" :quoteCount="quotes.length" />
    <app-new-quote @quoteAdd="newQuote" />
    <appQuoteGrid :quotes="quotes" @quoteDelete="deleteQuote" />
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Click on a Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";
export default {
  data: function() {
    return {
      quotes: ["Just a Quote"],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length === 10) {
        alert("Please delete a quote to add more.");
      } else {
        this.quotes.push(quote);
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
};
</script>

<style>
</style>
