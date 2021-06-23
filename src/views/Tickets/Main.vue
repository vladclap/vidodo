<template>
  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="title">Tickets details</div>
        <div class="text">
          <p class="text-ticket">Mobile or peper ticket accepted</p>
          <p class="text-calendar">One per booking</p>
        </div>
      </div>
      <router-link to="/product/tickets/details" class="btn">Edit</router-link>
    </div>
    <div class="list__item">
      <div class="list__item-content">
        <div class="title">Tickets redemption</div>
        <div class="text">
          <div class="ticket-code">
            <p>Exchange requirements</p>
            <p>xxxxx xxxxx x x xxxx xxxxx x xxx xxxx x x x x x</p>
          </div>
          <br>
          <div class="ticket-code">
            <p><b>Special instructions</b></p>
            <p>xxxxx xxxxx x x xxxx xxxxx x xxx xxxx x x x x x</p>
          </div>
        </div>
      </div>
      <router-link to="/product/tickets/redemption" class="btn">Edit</router-link>
    </div>
    <div class="list__item ticket__preview">
      <div class="list__item-content">
        <div class="title">Tickets preview</div>
        <div class="text">
          Click the button to change or remove your logo
        </div>
        <div class="preview__mobile">
          <p><b>Preview mobile</b></p>
          <img :src="require('@/assets/img/prev-ticket.png')" alt="">
        </div>
        <div class="preview__paper">
          <p><b>Preview paper</b></p>
          <div class="preview__paper-block">
            <div class="preview__paper-block-white">

            </div>
          </div>
        </div>
      </div>
      <router-link to="/product/tickets/preview" class="btn">Edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>