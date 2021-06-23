<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="big-title title">Here's a preview of your tickets</div>
        <ul class="tab__list tab__list-content">
          <a href="javascript:;" class="tab__link active" id="prev-mobile-ticket-btn"><li>Preview mobile</li></a>
          <a href="javascript:;" class="tab__link" id="prev-paper-ticket-btn"><li>Preview paper</li></a>
        </ul>
        <div class="block block-content" id="prev-mobile-ticket">
          <div class="text">
            <p class="optional">Add your company logo</p>
            <br>
            <p class="text_acc"><b>Upload file</b></p>
            <p class="prompt no-indent">Upload your company logo</p>
          </div>
          <div class="preview__mobile">
            <img :src="require('@/assets/img/prev-ticket.png')" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="save__ccontinue">
      <router-link to="/product/tickets" class="btn-save">Save &amp; continue</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview"
}
</script>