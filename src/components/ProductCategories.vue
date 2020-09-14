<template>
  <div>
    <v-list-item-group v-model="category" color="primary">
      <v-list-item-title>Product Categories</v-list-item-title>
      <v-list-item v-for="(item, i) in Categories" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>
<script>
import localdb from "../local/db";
export default {
  data() {
    return {
      selectedCategory: "",
      Categories: []
    };
  },
  props: ["category"],
  created() {
    this.Categories = localdb.productCategories;
  },
  methods: {}
};
</script>