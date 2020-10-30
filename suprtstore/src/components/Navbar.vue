<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ path: '/' }"
      >Super Store</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="keyworkd"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      keyworkd: "",
    };
  },
  methods: {
    search() {
      let self = this;
      axios.get("http://localhost:3000/search/" + this.keyworkd)
      .then((res) => {
        self.$store.commit("setInventory", res.data);
      }).catch((err) => console.log(err));
    },
  },
};
</script>
<style ></style>