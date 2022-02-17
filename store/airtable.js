
export const state = () => ({
  company: [],
})

export const mutations = {
  addData(state, payload) {
    state.company.push(payload)
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await console.log(dispatch)
  },
  async fetch({ commit, state}) {
    const user = await this.$axios.$get(
      "https://api.airtable.com/v0/app3WmB2b7AQQ6Ufv/Batches?api_key=keyvkxyqdCw2v2FEK"
    );
    const data = await user.records.forEach(record => {
      if (!state.company.some(post => post.id === record.id)) {
        const date = record
        commit("addData", date)
      }
    })
    return data;
  },
}

export const getters = {
  companyData: s => s.company,
}

