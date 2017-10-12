import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  questions: []
}
// parameter state disetip method wajib ada, selanjutnya optional
const mutations = {
  setQuestion (state, payload) {
    state.questions = payload
  },
  deleteQuestion (state, payload) {
    console.log('mutations delete ', payload)
    //mengambil data yang ada di state question selain payload iteuh di var filterQuestion
    const filterQuestion = state.questions.filter((question) => question._id !== payload)
    // state.questions nilainya di override dgn filterQuestion
    state.questions = filterQuestion
  },
  mtDeleteAnswerByIdQuestion(state, payload){
    console.log('mutations mtDeleteAnswerByIdQuestion delete ', payload)
  }
}
// parameter context extend dari object store diantaranya commit gunanya untuk menjalankan mutation harus ada
const actions = {
  getAllQuestion ({ commit }) {
    axios.get('http://localhost:3000/questions')
    .then(({ data }) => {
      console.log(data)
      commit('setQuestion', data)
    })
    .catch(err => console.log(err))
  },
  deleteOneQuestion ({ commit }, questionId) {
    console.log("data masuk", questionId);
    axios.delete(`http://localhost:3000/questions/${questionId}`)
    .then(({ data }) => {
      console.log(data)
      commit('deleteQuestion', questionId)
    })
    .catch(err => console.log(err))
  },
  deleteAnswerByIdQuestion({commit},questionId){
    console.log("data masuk", questionId);
    axios.delete(`http://localhost:3000/answers/question/${questionId}`)
    .then(({ data }) => {
      console.log(data)
      commit('mtDeleteAnswerByIdQuestion', questionId)
    })
    .catch(err => console.log(err))
  }
}
// kayak computed dikomponent
const getters = {
  articlesCount (state) {
    return state.questions.length
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
