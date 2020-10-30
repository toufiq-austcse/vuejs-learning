<template>
  <div v-if="!loading" class="row">
    <div class="card" v-for="(item, index) in items" :key="index">
      <router-link :to="{ path: '/item/' + item.id }" tag="div">
        <img class="card-img-top" :src="item.photo" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">
            {{ item.price }}
          </p>
        </div>
      </router-link>
      <div class="card-footer">
        <a class="btn btn-primary" @click="addToCart(item)">+ add</a>
      </div>
    </div>
  </div>
  <h1 v-else>Loading...</h1>
</template>
<script>
import axios from "axios";

export default {
  props: [],
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.fetchInventory();
  },
  computed: {
    items() {
      return this.$store.getters.getInventory;
    },
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item); // using actions , asynchronus
    },
    fetchInventory() {
      var self = this;
      axios
        .get("http://localhost:3000/items")
        .then((res) => {
          self.loading = false;
          self.$store.commit("setInventory", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style >
</style>