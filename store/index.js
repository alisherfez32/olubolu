import db from '../plugins/firebaseinit'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export const state = () => ({
  token: null,
  lastName: "",
  firstName: "",
  email: "",
  profileId: "",
  user: null,

})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
     setProfileInfo(state, doc) {
    state.firstName = doc.data().firstName;
    state.lastName = doc.data().lastName;
    state.email = doc.data().email;
  },
  setProfileInitials(state) {
    state.profileInitials =
    state.firstName.match(/(\b\S)?/g).join("") +
    state.lastName.match(/(\b\S)?/g).join("");
  },
  changeEmail(state, payload) {
    state.email = payload;
  },
  changeFirstName(state, paylaod) {
    state.firstName = paylaod;
  },
  changeLastName(state, paylaod) {
    state.lastName = paylaod;
  },
  updateUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await console.log(dispatch)
  },
  login({commit}) {
    commit('setToken', 'truetoken')
  },
  logout({ commit }) {
    commit('clearToken', 'truetoken')
  },
    //update with register information`s
  async updateProfile({ commit, state }) {
    const dataBase = db.collection('users').doc(firebase.auth().currentUser.uid)
    await dataBase.update({
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
    })
    commit("setProfileInfo")
   },
   //get current user who signed in
  async getCurrentUser({ commit }) {
    const dataBase = db.collection('users').doc(firebase.auth().currentUser.uid)
    const dbResult = await dataBase.get()
    commit("setProfileInfo", dbResult);
    commit("setProfileInitials");
  },
  //update profile with register.vue
  async updateUserSettings({ commit, state }) {
    const dataBase = db.collection('users').doc(firebase.auth().currentUser.uid)
    await dataBase.update({
    firstName: state.firstName,
    lastName: state.lastName,
    });
    commit("setProfileInfo")
    commit("setProfileInitials")
  }
}

export const getters = {
  hasToken: s => !!s.token,
}

export const strict = false
