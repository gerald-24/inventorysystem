<template>
  <div class="products">
    <a-row type="flex">
      <a-col :span="5" :order="1">
        <v-list-item-group v-model="selectedCategory" color="primary">
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
      </a-col>
      <a-col :span="19" :order="2">
        <v-data-iterator :items="viewProductItems" hide-default-footer>
          <template v-slot:header>
            <v-toolbar dense flat color="#E3F2FD">
              <v-toolbar-title class="preSlide slideIn">SUPPLIES</v-toolbar-title>
            </v-toolbar>
          </template>
          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.ItemCode"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card shaped>
                  <center>
                    <a-input
                      v-model="item.ProductCategoryName"
                      style="pointer-events: none; text-align: center;"
                    ></a-input>
                  </center>
                  <!-- <v-divider></v-divider> -->
                  <v-img
                    height="250"
                    contain
                    class="grey darken-4"
                    :src="item.ImageURL"
                    @click="viewImages(item.allImage)"
                  />
                  <span class="cut-text">
                    <center>
                      <a-tooltip placement="bottom">
                        <template slot="title">
                          <span>{{item.Description}}</span>
                        </template>
                        <h3 class="ma-2">{{item.ItemName}}</h3>
                      </a-tooltip>
                      <!-- <span style="color: gray; text-align: center;">{{item.Description}}</span> -->
                    </center>
                  </span>
                  <a-input
                    v-model="item.Description"
                    style="color: gray;font-size: 12px;     box-sizing:none;pointer-events: none; text-align: center;"
                  ></a-input>
                  <br />
                  <a-row>
                    <a-col :span="19">
                      <span style="color: #f67220;font-size: 25px;">₱ {{item.PricePerPiece}}</span>
                      <span style="color: gray;">/{{item.UoMName}}</span>
                    </a-col>
                    <a-col>
                      <a-tooltip placement="topRight">
                        <template slot="title">
                          <span v-if="item.Stock">Request Supplies</span>
                          <a-alert v-else message="No Stock" banner />
                        </template>
                        <a-button
                          icon="plus"
                          :disabled="!item.Stock"
                          shape="circle"
                          @click="requestSupplies(item)"
                        ></a-button>
                      </a-tooltip>
                    </a-col>
                  </a-row>
                  <!-- {{item}} -->
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </a-col>
    </a-row>
    <a-modal v-model="visible" on-ok="handleOk">
      <a-row>
        <a-col :span="12">
          <v-img height="250" contain class="grey darken-4" :src="ToaddToCart.ImageURL" />
        </a-col>
        <a-col :span="12">
          <span style="color: black;font-size: 25px;">{{ToaddToCart.ItemName}}</span>
          <v-divider />
          <span>{{ToaddToCart.Description}}</span>
          <v-divider />Item Code:
          <span style="color: #f67220;font-size: 14px;">{{ToaddToCart.ItemCode}}</span>
          <v-divider />Stock:
          <span style="color: #f67220;font-size: 25px;">{{remainingStocks}}</span>
          <v-divider />
          <br />Quantity:
          <a-input-number v-model="ToaddToCart.qty" :min="0" :max="ToaddToCart.Stock" :step="1" />
          <center v-if="ToaddToCart.qty">
            <a-divider>Total Price:</a-divider>
            <span
              v-if="ToaddToCart.Stock>=ToaddToCart.qty"
              style="color: #f67220;font-size: 25px;"
            >₱ {{ToaddToCart.PricePerPiece*ToaddToCart.qty}}</span>
            <a-alert v-else message="Exceed Quantity" banner />
          </center>
          <!-- <span style="color: #f67220;font-size: 25px;">₱ {{ToaddToCart.PricePerPiece}}</span>
          <span style="color: gray;">/{{ToaddToCart.UoMName}}</span>-->
          <!-- <p>{{ToaddToCart}}</p> -->
        </a-col>
      </a-row>
      <template slot="footer">
        <a-button
          key="SendRequest"
          :disabled="!ToaddToCart.qty || ToaddToCart.qty>ToaddToCart.Stock"
          @click="SendRequest()"
        >Send Request</a-button>
        <a-button
          key="addToCart"
          :disabled="!ToaddToCart.qty || ToaddToCart.qty>ToaddToCart.Stock"
          type="primary"
          :loading="loading"
          @click="addToCart()"
        >Add to Cart</a-button>
      </template>
    </a-modal>
    <a-modal v-model="visibleImage" on-ok="handleOk">
      <!-- <v-img height="320" contain class="grey darken-4" /> -->
      <a-carousel arrows dots-class="slick-dots slick-thumb" autoplay>
        <a slot="customPaging" slot-scope="props">
          <img height="15" contain class="grey darken-4" :src="getImgUrl(props.i)" />
        </a>
        <div v-for="item in viewImageURLs" :key="item">
          <img height="250" contain class="grey darken-4" :src="item" />
        </div>
      </a-carousel>
    </a-modal>
  </div>
</template>

<script>
// import ProductCategories from "../components/ProductCategories";
import localdb from "../local/db";
export default {
  name: "Home",
  components: {
    // ProductCategories
  },
  data() {
    return {
      loading: false,
      visible: false,
      visibleImage: false,
      viewImageURLs: [],
      productItems: [],
      UoM: [],
      Categories: [],
      selectedCategory: 0,
      ToaddToCart: {}
    };
  },
  created() {
    this.getProductItems();
  },
  computed: {
    viewProductItems() {
      return this.productItems
        .filter(rec => {
          if (!this.selectedCategory) {
            return rec;
          } else {
            return rec.ProductCategory === this.selectedCategory;
          }
        })
        .map(rec => {
          rec.UoMName = this.UoM.filter(UoM => {
            return rec.UoM === UoM.value;
          })[0].text;
          return rec;
        })
        .map(rec => {
          rec.ProductCategoryName = this.Categories.filter(PC => {
            return rec.ProductCategory === PC.value;
          })[0].text;
          return rec;
        });
    },
    remainingStocks() {
      if (!this.ToaddToCart.qty) {
        return this.ToaddToCart.Stock;
      } else {
        return this.ToaddToCart.Stock - this.ToaddToCart.qty;
      }
    }
  },
  methods: {
    getImgUrl(i) {
      console.log(i);
      return "https://www.vuemastery.com/images/vuemastery-white.svg";
    },
    viewImages(imageurl) {
      this.visibleImage = true;
      this.viewImageURLs = imageurl;
    },
    SendRequest() {
      console.log("SendRequest:", this.ToaddToCart);
      this.ToaddToCart.Stock = this.ToaddToCart.Stock - this.ToaddToCart.qty;
      console.log("stock", this.ToaddToCart.Stock);
      this.visible = false;
    },
    addToCart() {
      console.log("addToCart:", this.ToaddToCart);
      this.visible = false;
    },
    requestSupplies(item) {
      console.log("requestSupplies:", item);
      this.ToaddToCart = Object.assign({}, item);
      this.visible = true;
    },
    getProductItems() {
      this.productItems = localdb.ProductItems;
      this.UoM = localdb.UoM;
      this.Categories = localdb.productCategories;
    }
  }
};
</script>

<style scope>
/* h3 {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px;
  height: 1.2em;
  white-space: nowrap;
  padding-top: 2%;
} */
/* div{
  width : 100px;
  overflow:hidden;
  display:inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
} */
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>