export const state = () => ({
  produts: [],
})

export const mutations = {
  addData(state, payload) {
    state.produts.push(payload);
  },
  FilterPosts(state, value) {
    state.produts = state.produts.filter((item) => {
      return item.fields.filtered.indexOf(value) >-1;
    })
  }
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await console.log(dispatch)
  },
  // async first({ commit, state }) {
  //   // CHANGE URL
  //   // const url = "https://api.airtable.com/v0/appm14iDufsPAsPii/Batch1?api_key=keyvkxyqdCw2v2FEK"\
  //   const url = "https://api.airtable.com/v0/app3WmB2b7AQQ6Ufv/B1Summer?api_key=keyvkxyqdCw2v2FEK"
  //   const user = await this.$axios.$get(url);
  //   const data = user.records.forEach((record) => {
  //     if (!state.produts.some(post => post.id === record.id)) {
  //       const date = record;
  //       commit("addData", date)
  //     }
  //   })
  //   return data;
  // },
  async FilterPosts({ commit }, value) {
    commit("FilterPosts", value);
  }
}
export const getters = {
  productData: s => s.produts,
}
