<template>
  <div class="products">
    <a-row type="flex">
      <a-col :span="5" :order="1">
        <product-categories></product-categories>
      </a-col>
      <a-col :span="7" :order="2">col-order-2</a-col>
      <a-col :span="6" :order="3">col-order-3</a-col>
      <a-col :span="6" :order="4">col-order-4</a-col>
    </a-row>
  </div>
</template>

<script>
import ProductCategories from "../components/ProductCategories";
export default {
  name: "Home",
  components: {
    ProductCategories
  }
};
</script>
