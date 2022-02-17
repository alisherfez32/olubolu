<template>
  <div class="chat" :title="title">
    <a
      href="https://api.whatsapp.com/send?phone=6285694886172"
      class="fab"
      target="_blank"
    >
    <wsup />
  </a>
  </div>
</template>

<script>
import wsup from '../assets/wsup.vue'
  export default {
    components: {
      wsup
    },
    data() {
      return {
        title: "Click to Chat"
      }
    }
  }
</script>

<style lang="scss" scoped>
.chat{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 42px;
  height: 42px;
  right: 32px;
  bottom: 32px;
  z-index: 103;
  &:hover {
    transition: 1s;
  }

  .fab{
    width: 42px;
    height: 42px;
    color: rgb(139, 255, 6);

     &:hover {
       color: #15ff00;
       transition: 1s;
       transform: scale(1.3);
    }
  }
}

</style>
