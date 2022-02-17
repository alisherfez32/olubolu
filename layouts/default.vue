<template>
  <div>
    <Darkmode />
    <nuxt />
    <chat />
    <Footer />
  </div>
</template>

<script>
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
  export default {
    data() {
      return {
      }
    },
    // mounted(){
    //   firebase.auth().onAuthStateChanged(user => {
    //     this.$store.commit("updateUser", user);
    //     if(user){
    //       this.$store.dispatch("getCurrentUser")
    //       console.log(this.$store.state.email);
    //     }
    //   })
    // }
  }
</script>

<style lang="scss" scoped>

</style>
