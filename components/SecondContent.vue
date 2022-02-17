<template>
  <div class="content text-center">
    <div class="batch" @click.prevent="Open(name)">
      <p>{{post.fields.Name}}</p>
    </div>
      <div class="picture" @click.prevent="Open(name)" :title="msg">
        <img class="image" :src="url" alt="The Picture Of SecondHand">
    </div>
    <!-- <div class="description">
      <p class="p1">{{post.fields.description}}</p>
    </div> -->
    <div class="price">
      <p class="p3">{{post.fields.prize}}</p>
    </div>
    <div class="collections">
      <p class="p5">Products collected from:</p>
      <div class="flags">
        <img src="../static/south1.png" alt="">
        <img src="../static/japan.png" alt="">
        <img src="../static/germany.png" alt="">
        <img src="../static/taiwan.png" alt="">
        <img src="../static/united1.png" alt="">
      </div>
    </div>
    <div class="quality">
      <p class="p4"><fa icon="thumbtack"/> {{post.fields.location}}</p>
      <p class="p6">{{post.fields.items}} items</p>
    </div>
  </div>
</template>

<script>
import us from "../assets/flags/us.vue"
  export default {
    props: ['post'],
    components: {
      us,
    },
    data() {
      return {
        search: "",
        name: this.$props.post.fields.pageName,
        url: "",
        msg: "Click to go " + this.$props.post.fields.pageName,
      }
    },

    computed: {
    },
    mounted(){
      this.$props.post.fields.image.forEach(el => {
        return this.url = el.url
      })
    },
    methods: {
      Open(name){
        this.$router.push('/pricelists/'+ name);
      }
    }
  }
</script>

<style lang="scss" scoped>
.content {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  float: left;
  max-width: 500px;
  max-height: 500px;
  // height: 400px;
  border-radius: 8px;
  border: 1px solid grey;
  padding: 4px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 300px){
    margin: 4px;
    width: 125px;
  }
  @media screen and (max-width: 400px) and (max-height: 900px){
    width: 165px;
    height: 250px;
  }
  @media
  (min-device-width: 800px)
  and (max-device-width: 1280px) {
    width: 200px;
    height: 250px;
  }
  @media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2) {
    margin: 8px;
    width: 140px;
    height: 250px;
  }
  @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2) {
        width: 150px;
        height: 250px;
      }
    @media screen and (min-width: 1024px) and (min-height: 1320px) {
     /* iPad Pro */
     width: 200px;
     height: 300px;
    }
     @media screen and (min-width: 1024px) and (max-height: 1310px) {
     /* Laptop */
    width: 250px;
    height: 350px;
   }
  .batch {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    top: 42px;
    height: 20px;
    width: 95px;
    background-color: red;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 101;
    @media screen and (max-width: 400px){
      top: px;
    }
    p{
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
  .picture {
    z-index: 1;
    top: 0;
    width: 100%;
    cursor: pointer;
    @media screen
     and (device-width: 360px)
     and (device-height: 640px)
     and (-webkit-device-pixel-ratio: 2) {
     height: 96px;
     }
       @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2) {
        height: 90px;
      }
    @media screen and (max-width: 400px) {
    height: 100px;
    }
    @media screen and (min-width: 1024px) and (min-height: 1320px) {
     /* iPad Pro */
     height: 150px;
    }
     @media screen and (min-width: 1024px) and (max-height: 1310px) {
     /* Laptop */
     height: 160px;
   }
    .image {
      width: 100%;
      height: 150px;
    @media screen
     and (device-width: 360px)
     and (device-height: 640px)
     and (-webkit-device-pixel-ratio: 2) {
     height: 96px;
     }
       @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 667px)
      and (-webkit-min-device-pixel-ratio: 2) {
        height: 90px;
      }
      @media screen and (max-width: 400px) {
      height: 80px;
      }
      @media screen and (max-width: 1000px) and (min-height: 920px) {
      /* iPad Pro */
      height: 150px;
      }
       @media screen and (min-width: 1024px) and (max-height: 1310px) {
       /* Laptop */
      height: 180px;
   }
    }
  }
  .description{
    display: flex;
    flex-direction: column;
    .p1{
      font-size: 14px;
    }
    .p2{
      font-size: 14px;
    }
  }
  .price{
    font-size: 20px;
    font-weight: bold;
    color: rgb(255, 0, 0);
  }
  .collections{
    .flags{
      .flags-flag{
        width: 16px;
        height: 16px;
      }
    }
  }
  .quality{
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px) and (max-height: 1310px) {
     /* Laptop */
     margin-top: 20px;
   }
    .p4{
      font-size: 14px;
      margin-right: 32px;
      @media only screen and (max-width: 400px){
        margin-right: 28px;
        font-size: 13px;
      }
    }
    .p6{
      font-size: 14px;
    }
  }
}
</style>
