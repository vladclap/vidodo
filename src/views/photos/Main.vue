<template>
  <div>
    <router-link :to="`/product/${id}`" class="back">Back to product content</router-link>
    <h1 class="page-title">
      Add Photos
    </h1>
    <div class="content-area">
      <div class="content-area__main">
        <div class="block text_lh_15">Use photos that highlight what’s unique about your experience and show travelers having fun. Adding 5-7 photos can increase your bookings.</div>
        <div class="photo photo_big photo_edit">
          <div class="photo__area" :style="'background-image:url('+require('@/assets/img/sber-img.jpg')+');'">
            <div class="photo__controls">
              <button @click="openPopup" class="photo__btn">Cover</button>
              <button class="photo__btn photo__btn_delete"></button>
            </div>
          </div>
          <div class="photo__caption" contenteditable="">Add caption</div>
        </div>
        <div class="photo-row">
          <router-link tag="div" :to="`/photos/${id}/edit`" class="photo photo_sm photo_add">
            <div class="photo__area"></div>
            <div class="photo__caption" contenteditable="">Add caption</div>
          </router-link>
          <div class="photo photo_sm">
            <div class="photo__area"></div>
            <div class="photo__caption" contenteditable="">Add caption</div>
          </div>
          <div class="photo photo_sm photo_edit">
            <div class="photo__area" :style="'background-image:url('+require('@/assets/img/sber-img.jpg')+');'">
              <div class="photo__controls">
                <button class="photo__btn">Cover</button>
                <button class="photo__btn photo__btn_delete"></button>
              </div>
            </div>
            <div class="photo__caption" contenteditable="">Add caption</div>
          </div>
        </div>
        <div class="block text_lh_15">
          By uploading this photo, I verify that I am the owner or lawful licensee of the copyright in this photograph and I accept the <a href="javascript:;" class="text_gray">Vidodo Supplier Agreement</a> &amp; <a href="javascript:;" class="text_gray">xxxxxxx Terms of Use.</a>
        </div>
        <router-link :to="`/product/${id}`" class="btn btn_primary btn_text_regular">
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
import ImageCropper from "@/components/ImageCropper";

export default {
  name: "Main",
  methods: {
    openPopup() {
      this.$store.commit('changeEditPhoto', require('@/assets/nature-img.jpg'))
      this.$modals.open({
        component: ImageCropper,
        className: 'vu-modal__cmp--photo'
      })
    }
  },
  beforeCreate() {
    this.id = this.$route.params.id;
  },
}
</script>