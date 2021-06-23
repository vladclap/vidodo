<template>

  <div class="list">
    <div class="list__item">
      <div class="list__item-content">
        <div class="title">Booking process</div>
        <div class="text">
          Cut-off time: None
          <br>
          Confirmation method: instant confirmation
          <br>
          Notification emails for each booking: Yes
        </div>
      </div>
      <router-link to="/product/booking/process" class="btn">Edit</router-link>
    </div>
    <div class="list__item">
      <div class="list__item-content">
        <div class="title">Cancellation policy</div>
        <div class="text">
          Policy type: Standard
          <br>
          To receive a full refund, travelers may cancel
          up to 24 hours before the experience start date
          in the local timezone. No refunds will be given
          after that time period.
          <br>
          <br>
          Other post-booking policies
          <br>
          You may reserve the right to cancel a customer’s
          booking for a full refund in case of:
          <ul class="dot-orange dot">
            <li>Bad weather</li>
          </ul>
        </div>
      </div>
      <router-link to="/product/booking/cancellation" class="btn">Edit</router-link>
    </div>
    <div class="list__item">
      <div class="list__item-content">
        <div class="title">Pricing Type</div>
        <div class="text">
          <p class="text-indent">Adults age: 18 - 64</p>
          <p class="text-indent">Children age: 5 - 12</p>
          <p class="text-indent">Youth age: 13 - 17</p>
          <p class="text-indent">Seniors age: 65 - 100</p>
          <p class="text-indent">Max travelers per booking: 8</p>
        </div>
      </div>
      <a href="javascript:;" class="btn">Edit</a>
    </div>

    <div class="list__item">
      <div class="list__item-content">
        <div class="title">Information you need from travelers</div>
        <div class="text">
          We automatically collect:
          <ul class="ul-wrapper dot-orange dot">
            <li>Lead Traveler’s Name</li>
            <li>Phone Number</li>
          </ul>
          <br>
          You also need:
          <ul class="dot-orange dot">
            <li>Full Names</li>
          </ul>
        </div>
      </div>
      <router-link to="/product/booking/info-from-travelers" class="btn">Edit</router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "Main"
}
</script>