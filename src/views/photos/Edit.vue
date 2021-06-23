<template>
  <div>
    <router-link :to="`/product/${id}`" class="back">Back to product content</router-link>
    <h1 class="page-title">
      Add Photos
    </h1>
    <div class="content-area">
      <div class="content-area__main">
        <div class="block text_lh_15">Use photos that highlight what’s unique about your experience and show travelers having fun. Adding 5-7 photos can increase your bookings.</div>
        <div class="photo photo_big photo_add photo_no-caption">
          <div class="photo__area"></div>
          <div class="photo__caption">Add caption</div>
        </div>
        <router-link :to="`/photos/${id}`" class="btn btn_primary btn_big btn_text_regular">
          Save &amp; continue
        </router-link>

      </div>
      <div class="content-area__sidebar content-area__sidebar_card sidebar">
        <div class="sidebar__icon sidebar__icon_camera"></div>
        <div class="block block_space_x">
          <div class="sidebar__subtitle">
            Do
          </div>
          <ul class="ul__custom ul__custom_ok">
            <li>Add 5+ photos</li>
            <li>Use only photos that you own</li>
            <li>Use candid photos of engaged travelers</li>
          </ul>
        </div>
        <div class="block block_space_xl">
          <div class="sidebar__subtitle">
            Don’t
          </div>
          <ul class="ul__custom ul__custom_no">
            <li>Use screenshots</li>
            <li>Add watermarks</li>
            <li>Use blurry or dark photos</li>
            <li>Use photo collages</li>
          </ul>
        </div>
        <a href="javascript:;" class="sidebar__bottom-btn">Examples of great photos</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  beforeCreate() {
    this.id = this.$route.params.id;
  },
}
</script>