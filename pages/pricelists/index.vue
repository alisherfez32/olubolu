<template>
<div>
  <div class="container">
    <slider class="slider"/>
    <div class="search">
      <b-form-input placeholder="I`m searching for..." type="search" v-model="search"></b-form-input><fa class="fa" icon="search" />
    </div>
    <Second-Content :post="post" v-for="post in Data" :key="post.id"/>
  </div>
</div>
</template>

<script>
export default {
  name: "index",
  layout: "product",
  data() {
    return{
      search:"",
      title: 'Olubolu • #1 in Used Clothes Wholesale. Check the PRICE LISTS for 100KG bales'
    }
  },
  head(){
    return{
      title: this.title
    }
  },
  async fetch({ store }) {
    if (store.getters['airtable/companyData'].length === 0) {
      await store.dispatch('airtable/fetch')
    }
  },
  async asyncData({$axios}){
    const Data1 = await $axios.get('https://api.airtable.com/v0/app3WmB2b7AQQ6Ufv/Batches?api_key=keyvkxyqdCw2v2FEK').then(el => {
      return el.data.records;
    })
    return {Data1}
  },
  computed: {
    Data(){
        return this.Data1.filter((product) => {
          return (
            product.fields.description.toLowerCase().match(this.search.toLowerCase()) ||
            product.fields.location.toLowerCase().match(this.search.toLowerCase())
          )
        })
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  .search {
    display: flex;
    flex-direction: row;
    width: 100%;

    .fa{
      width: 20px;
      height: 30px;
      color: red;
      margin-left: 1px;
    }
  }
}

.slider{
  margin-bottom: 10px;
  border-radius: 10px;
}
</style>
