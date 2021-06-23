<template>
  <div class="wrapper main__wrapper">
    <router-link to="/product" class="back">Back to product content</router-link>
    <h1 class="page-title">
      Create pricing schedules
    </h1>
    <div class="block block_space_xxl elem_w_750">
      <div class="pricing-block">
        <div class="pricing-block__line pricing-block__line_date">
          Oct 31, 2020 - no end date
          <div class="pricing-block__edit">
            <div class="pricing-block__edit-options">
              <a href="javascript:;" class="pricing-block__edit-btn">Edit prices</a>
              <a href="javascript:;" class="pricing-block__edit-btn">Add start times</a>
              <a href="javascript:;" class="pricing-block__edit-btn">Add new prices</a>
              <a href="javascript:;" class="pricing-block__edit-btn">Add new prices</a>
            </div>
          </div>
        </div>
        <div class="pricing-block__line">
          Sun, Mon, Tue, Wed, Thu, Fri, Sat
          <br>
          1:00am, 1:30pm
          <br>
          Adult: €20,00
          <br>
          Child: €0,00
          <div class="pricing-block__edit">
            <div class="pricing-block__edit-options">
              <a href="javascript:;" class="pricing-block__edit-btn">Edit prices</a>
              <a href="javascript:;" class="pricing-block__edit-btn">Add start times</a>
              <a href="javascript:;" class="pricing-block__edit-btn">Add new prices</a>
              <a href="javascript:;" class="pricing-block__edit-btn">Add new prices</a>
            </div>
          </div>
        </div>
      </div>
      <div class="block block_space_x">
        <a class="text_acc" href="javascript:;">
          <b>+ Add another</b>
        </a>
      </div>
      <div class="delimiter block_space_xl"></div>
      <div class="block text_gray">Note: prices above are suggested retail prices</div>
    </div>
    <div class="block block_space_xxl elem_w_750">
      <div class="pricing-block pricing-block_add">
        <div class="pricing-block__add">
          <div class="pricing-block__text">
            <div class="block"><b>Add another option</b></div>
            <div class="block">
              An option is a unique version of your product that offers specific languages, starting points, or customizations.
            </div>
          </div>
          <div class="pricing-block__controls">
            <a href="javascript:;" class="btn">
              + Add option
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing"
}
</script>