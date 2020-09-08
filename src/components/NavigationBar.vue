<template>
  <div>
    <v-toolbar dense prominent>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span style="width:100px">{{Department}}</span>
      </v-toolbar-title>
      <v-toolbar-title>
        <a-input-search
          placeholder="input search text"
          enter-button
          @search="onSearch"
          style="width: 200px"
        />
      </v-toolbar-title>
      <v-toolbar-title>
        <a-tooltip placement="bottom">
          <template slot="title">
            <span>Cart</span>
          </template>
          <v-btn class="mx-3" small fab dark color="indigo" @click="showCart">
            <v-icon dark>mdi-cart-plus</v-icon>
          </v-btn>
        </a-tooltip>
        <a-tooltip placement="bottom">
          <template slot="title">
            <span>Store</span>
          </template>
          <v-btn class="mx-1" small fab dark color="indigo" @click="showStore">
            <v-icon dark>mdi-store</v-icon>
          </v-btn>
        </a-tooltip>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h2>{{user.name}}</h2>
      <a-divider type="vertical" />
      <a-tooltip placement="bottom">
        <template slot="title">
          <span>LogOut</span>
        </template>
        <a-button shape="circle" type="primary" icon="logout" @click="logout()"></a-button>
      </a-tooltip>
    </v-toolbar>
    {{current}}
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="products" @click="routerPush('/products')">
        <a-icon type="ordered-list" />List of Supplies
      </a-menu-item>
      <a-menu-item key="request" @click="routerPush('/request')">
        <a-icon type="pull-request" />All Request
      </a-menu-item>
      <a-menu-item key="inventory" @click="routerPush('/inventory')">
        <a-icon type="pull-request" />Inventory
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import localdb from "../local/db";
export default {
  data() {
    return {
      user: {},
      current: [],
      Department: "QA Department"
    };
  },
  created() {
    this.user = localdb.users.filter(rec => {
      return rec.empID === "18250";
    })[0];
  },
  methods: {
    logout() {
      console.log("Logout");
    },
    onSearch() {
      console.log("Search");
    },
    showStore() {
      console.log("showStore");
    },
    showCart() {
      console.log("showCart");
    },
    routerPush(toGo) {
      console.log(toGo);
      this.$router.push(toGo);
    }
  }
};
</script>