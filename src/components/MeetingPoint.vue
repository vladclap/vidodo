<template>
  <div class="block block_space_xxl elem_w_750">
    <ul class="meeting-list">
      <li class="meeting-list__item" v-for="(item, index) of value">
        <div class="meeting-list__title">
          Meeting point
          <div class="meeting-list__controls" v-if="index > 0">
            <a href="javascript:;" class="meeting-list__btn" @click="remove(index)">
              remove
            </a>
          </div>
        </div>
        <div class="search-line">
          <map-input-autocomplete v-model="item.name" @place_changed="placeChanged($event, index)"></map-input-autocomplete>
          <a href="javascript:;" class="search-line__btn"></a>
        </div>
        <textarea class="option" v-model="item.description"></textarea>
      </li>
    </ul>
    <div class="block block_space_xl">
      <a href="javascript:;" class="text_acc" @click="add"><b>+ Add another meeting point</b></a>
    </div>
    <map-comp ref="map"></map-comp>
  </div>
</template>

<script>
import MapComp from "@/components/MapComp";
import MapInputAutocomplete from "@/components/MapInputAutocomplete";
export default {
  name: "MeetingPoint",
  props: ['value'],
  components: { MapInputAutocomplete, MapComp },
  data: ()=>({
    map: {
      pointList: [],
      points: []
    }
  }),
  methods: {
    add() {
      this.value.push({
        name: 'name',
        description: 'description'
      })
    },
    remove(index) {
      this.value.splice(index, 1)
      this.$refs.map.deleteMapPoint(index)
    },
    placeChanged(payload, index) {
      this.$set(this.value[index], 'cords', payload)
      this.map[index] = payload
      this.$refs.map.newMapPoint(payload, index)
    }
  },
}
</script>

<style scoped>

</style>