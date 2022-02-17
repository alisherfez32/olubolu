<template>
  <div class="nav2">
  <div>
    <lines v-b-toggle.sidebar-no-header/>
    <!-- <b-button v-b-toggle.sidebar-no-header>Hello</b-button> -->
    <b-sidebar id="sidebar-no-header" bg-variant="dark"
    text-variant="light" title="Olubolu"
    aria-labelledby="sidebar-no-header-title" shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <p>
            Start your ownsecond hand business, affordable and easy.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click.prevent="Price">Our Pricelists😊</b-nav-item>
              <b-nav-item  @click.prevent="Share">Videos, Images && More..</b-nav-item>
              <b-nav-item  @click.prevent="About">Behind Olubolu</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
    </div>
    <p class="p2">Olubolu</p>
    <p class="p3" @click.prevent="Shop"><bag/></p>
  </div>
</template>

<script>
import bag from "../../assets/bag.vue"
import lines from "../../assets/lines.vue"
  export default {
    components: {
      bag,
      lines
    },
    methods: {
      Price() {
        return this.$router.push('/pricelists')
      },
      About() {
        return this.$router.push('/about')
      },
      Shop() {
        return this.$router.push('/pricelists/shops')
      },
      Share(){
        return this.$router.push('/sharing')
      }
    }
  }
</script>

<style lang="scss" scoped>

.nav2{
  background-color: red;
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-around;
  z-index: 102;
  @media only screen and (max-width: 450px){
    justify-content: space-between;
  }
  .p2{
    font-size: 18px;
    font-weight: bold;
  }
  .p3{
    color: #fff;
    margin-right: 4px;
  }
}
</style>
