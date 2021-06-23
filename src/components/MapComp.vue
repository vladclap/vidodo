<template>
  <div>
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader"
const loader = new Loader({
  apiKey: "AIzaSyC4viWtBofqHACiUPly7WmxopLmfAi9t8U",
  version: "weekly"
});

export default {
  name: "MapComp",
  props: ['value'],
  data: ()=>({
    map: null,
    mapPoints: []
  }),
  methods: {
    getAddressFromCords(lat, long) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyC4viWtBofqHACiUPly7WmxopLmfAi9t8U`)
        .then((response)=>{
          console.log(response)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    createMap(latitude = -34.397, longitude = 150.644) {
      this.map = new google.maps.Map(this.$refs.map, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      });
    },
    setMarker(latitude = -34.397, longitude = 150.644, radius = false) {
      let circle = null
      let marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: this.map,
        icon: require('@/assets/img/map-pin.svg')
      })
      this.map.setCenter({
        lat : latitude,
        lng : longitude
      });
      if (radius) {
        circle = new google.maps.Circle({
          fillColor: "#FF5134",
          fillOpacity: 0.5,
          strokeWeight: 0,
          center: { lat: latitude, lng: longitude },
          radius: radius,
          map: this.map
        })
        // setTimeout(()=>{circle.setRadius(1000)},1500)
      }
      return {marker: marker, circle: circle}
    },
    newMapPoint(cords, index, radius) {
      if (this.mapPoints[index]) {
        this.deleteMapPoint(index)
      }
      let point = this.setMarker(cords.lat, cords.lng, radius)
      this.mapPoints[index] = point
    },
    deleteMapPoint(index) {
      console.log('index', index)
      if (this.mapPoints[index]) {
        this.mapPoints[index].marker.setMap(null)
      }
      if (this.mapPoints[index].circle) {
        this.mapPoints[index].circle.setMap(null)
      }
      this.mapPoints.splice(index, 1)
    },
    editRadius(index, radius) {
      this.mapPoints[index].circle.setRadius(radius)
    },
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.createMap(position.coords.latitude, position.coords.longitude)
          this.getAddressFromCords(position.coords.latitude, position.coords.longitude)
        },
        positionError => {
          this.createMap()
          console.log(positionError)
        }
      )
    } else {
      this.createMap()
    }
  },
}
</script>

<style scoped>

</style>