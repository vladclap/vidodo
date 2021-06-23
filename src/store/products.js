import axios from "axios";

export default {
  state: {
    products: null
  },
  actions: {
    getAllProducts({dispatch, commit}, {lang}) {
      if (lang) {
        lang = 'en'
      }
      axios.get('/api/events/page_lang=' + lang)
        .then((response)=>{
          console.log(response)
        })
    },
    getUserProducts({dispatch, commit}, {lang, id}) {
      if (lang) {
        lang = 'en'
      }
      axios.post(`/api/events/id=${id}/page_lang=${lang}`)
        .then((response)=>{
          console.log(response)
        })
    }
  }
}