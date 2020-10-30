<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price float-right">Price</span>
    </li>
    <hr />
    <li class="list-group-item" v-for="(item, index) in items" :key="index">
      <span class="item-name">{{ item.title }}</span>
      <button class="btn btn-sm btn-danger" @click="removeItem(index)">
        -
      </button>
      <span class="item-price float-right">{{ item.price }}</span>
    </li>
    <hr />

    <li class="list-group-item">
      <span class="item-name">Total</span>
      <span class="item-price float-right">{{ totalPrice }}</span>
    </li>
    <li v-if="items.length > 0" class="list-group-item">
      <button class="btn btn-block btn-success" @click="checkout"> Checkout</button>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      let total = 0;
      this.items.forEach((it) => (total += parseFloat(it.price)));
      return total.toFixed(2);
    },
  },
  methods: {
    removeItem(index) {
      this.$store.commit("removeItem", index);
    },
    checkout() {
      if (confirm('Are You sure to confirm')) {
        this.$store.commit('clearCart')
     }
    },
  },
};
</script>
<style >
</style>