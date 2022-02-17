<template>
  <div>
    <chat />
    <Header class="header_d"/>
    <div class="search_box">
      <div class="search_place">
        <fa class="search_loop" icon="binoculars" />
        <input
          v-model="search"
          type="text"
          placeholder="  I`m looking for..."
        />
      </div>
    </div>
    <div class="container">
      <Second-Content :post="post" v-for="post in companyData" :key="post.id"/>
    </div>
  </div>
</template>

<script>
// import SecondContent from '../components/SecondContent'
export default {
  name: 'App',
  components: {},
  data() {
    return {
      search: "",
      title: 'Olubolu • #1 in Used Clothes Wholesale. Check the PRICE LISTS for 100KG bales'
    }
  },
  head(){
    return {
      title:  this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Are you thinking to start a SECOND HAND BUSINESS?  We have all the SUPPORT you need. We are the #1 GRADE A USED CLOTHES, USED SHOES and USED BAGS wholesale supplier in bulk. Our CHEAP PRICES, LOW MOQ, LOTS OF OPTIONS and FAST SHIPPING is all you need to get your THRIFT STORE or SECOND HAND STORE BUSINESS up and running.'
        }
      ]
    }
  },
  async fetch({ store }) {
    if (store.getters['airtable/companyData'].length === 0) {
      await store.dispatch('airtable/fetch')
  }
  },
  async asyncData({$axios}){
    const Data = await $axios.get('https://api.airtable.com/v0/app3WmB2b7AQQ6Ufv/Batches?api_key=keyvkxyqdCw2v2FEK').then(el => {
      return el.data.records;
    })
    return {Data}
  },
  created(){
    // let dynamicRoutes = async () => {
    //   const res = await this.$axios.$get('https://api.airtable.com/v0/app3WmB2b7AQQ6Ufv/Batches?api_key=keyvkxyqdCw2v2FEK');
    //   console.log("RES", res);
    //   return res.records.map(product => `/products/${product.fields.pageName}`);
    // }
    // console.log("Dynamic", dynamicRoutes);
    // dynamicRoutes()
  },
  computed: {
  companyData() {
      return this.Data.filter((product) => {
          return (
            product.fields.description.toLowerCase().match(this.search.toLowerCase()) ||
            product.fields.location.toLowerCase().match(this.search.toLowerCase())
            // product.prize.toLowerCase().match(this.search.toLowerCase())
          )
        })
    },
    // companyData() {
    //   return this.$store.getters["airtable/companyData"].filter((product) => {
    //       return (
    //         product.fields.description.toLowerCase().match(this.search.toLowerCase()) ||
    //         product.fields.location.toLowerCase().match(this.search.toLowerCase())
    //         // product.prize.toLowerCase().match(this.search.toLowerCase())
    //       )
    //     })
    // },
  },
}
</script>

<style lang="scss" scoped>
.header_d{
  margin-bottom: 10px;
  color: #fff;
}
.search_box {
  width: 100%;
  height: 35px;
  justify-content: center;
  display: flex;
  align-items: center;

  .search_place {
    width: 80%;
    height: 100%;
    display: flex;
    transform: translate3d(-50%, 50%);
    background: #fff;
    border: 3px solid grey;
    border-radius: 15px;
    margin: 0;
    padding: 0;
    .search_loop {
      color: blue;
      float: left;
      margin-left: 5px;
      width: 20px;
      height: 100%;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
    input {
      width: 100%;
      border: none;
      background: none;
      outline: none;
      padding: 0;
      font-size: 16px;
      transition: 0.4s;
    }
  }
}
</style>
