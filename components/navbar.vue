<template>
  <div class="container text-center">
    <div class="Nnavbar">
      <div class="nav_olubolu">
        <div class="nav_olubolu_1"></div>
      <p>used goods wholesale</p>
      </div>
      <b-nav pills>
      <b-button variant="primary" class="nav_item"><nuxt-link class="home" to='/pricelists/shops'><store/>: {{Data.length}}</nuxt-link></b-button>
      <b-button variant="primary" class="nav_item" v-if="back"><a @click.prevent="$router.back()">Go Back</a></b-button>
      <b-button variant="primary" class="nav_item"><nuxt-link class="home" to='/'>Home</nuxt-link></b-button>
      <b-dropdown id="dropdown-left" text="Bundles" variant="primary" class="drop_down">
        <b-dropdown-item class="drop_item"><nuxt-link class="drop_item" to='/pricelists/bundle-1'>Bundle 1</nuxt-link></b-dropdown-item>
        <b-dropdown-item class="drop_item"><nuxt-link class="drop_item" to='/pricelists/bundle-2'>Bundle 2</nuxt-link></b-dropdown-item>
        <b-dropdown-item class="drop_item"><nuxt-link class="drop_item" to='/pricelists/bundle-3'>Bundle 3</nuxt-link></b-dropdown-item>
        <b-dropdown-item class="drop_item"><nuxt-link class="drop_item" to='/pricelists/bundle-4'>Bundle 4</nuxt-link></b-dropdown-item>
        <b-dropdown-item class="drop_item"><nuxt-link class="drop_item" to='/pricelists/bundle-5'>Bundle 5</nuxt-link></b-dropdown-item>
      </b-dropdown>
    </b-nav>
    </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
import store from '../assets/store.vue'
export default {
  layout: "product",
  components: {
    store
  },
  data() {
    return {
      back: false,
    }
  },
  computed: {
    ...mapGetters({
      Data: "products/shops/productData"
    }),
  },
  created() {
    if(this.$route.name === 'products-shops'){
      this.back = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.Nnavbar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 400px){

  }
  width: 100%;
  height: 42px;
  background-color: rgb(255, 35, 35);
  margin-right: 10px;

  .nav_olubolu{
    display: flex;
    flex-direction: row;
    p{
      font-size: 18px;
      @media screen and (max-width: 400px) {
        font-size: 0;
      }
      @media screen and (min-width: 400px) and (max-width:768px){
        font-size: 14px;
      }
      @media screen and (min-width: 992px) {
        font-size: 20px;
      }
    }
    .nav_olubolu_1{
      width: 100px;
      height: 100%;
      background-image: url("../static/olubolu1.png");
      background-size: contain;
      @media screen and (max-width: 400px){
        width: 80px;
      }
    }
  }

  .nav_item {
    margin-right: 5px;
    margin-top: 1px;
  }

  .drop_down {
   margin-top: 1px;

    .drop_item {
      text-decoration: none;

      &:hover {
        background-color: #646992;
      }
    }
  }
}

.home{
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #fff;
}
</style>
