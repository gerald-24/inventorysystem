<template>
  <div>
    <a-row>
      <a-col v-for="col in 4" :key="col" :span="6">
        <v-card v-if="col===1">
          <center style="background-color:rgba(44, 163, 242, 0.96)">
            <span>UNITS</span>
          </center>
          <hr />
          <a-select v-model="unitIcon" default-value="mdi-file" style="width: 25%">
            <a-select-option v-for="item in icons" :key="item">
              <v-icon>{{item}}</v-icon>
            </a-select-option>
          </a-select>
          <a-input-search v-model="Unit" @search="addUnit()" style="width: 75%">
            <a-button slot="enterButton">
              <v-icon>mdi-plus-circle-outline</v-icon>
            </a-button>
          </a-input-search>
          <v-divider></v-divider>
          <v-list dense rounded height="250px">
            <v-list-item-group v-model="selectedUnit" color="primary">
              <v-list-item v-for="(item, i) in allUnits" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.unitIcon"></v-icon>
                </v-list-item-icon>
                <a-divider type="vertical"></a-divider>
                <v-list-item-content>
                  <v-list-item-title v-text="item.Name"></v-list-item-title>
                </v-list-item-content>
                <!-- <v-list-item-icon> -->
                <v-spacer></v-spacer>

                <a-popconfirm @confirm="saveUnit(item)" ok-text="Save">
                  <a-icon slot="icon" type="info-circle-o" style="color: blue" />
                  <template slot="title">
                    <a-select v-model="unitIcon" default-value="mdi-file" style="width: 25%">
                      <a-select-option v-for="item in icons" :key="item">
                        <v-icon>{{item}}</v-icon>
                      </a-select-option>
                    </a-select>
                    <a-input v-model="Unit" style="width: 75%" />
                  </template>
                  <a-button shape="circle" @click="editUnit(item)">
                    <v-icon>mdi-pencil-outline</v-icon>
                  </a-button>
                </a-popconfirm>

                <a-popconfirm @confirm="deleteUnit(item)">
                  <a-icon slot="icon" type="question-circle-o" style="color: red" />
                  <template slot="title">Are you sure?</template>
                  <a-button shape="circle" @click="editUnit(item)">
                    <v-icon>mdi-delete</v-icon>
                  </a-button>
                </a-popconfirm>
                <!-- </v-list-item-icon> -->
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
        <v-card v-if="col===2">
          <center style="background-color:rgba(44, 163, 242, 0.96)">
            <span>CATEGORIES</span>
          </center>
          <hr />
          <a-select v-model="catIcon" default-value="mdi-file" style="width: 25%">
            <a-select-option v-for="item in icons" :key="item">
              <v-icon>{{item}}</v-icon>
            </a-select-option>
          </a-select>
          <a-input-search v-model="Category" @search="addCategory()" style="width: 75%">
            <a-button slot="enterButton">
              <v-icon>mdi-plus-circle-outline</v-icon>
            </a-button>
          </a-input-search>
          <v-divider></v-divider>
          <v-list dense rounded height="250px">
            <v-list-item-group v-model="selectedCategory" color="primary">
              <v-list-item v-for="(item, i) in allCategory" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.catIcon"></v-icon>
                </v-list-item-icon>
                <a-divider type="vertical"></a-divider>
                <v-list-item-content>
                  <v-list-item-title v-text="item.Name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </a-col>
      <!-- <a-col :span="6">
        <v-card>b</v-card>
      </a-col>
      <a-col :span="6">
        <v-card>c</v-card>
      </a-col>
      <a-col :span="6">
        <v-card>d</v-card>
      </a-col>-->
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Unit: "",
      unitKey: "",
      unitIcon: "",
      allUnits: [],
      Category: "",
      catIcon: "",
      allCategory: [],
      selectedUnit: "",
      selectedCategory: "",
      pagination: { pageSize: 5, size: "small" },
      icons: ["mdi-file", "mdi-package", "mdi-bunk-bed-outline"]
    };
  },
  created() {},
  methods: {
    addUnit() {
      let unit = [];
      unit = this.allUnits.filter(r => {
        return r.Name === this.Unit;
      });
      console.log("unit", unit);
      if (unit.length == 0) {
        console.log("push");
        this.allUnits.push({
          // key:1,
          Name: this.Unit,
          unitIcon: this.unitIcon
        });
      }
    },
    saveUnit(data) {
      console.log("saveUnit", data);
    },
    deleteUnit(data) {
      console.log("deleteUnit", data);
    },
    editUnit(data) {
      this.unitKey = data.key;
      this.Unit = data.Name;
      this.unitIcon = data.unitIcon;
      console.log("editUnit", data, this.unitKey);
    },
    addCategory() {
      let category = [];
      category = this.allCategory.filter(r => {
        return r.Name === this.Category;
      });
      console.log("category", category);
      if (category.length == 0) {
        console.log("push");
        this.allCategory.push({
          Name: this.Category,
          catIcon: this.catIcon
        });
      }
    }
  }
};
</script>
<style scoped>
.v-list {
  height: 200px; /* or any height you want */
  overflow-y: auto;
}
</style>