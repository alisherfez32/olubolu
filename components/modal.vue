<template>
  <div>
    <div class="modal">
      <slot @click="showMsgOk"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
      this.email = "";
    },
    showMsgOk() {
        const h = this.$createElement
        // Using HTML string
        const titleVNode = h('div', { domProps: { innerHTML: 'Title from <i>HTML<i> string' } })
        // More complex structure
        const messageVNode = h('div', { class: ['foobar'] }, [
          h('p', { class: ['text-center'] }, [
            ' Flashy ',
            h('strong', 'msgBoxOk'),
            ' message ',
          ]),
          h('p', { class: ['text-center'] }, [h('b-spinner')]),
          h('b-img', {
            props: {
              src: 'https://picsum.photos/id/20/250/250',
              thumbnail: true,
              center: true,
              fluid: true, rounded: 'circle'
            }
          })
        ])
        // We must pass the generated VNodes as arrays
        this.$bvModal.msgBoxOk([messageVNode], {
          title: [titleVNode],
          buttonSize: 'sm',
          centered: true, size: 'sm'
        })
    }
  },
};
</script>

<style lang="scss" scoped>
// .modal {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1001;
//   position: absolute;
//   // width: 100%;
//   // height: 100%;
//   top: 1%;
//   left: 1%;
//   background-color: #000000b3;
//   overflow: scroll;

//   .modal-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     border-radius: 8px;
//     // width: 300px;
//     // padding: 40px 30px;
//     background-color: #fff;

//     p {
//       text-align: center;
//       font-family: "Patua One", cursive;
//       font-size: 24px;
//     }
//     button {
//       width: 80px;
//       background-color: #5465ff;
//       border: 2px solid #5465ff;
//       border-radius: 5px;
//       color: #fff;
//       font-family: "Patua One";
//       font-size: 14px;
//       cursor: pointer;
//     }
//   }
// }
</style>
