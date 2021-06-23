<template>
  <input class="input input_search" type="text" ref="inputSearch">
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
const loader = new Loader({
  apiKey: "AIzaSyC4viWtBofqHACiUPly7WmxopLmfAi9t8U",
  version: "weekly"
});

export default {
  name: "MapInputAutocomplete",
  data: ()=>({
    inputText: '',
    autocomplete: null,
    place: null,
    lat: null,
    lng: null
  }),
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    autocompleteInit() {
      this.autocomplete = new google.maps.places.Autocomplete(
        this.$refs.inputSearch
      )
      this.autocomplete.addListener('place_changed', ()=>{
        this.place = this.autocomplete.getPlace()
        if (this.place.geometry) {
          this.lat = this.place.geometry.location.lat()
          this.lng = this.place.geometry.location.lng()
          this.$emit('place_changed', {
            lat: this.lat,
            lng: this.lng
          })
        } else {
          console.log('incorrect address')
        }
      })
    },
  },
  mounted() {
    if (this.value !== '') {
      this.inputText = this.value
    }
    this.autocompleteInit()
  },
  watch: {
    inputText(val) {
      this.value = val
    }
  },
}
</script>