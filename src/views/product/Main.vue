<template>
  <div>
    <div class="list" v-if="eventData">
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">Photos</div>
          <div class="photos">
            <div class="photos__item"></div>
            <div class="photos__item"></div>
            <div class="photos__item"></div>
            <div class="photos__item"></div>
            <div class="photos__item photos__item_empty"></div>
          </div>
        </div>
        <router-link :to="`/photos/${id}`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">Product Setup</div>
          <div class="block" v-if="eventData.lang">
            <b>Input Language:</b> {{ eventData.lang }}
          </div>
          <div class="block">
            <b>Product Title:</b> {{ eventData.title }}
          </div>
          <div class="block" v-if="eventData.refCode">
            <b>Product reference code:</b> {{ eventData.refCode }}
          </div>
        </div>
        <router-link :to="`/product/${id}/setup`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">
            Meeting &amp; pickup
            <div class="h4__subtitle">
              We meet all travelers at a starting point
            </div>
          </div>
          <div class="block block_space_x">
            <div class="block">
              <b>Meeting point</b>
            </div>
            <div class="block">
              adress
            </div>
          </div>
          <div class="block">
            <b>Meeting instructions</b>
          </div>
          <div class="block">
            We will meet up at our surf shop RED STAR SURF on the main road of Caleta de Famara. The Address is Avenida el Marinero 9.
          </div>
        </div>
        <router-link :to="`/meetings/${id}`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">Categories &amp; themes</div>
          <div class="block">
            <b>Product types:</b> Activity
          </div>
          <div class="block">
            <b>Activities:</b> Surfing
          </div>
          <div class="block">
            <b>Themes:</b> Sport, Adrenaline &amp; Extreme, Outdoors
          </div>
        </div>
        <router-link :to="`/themes/${id}`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">Activities details</div>
          <div class="block block_space_x">
            <div class="block">
              <b>Activity location</b>
            </div>
            <div class="block">
              Famara, Spain
            </div>
          </div>
          <div class="block block_space_x">
            <div class="block">
              <b>Activity description</b>
            </div>
            <div class="block">
              Learn how to surf from scratch on Playa Famara, Europe’s best beach break for beginner and intermediate surfes. <span class="show"></span>
            </div>
          </div>
          <div class="block">
            <b>Duration:</b> 2 hours 30 minutes
          </div>
          <div class="block">
            <b>Attraction:</b> Famara Beach
          </div>
        </div>
        <router-link :to="`/activity/${id}`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">What makes this activity unique?</div>
          <div class="block block_space_x text_lh_15">
            Our surf in Famara was established in 2010 and, since 2014, every year we have been awarded with the Tripadvisor Certificate of Excellence! <div class="show"></div>
          </div>
          <div class="block">
            <b>Groupe type:</b> Not private (shared)
          </div>
          <div class="block">
            <b>Max travelers per product:</b> 10
          </div>
        </div>
        <router-link :to="`/product/${id}/unique`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">Inclusions &amp; exclusions</div>
          <div class="block block_space_x">
            <div class="block">
              <b>What’s included</b>d
            </div>
            <div class="block">
              <span class="img-text img-text_ok">Surf board, wetsuit, rush vest</span>
            </div>
          </div>
          <div class="block block_space_x">
            <div class="block">
              <b>What’s excluded</b>
            </div>
            <div class="block">
              No exclusions added
            </div>
          </div>
        </div>
        <router-link :to="`/product/${id}/provide`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">Guides and languages</div>
          <div class="block block_space_x">
            <div class="block">
              <b>Languages offered:</b> Spanish, English, French
            </div>
            <div class="block">
              <span class="img-text img-text_ok">Guide is licensed or certified</span>
            </div>
          </div>
        </div>
        <router-link :to="`/guides/${id}`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">Information travelers need from you</div>
          <div class="block block_space_x">
            <div class="block">
              <b>Accessibility</b>
            </div>
            <div class="block">
              <span class="img-text">Not wheelchair accessible</span>
            </div>
            <div class="block">
              <span class="img-text">Near public transportation</span>
            </div>
          </div>
          <div class="block option-group">
            <div class="option-title">Health restrictions</div>
            <ul class="dot text_lh_15">
              <li>No Back Problems</li>
              <li>No Expectant Mothers</li>
              <li>No Serious Medical Conditions</li>
              <li>Not recommended for travellers who can’t swim at least 50m</li>
            </ul>
          </div>
          <div class="block block_space_x">
            <div class="block">
              <b>Level of difficulty</b>
            </div>
            <div class="block">
              Most travelers can participate
            </div>
          </div>
          <div class="block block_space_x">
            <div class="block">
              <b>Your phone number</b>
            </div>
            <div class="block">
              ES +34 928 52 88 08
            </div>
          </div>
        </div>
        <router-link :to="`/info/${id}`" class="btn btn_text_sm">Edit</router-link>
      </div>
      <div class="list__item">
        <div class="list__item-content">
          <div class="h4">COVID-19 health and safety measures</div>
          <div class="block option-group">
            <div class="option-title option-title_text_regular">You have added the following safety features</div>
            <ul class="dot text_lh_15">
              <li>Face masks required for travelers in public areas</li>
              <li>Face masks required for guides in public areas</li>
              <li>Hand sanitizer available to travelers and staff</li>
            </ul>
            <div class="show"></div>
          </div>
        </div>
        <router-link :to="`/covid/${id}`" class="btn btn_text_sm">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: ()=>({
    eventData: undefined
  }),
  methods: {
    getEventData() {
      this.eventData = this.$store.state.event.events[this.id]
    }
  },
  beforeCreate() {
    this.id = this.$route.params.id;
  },
  async created() {
    this.getEventData()
    if (typeof this.eventData == 'undefined') {
      console.log('событие ещё не загружено')
      await this.$store.dispatch('getEventById', this.id)
        .then((res)=>{
          this.getEventData()
          console.log(this.eventData)
        })
    }
  }
}
</script>