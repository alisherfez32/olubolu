<template>
  <div class="dark">
    <button v-if="!dark" @click="changeColorMode"><fa class="fa" icon="moon"/>
    </button>
    <button v-else @click="changeColorMode"> <fa class="fa" icon="sun" />
    </button>
  </div>
</template>

<script>
  export default {
    name: "Darkmode",
    data() {
      return {
        dark: true
      }
    },
    computed: {
    },

    methods: {
       changeColorMode() {
        this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light';
        this.dark = !this.dark
    },
    }

  }
</script>

<style lang="scss" scoped>
.dark{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 32px;
  height: 32px;
  left: 32px;
  bottom: 32px;
}
button {
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 12px 20px;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    filter: brightness(90%);
  }
}
</style>
