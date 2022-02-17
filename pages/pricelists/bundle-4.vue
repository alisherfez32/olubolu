<template>
  <div class="container">
    <SlideBar :URL="URL"/>
    <div class="example">
     <div class="bundle">
       <p class="p20">Bundle 4</p>
       <p class="p21"><fa class="fa" icon="globe" />Jiangsu Province</p>
     </div>
     <div class="origin">
       <p>Products origin: </p>
       <div class="flags">
        <img src="../../static/south1.png" alt="sk">
        <img src="../../static/japan.png" alt="Jap">
        <img src="../../static/germany.png" alt="Ger">
        <img src="../../static/taiwan.png" alt="Tai">
        <img src="../../static/united1.png" alt="US">
       </div>
     </div>
     <div class="see_more"
     @click.prevent="showMore"
      v-if="!show">
       <p>See More</p>
       <p><fa class="fa" icon="angle-down" /></p>
     </div>
      <div class="describe text-center" v-else>
        <table class="table stacked table-striped center">
          <caption>Description</caption>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <ul>
              <td><li>{{item.name}}</li></td>
              <td>{{item.id}}</td>
              </ul>
            </tr>
          </tbody>
        </table>
        <p @click.prevent="showMore"><fa class="fa" icon="angle-up" /></p>
      </div>
    </div>
    <div class="filter">
      <button @click.prevent="FilterByAll" class="dddd btn btn-danger">All</button>
      <button
        v-for="filter in filters"
        :key="filter.id"
        @click.prevent="FilterPosts(filter.name)"
        class="dddd btn btn-danger"
      >
      <span v-html="filter.div"></span>
      </button>
    </div>
    <div class="products">
      <table class="table table-striped font-weight-bold">
        <thead class="thead-dark text-center">
          <tr>
            <th>Product</th>
            <th>Price/100kg</th>
            <th>Qnty</th>
            <th>Add</th>
          </tr>
        </thead>
        <spinner v-show="spinner"/>
        <tbody class="text-center">
          <tr v-for="item of Data" :key="item.id">
            <td>{{ item.fields.Name }}<fa @click="showMsgOk(item.fields.image)" class="fa" icon="eye"/></td>
            <td>
              <fa class="fa" icon="dollar-sign" /> {{ item.fields.prize }}
            </td>
            <td class="quantity">
              <fa class="fa" @click.prevent="Decrement(item.id)" icon="minus" />
              {{ item.fields.quantity }}
              <fa class="fa" @click.prevent="Increment(item.id)" icon="plus" />
            </td>
            <td>
              <button
                @click.once="AddToCard(item) && makeToast()"
                class="btn btn-primary"
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="check_card">
      <button @click.prevent="openCart" class="button">
        <!-- <bag class="fa"/> -->
        <fa icon="cart-plus"/>
        Check Your Cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import bag from '../../assets/bag.vue'
