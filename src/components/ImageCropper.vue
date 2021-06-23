<template>
  <div class="image-crop">
    <div class="title image-crop__title">
      Position, crop, or rotate your photo
    </div>
    <div class="image-crop__wrapper">
      <img ref="image" :src="loadedImg" class="image-crop__img">
    </div>
    <div class="image-crop__controls">
      <a href="javascript:;" class="image-crop__btn-rotate" @click="rotate">
        Rotate
      </a>
      <a href="javascript:;" class="btn btn_primary" @click="ok">
        ok
      </a>
    </div>
    <img v-if="destination" :src="destination" style="max-width: 100%">
  </div>
</template>

<script>
import Cropper from "cropperjs"
export default {
  name: "ImageCropper",
  props: ['src'],
  data: ()=>({
    cropper: {},
    destination: null,
    image: {},
    loadedImg: null
  }),
  methods: {
    rotate() {
      this.cropper.rotate(90)
    },
    ok() {
      const canvas = this.cropper.getCroppedCanvas()
      this.destination = canvas.toDataURL('image/jpeg')
    }
  },
  mounted() {
    if (this.src) {
      this.loadedImg = this.src
    } else if (this.$store.state.editPhoto) {
      this.loadedImg = this.$store.state.editPhoto
    }
    this.image = this.$refs.image
    setTimeout(()=>{
      this.cropper = new Cropper(this.image, {
        zoomable: false,
        scalable: false,
        aspectRatio: 7 / 2
      })
    },0)
  }
}
</script>