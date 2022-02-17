<template>
  <div text-center>
    <Navigation />
    <div class="image">
      <div class="olubolu">
        <p class="text-danger">Used goods wholesale</p>
      </div>
    </div>
    <div class="button">
      <div
      :title="msg"
      @click.prevent="Price"
      class="btn1">You`ve found the right place!</div>
    </div>
    <div class="describe">
      <div class="text-center">
        <p>Start your own</p>
        <p>second hand business,</p>
        <p>affordable and easy.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./nav.vue";
// import Logo from "../NuxtLogo.vue";
export default {
  components: {
    Navigation,
    // Logo
  },
  data() {
    return {
      isAct: true,
      msg: 'Click for a Pricelist'
    };
  },
  mounted() {
  },
  methods: {
    Price() {
      return this.$router.push('/pricelists')
    }
  },
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    },
  },
};
</script>

<style lang="scss" scoped>
.image{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .olubolu{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 212px;
    height: 200px;
    background-image: url("../../static/olubolu.png");
    background-size: contain;
    p{
      margin-bottom: 60px;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
  }
}
.button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: bold;

    .btn1{
      cursor: pointer;
      padding: 8px 16px;
      background: radial-gradient(336% 3024.98% at 50% 50%, #FF4444 0%, rgba(172, 202, 108, 0) 100%);
      border-radius: 30px;
    }
  }
  .describe{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    p{
      font-weight: bold;
      font-size: 25px;
      line-height: 25px;
      color: #CC0000;
    }
  }
.header {
  width: 100%;
  height: 40px;
  position: fixed;
  z-index: 1;
  display: flex;
  background-color: black;
  .container {
    width: 100%;
    margin: 0;
    .logo {
      cursor: pointer;
      position: absolute;
      margin-left: 50px;
      color: #c41919;
      @media (max-width: 900px) {
        margin-left: 20px;
      }
    }
  }
}

.prf {
  color: red;
  display: flex;
}
.prft {
  color: green;
  display: inline;
}
.radius {
  border-radius: 50%;
  color: rgb(252, 15, 15);
  cursor: pointer;
}
</style>