import sun from '../../assets/emoji/sun.vue'
export default {
  name: 'Batch1',
  layout: 'product',
  components: {
    bag, sun
  },
  data() {
    return {
      Data: [],
      spinner: null,
      URL: [],
      url: '',
      show: null,
      items: [
        {name: 'Total',
        id: '58 items'},
        {name: 'MOQ',
        id: '100kg'},
        {name: 'Port',
        id: 'Guaghou'},
        {name: 'Grade',
        id: 'A, B, C'},
        {name: 'Packaging',
        id: 'Transparent/White Woven'},
        {name: 'Volume Discount',
        id: ''}
      ],
      main: 'Korean second hand clothes!',
      click: 'Click for more ...',
      filters: [
       {name: 'Winter', id: 1, div: '❄️'},
       {name:'Summer', id: 2, div: '🔆'},
       {name:'Male', id: 3, div: `♂️`},
       {name: 'Female', id: 4, div: `♀️`},
       {name:'Children', id: 5, div: `👼`},
       {name: 'Other', id: 6, div: `✔️`}
      ],
      title: 'Olubolu | Batch1',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  // async fetch({store}){
  //   if(store.getters["products/1/productData"].length === 0){
  //     await store.dispatch("products/1/first")
  //   }
  // },
  async fetch() {
    this.spinner = true;
    const Data = await this.$axios
      .get(
        'https://api.airtable.com/v0/app3WmB2b7AQQ6Ufv/B4Sumzao?api_key=keyvkxyqdCw2v2FEK'
      )
      .then((el) => {
        return el.data.records
      })
    this.Data = await Data;
    this.Slide()
    this.spinner = false;
    // return { Data }
  },
  created() {
  //   console.log(this.Data);
  //   return this.Data.forEach((el) => {
  //     if(el.fields.image){
  //       return el.fields.image.forEach(e => {
  //         return this.URL.push(e.url)
  //      })
  //     }
  //  })
  },
  methods: {
    Slide(){
      return this.Data.forEach((el) => {
      if(el.fields.image){
        return el.fields.image.forEach(e => {
          return this.URL.push(e.url)
       })
      }
   })
    },
    ...mapActions({
      // first: "products/1/first",
      AddToCart: 'products/shops/AddToCart',
      // FilterPosts1: "products/1/FilterPosts",
      Decrement1: 'products/shops/Decrement',
      Increment1: 'products/shops/Increment',
    }),
    makeToast() {
      this.$bvToast.toast(`Your Total carts is ${this.Popup.length}`, {
        title: 'Total Carts',
        autoHideDelay: 2000,
      })
    },
    showMore(){
      this.show = !this.show;
    },
    async AddToCard(item) {
      await this.AddToCart(item)
      this.$set(item.fields, 'quantity', 1)
    },
    async FilterPosts(value) {
     this.Data = this.Data.filter((item) => {
        return item.fields.filtered.indexOf(value) > -1
      })
      // this.$fetch()
      //   await this.first();
      //   await this.FilterPosts1(value)
    },
    FilterByAll() {
      this.$fetch()
    },
    Decrement(index) {
      this.Decrement1(index)
    },
    Increment(index) {
      this.Increment1(index)
    },
    openCart(){
     return this.$router.push('/pricelists/shops')
    },
    showMsgOk(image) {
       if(image){
        image.forEach(el =>{
          return this.url = el.url
        })
       }else{

       }
        const h = this.$createElement
        // Using HTML string
        const titleVNode = h('div', { domProps: { innerHTML: '<b>Secondhand`s image</b>' } })
        // More complex structure
        const messageVNode = h('div', { class: ['foobar'] }, [
          h('b-img', {
            props: {
              src: this.url,
              thumbnail: true,
              center: true,
              fluid: true, rounded: 'lg'
            }
          })
        ])
        // We must pass the generated VNodes as arrays
        this.$bvModal.msgBoxOk([messageVNode], {
          title: [titleVNode],
          buttonSize: 'sm',
          centered: true, size: 'sm'
        })
        this.url='';
    }
  },
  computed: {
    ...mapGetters({
      // Data: "products/1/productData",
      Popup: 'products/shops/productData',
    }),
  },
}
</script>

<style lang="scss" scoped>
.dddd{
  max-width: 62px;
  height: 32px;
}
.container {
  .Mmain {
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      flex-direction: row;
    }
    width: 100%;
    height: 300px;
    min-height: 350;
    .img_1 {
      width: 100%;
      height: 100%;
      margin-right: 10px;
      margin-top: 10px;

      .frame {
        width: 100%;
        height: 100%;
      }
    }
  }
  .example {
    margin-top: 5px;
    width: 100%;
    display: flex;
    // align-items: center;
    flex-direction: column;
    padding: 1px;
    margin-top: 10px;
    margin-bottom: 5px;
    overflow: hidden;

    .bundle{
      display: flex;
      width: 100%;
      justify-content: space-between;

      .p20{
        font-weight: 500;
        font-size: 36px;
        line-height: 20px;
      }
      .p21{
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
      }
    }
    .origin{
      margin-top: 20px;
      p{
        font-weight: normal;
        font-size: 26px;
        line-height: 20px;
      }
      .flags{
        padding: 5px;
        img{
          margin-right: 10px;
          height: 40px;
          width: 40px;
        }
      }
    }
    .see_more{
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all 0.5s ease;
      p{
        font-size: 20px;
        font-weight: 550;

      }
      .fa {
        width: 36px;
        height: 36px;
      }
    }
    .describe {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      @media screen and (max-width: 400px) {
        font-size: 14px;
      }
      @media screen and (min-width: 1024px) and (min-height: 1320px) {
        /* iPad Pro */
        font-size: 18px;
      }
      @media screen and (min-width: 1024px) and (max-height: 1310px) {
        /* Laptop */
        font-size: 26px;
      }

      p {
        .fa{
          width: 36px;
          height: 36px;
        }
      }
    }
  }
  .filter {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      @media screen and (max-width: 400px) {
        //phone
        margin-right: 5px;
        margin-bottom: 3px;
      }
      @media screen and (min-width: 1024px) and (min-height: 1320px) {
        /* iPad Pro */
        margin-right: 10px;
        margin-bottom: 5px;
      }
      @media screen and (min-width: 1024px) and (max-height: 1310px) {
        /* Laptop */
        margin-left: 20px;
        margin-bottom: 5px;
        margin-right: 20px;
      }
    }
  }
  .check_card{
    display: flex;
    width: 80%;
    justify-content: flex-end;
    color: #fff;
    // margin-right: 40px;

    .button{
      color: #fff;
      width: 205px;
      height: 44px;
      border-radius: 20px;
      background-color: red;
      border: none;
    }
  }
}
.table {
  font-size: 18px;
}
.input {
  height: 32px;
  width: 32px;
  border-radius: 4px;

  &:hover {
    border: 2px solid #3652cc;
  }
  &:focus {
    border: 2px solid #3652cc;
  }
}
.fa {
  color: red;
  margin-right: 2px;
  margin-left: 2px;
  cursor: pointer;
}
.quantity {
  font-size: 22px;
}
caption{
  font-size: 32px;
  font-weight: 600;
  color:red;
  caption-side: top;
}
</style>
