<template>
  <div>
    <div class="parag">
    <p class="p1">Congratulations!</p>
    <p class="p2">You Have Just Submitted Your Carts!</p>
    <p class="p2">We will Respons for it as soon as possible!</p>
    <p class="p2">You Can Contact us here below for a More Information!</p>
    <p class="p3">Thank You!😊</p>
    <nuxt-link to="/">Back to Home.</nuxt-link>
    </div>
  </div>
</template>

<script>
import Darkmode from '../components/Darkmode.vue'
  export default {
  layout: "product",
  components: { Darkmode },
  }
</script>

<style lang="scss" scoped>
.parag{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .p1{
    font-weight: bold;
    font-size: 24px;
    color: red;
  }
  .p2{
    font-weight: bold;
    font-size: 20px;
    color: #48ff00;
  }
  .p3{
    font-weight: bold;
    font-size: 20px;
    color: red;
  }
}
</style>
