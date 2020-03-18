<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
      <label for="new-quote">Quote</label>
      <textarea class="form-control" name="quote" id="new-quote" cols="30" rows="3" v-model="quote"></textarea>
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
      <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew() {
      if (this.quote !== "") {
        this.$emit("quoteAdd", this.quote);
        this.quote = "";
      } else {
        alert("Please enter a quote.");
      }
    }
  }
};
</script>