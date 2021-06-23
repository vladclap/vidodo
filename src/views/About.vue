<template>
  <div class="about">
    <ImageCropper :src="img"></ImageCropper>
  </div>
</template>

<script>
import ImageCropper from "@/components/ImageCropper";
export default {
  name: 'About',
  components: { ImageCropper },
  data: ()=>({
    img: require('@/assets/nature-img.jpg')
  }),
}
</script>