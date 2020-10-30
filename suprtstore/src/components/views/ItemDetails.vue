<template>
  <div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.photo" alt="photo" />
    </div>
    <div class="col-sm-6">
      <p>{{ item.title }}</p>
      <p>{{ item.price }}</p>
      <a class="btn btn-primary" @click="addToCart(item)">+ add</a>
    </div>
  </div>
  <h3 v-else>Loading...</h3>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      item: null,
    };
  },
  mounted() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      let self = this;
      axios
        .get("http://localhost:3000/items/" + this.$route.params.id)
        .then((res) => {
          self.item = res.data;
        })
        .catch((err) => console.log(err));
    },

    addToCart(item) {
      this.$store.commit("addToCart", item); // using mutations, synchronus
    },
  },
};
</script>
<style >
</style>