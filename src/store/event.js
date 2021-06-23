import axios from "axios";

export default {
  state: {
    events: {
      test: {
        title: 'Suf lesson for beginners in famara',
        refCode: 'half day surf lesson',
        translate: false,
        lang: 'English',
        meetingsAndPickup: {
          meet: 'We pickup all travelers',
          where: ['Ports', 'Airports']
        },
        included: [
          { name: 'included 1' },
          { name: 'included 2' },
          { name: 'included 3' },
        ],
        excluded: [
          { name: 'excluded 1' },
          { name: 'excluded 2' },
          { name: 'excluded 3' },
        ],
        info: {
          restrictions: [
            {
              name: 'Not recommended for travelers with back problems',
              value: false
            },
            {
              name: 'Not recommended for pregnant travelers',
              value: false
            },
            {
              name: 'Not recommended for travelers with heart problems or other serious medical conditions\n',
              value: false
            },
          ],
          accessibility: [
            {
              name: 'Is it Wheelchair accessible?',
              value: true
            },
            {
              name: 'Is all transportation wheelchair accessible?',
              value: true
            },
            {
              name: 'Are all surfaces wheelchair accessible (no uneven terrain, stairs, etc.)?',
              value: true
            },
            {
              name: 'Is it stroller accessible?',
              value: true
            },
            {
              name: 'Are service animals allowed?',
              value: true
            },
            {
              name: 'Can travelers easily arrive/depart on public transportation?',
              value: true
            },
            {
              name: 'Are infants required to sit on laps?',
              value: true
            },
            {
              name: 'Are infant seats available?',
              value: true
            },
          ],
          phoneNumber: [ 35, null ],
          difficulty: null,
        },
        covid: {
          beingTaken: [
            {
              name: 'Face masks required for travelers in public areas',
              value: false
            },
            {
              name: 'Face masks required for guides in public areas\n',
              value: true
            },
            {
              name: 'Face masks provided for travelers',
              value: false
            },
            {
              name: 'Hand sanitizer available to travelers and staff',
              value: false
            },
            {
              name: 'Social distancing enforced throughout experience',
              value: false
            },
            {
              name: 'Regularly sanitized high-traffic areas',
              value: false
            },
            {
              name: 'Gear/equipment sanitized between use',
              value: false
            },
            {
              name: 'Transportation vehicles regularly sanitized',
              value: false
            },
          ],
          regularlySanitized: [
            {
              name: 'Guides required to regularly wash hands',
              value: false
            },
            {
              name: 'Regular temperature checks for staff',
              value: true
            },
            {
              name: 'Temperature checks for travelers upon arrival',
              value: false
            },
            {
              name: 'Paid stay-at-home policy for staff with symptoms',
              value: false
            },
            {
              name: 'Contactless payments for gratuities and add-ons',
              value: false
            },
          ],
          safetyMeasures: ''
        },
        guides: {
          audioOrWrittenGuides: false,
          languages: [
            {
              lang: 'English'
            },
            {
              lang: 'Spanish'
            },
            {
              lang: 'French'
            },
            {
              lang: 'German'
            },
            {
              lang: 'Italian'
            },
          ]
        }
      },
    },
    currentEvent: 'test'
  },
  mutations: {
    setEvent(state, payload) {
      if (payload && payload.id && payload.title) {
        state.events[payload.id] = payload
        return payload.id
      } else {
        console.log('invalid data')
        return false
      }
    },
    updateEvent(state, payload) {
      if (payload && payload.id) {
        state.events[payload.id] = payload
        return payload.id
      } else {
        console.log('invalid data')
        return false
      }
    }
  },
  actions: {
    getEventById({ rootState, commit }, payload) {
      return axios.get(`https://api.active-test.tech/api/event?event_id=${payload}`)
        .then((res)=>{
          console.log(res)
          res.data.id = payload
          commit('setEvent', res.data)
        })
    },
    getMyEventList({rootState, commit, state}) {
      axios.post('https://api.active-test.tech/api/my', {
        data: {
          "user_id" : rootState.auth.userId
        }
      }, {
        headers: {
          'Authorization': 'Bearer ' + rootState.auth.token,
        }
      })
        .then((response)=>{
          for (let i in response.data) {
            commit('setEvent', response.data[i])
          }
          console.log(state)
        })
    },
    updateEvent({ rootState, commit }, payload) {
      let data = payload
      data.lng = 'en'
      data.event_id = payload.id
      delete data.id
      if (rootState.auth.token) {
        return axios.request({
          url: 'https://api.active-test.tech/api/addeventdesc',
          data: {
            data: data
          },
          method: 'post',
          headers: {
            'Authorization': 'Bearer ' + rootState.auth.token,
          }
        })
          .then((res)=>{
            commit('updateEvent', payload)
            console.log(res)
          })
      } else {
        console.log('Невозможно создать новое событие. Авторизация не выполнена.')
      }
    },
    addEvent({rootState, commit, dispatch}, payload) {
      if (rootState.auth.token) {
        return axios.request({
          url: 'https://api.active-test.tech/api/addevent',
          data: {
            "data": {
              "title": "title",
              "date_from":"2021-01-01",
              "date_to":"2021-03-01",
              "begin_time":"08:00:00",
              "duration":"300",
              "crew":"5",
              "active":"1",
              "repeat":"1",
              "price":"1337",
              "user_id": rootState.auth.userId
            }
          },
          method: 'post',
          headers: {
            'Authorization': 'Bearer ' + rootState.auth.token,
          }
        }).then((i)=>{
          dispatch('updateEvent', {
            id: i.data['event_id'] + '',
            title: payload.title
          })
          commit('setEvent', {
            id: i.data['event_id'],
            title: payload.title,
            lang: payload.lang,
            translate: payload.translate,
            refCode: payload.refCode
          })
          return i.data['event_id']
        })
      } else {
        console.log('Невозможно создать новое событие. Авторизация не выполнена.')
      }
    },
  }
}