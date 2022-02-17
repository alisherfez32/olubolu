
export const state = () => ({
  produts: [],
  // result: []
})

export const mutations = {
  setToCart(state, payload) {
    if(state.produts.length) {
      let isHad = false;
      state.produts.map((item) => {
        if (item.id === payload.id) {
          isHad = true;
        }
      })
      if (!isHad) {
        state.produts.push(payload);
      }
    } else {
      state.produts.push(payload)
    }
    // state.produts.push(payload)
  },
  Increment(state, index) {
    state.produts.find((bq) => {
      if (bq.id === index) {
        bq.fields.quantity++;
      }
    })
    // state.produts[index].quantity++;
  },
  Decrement(state, index) {
    state.produts.find(bq => {
      if (bq.fields.quantity >= 1 && bq.id === index) {
        bq.fields.quantity--;
      }
    })
    // if (state.produts[index] > 1) {
    //   state.produts[index].quantity--;
    // }
  },
  deleteCart(state, payload) {
    state.produts.splice(payload,1)
  },
  Result(state, payload) {
    state.result = payload;
  },
  AddToList(payload) {
  }

}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await console.log(dispatch)
  },
  AddToCart({ commit}, product) {
    commit("setToCart", product)
  },
  async AddToStorage({commit }, item) {
    // const data = localStorage.getItem("Test!")
    // const parse = JSON.parse(data)
    // console.log(parse);
    // if (parse !== null || undefined || NaN) {
    //   let isHad = false;
    //   parse.produts.find((items) => {
    //     if (items.id === item.id) {
    //       isHad = true;
    //     }
    //     if (!isHad) {
    //     commit("AddToList", item);
    //   }
    //   })
    // } else {
    //   commit("AddToList", item)
    // }
  },
  DeleteCart({ commit }, id) {
    commit("deleteCart", id)
  },
  Decrement({ commit }, index) {
    commit("Decrement", index)
  },
  Increment({ commit }, index) {
    commit("Increment", index)
  },
  // Remove({ commit }, result) {
  //   commit("Result", result)
  // }
}

export const getters = {
  productData: s => s.produts,
  // result: s => s.result
}
