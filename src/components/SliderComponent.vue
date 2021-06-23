<template>
  <div>
    <div class="slider">
      <div class="slider__wrapper">
        <div class="slider__nav slider__nav_prev" @click="prevSlide"></div>
        <div class="slider__nav slider__nav_next" @click="nextSlide"></div>
        <div class="slider__pagination"></div>
        <div class="slider__current">{{currentState}}</div>
        <div :class="{'slider__content': true, 'slider__content_dragging': dragging}" ref="content" @mousedown.prevent="mouseDown">
          <div :class="{'slider__slide': true, 'slider__slide_current': slide.active}" v-for="slide of slides">
            <img :src="slide.img" alt="">
          </div>
        </div>
      </div>
      <div class="slider__thumbnails" @wheel="thumb" ref="thumb" @mousedown.prevent="mouseDownThumb">
        <div class="slider__thumb" v-for="(slide, index) of slides" @click="openSlide(index)">
          <img v-if="slide.thumb" :src="slide.thumb" alt="">
          <div v-else>{{index + 1}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SliderComponent",
  data: () => ({
    slides: [
      {
        img: require('@/assets/nature-img.jpg'),
        thumb: require('@/assets/nature-img.jpg'),
        active: true
      },
      {
        img: require('@/assets/nature-img2.jpg'),
        thumb: require('@/assets/nature-img2.jpg'),
        active: false
      },
      {
        img: require('@/assets/nature-img3.jpg'),
        thumb: require('@/assets/nature-img3.jpg'),
        active: false
      },
      {
        img: require('@/assets/nature-img3.jpg'),
        thumb: require('@/assets/nature-img3.jpg'),
        active: false
      }
    ],
    currentSlide: 0,
    lastClickX: null,
    dragging: false,
    draggingStartPosThumb: false,
  }),
  computed: {
    currentState() { return `${this.currentSlide + 1} / ${this.slides.length}` },
  },
  methods: {
    thumb(e) {
      console.log(e)
      console.dir(this.$refs.thumb)
    },
    openSlide(index) {
      this.currentSlide = index
      this.updateSlide()
    },
    nextSlide() {
      if (this.currentSlide !== this.slides.length - 1) {
        this.currentSlide++
      }
      this.updateSlide()
    },
    prevSlide() {
      if (this.currentSlide !== 0) {
        this.currentSlide--
      }
      this.updateSlide()
    },
    updateSlide() {
      for (let slide of this.slides) {
        slide['active'] = false
      }
      this.slides[this.currentSlide]['active'] = true
      let currentPos = this.$refs.content.clientWidth * this.currentSlide
      this.moveContent(-currentPos)
    },
    mouseDownThumb(e) {
      this.lastClickX = e.clientX
      this.draggingStartPosThumb = this.$refs.thumb.scrollLeft
      document.addEventListener('mousemove', this.mouseMoveThumb)
      document.addEventListener('mouseup', this.mouseUpThumb)
    },
    mouseMoveThumb(e) {
      let xDifference = this.lastClickX - e.clientX
      this.$refs.thumb.scrollLeft = this.draggingStartPosThumb + xDifference
    },
    mouseUpThumb() {
      document.removeEventListener('mousemove', this.mouseMoveThumb)
      document.removeEventListener('mouseup', this.mouseUpThumb)
    },
    mouseDown(e) {
      this.lastClickX = e.clientX
      this.dragging = true
      document.addEventListener('mousemove', this.mouseMove)
      document.addEventListener('mouseup', this.mouseUp)
    },
    mouseUp(e) {
      this.dragging = false
      setTimeout(()=>{
        let xDifference = this.lastClickX - e.clientX
        if (xDifference > 50) {
          this.nextSlide()
        } else if (xDifference < -50) {
          this.prevSlide()
        }
        document.removeEventListener('mousemove', this.mouseMove)
        document.removeEventListener('mouseup', this.mouseUp)

        this.updateSlide()
      },0)
    },
    mouseMove(e) {
      let currentPos = this.$refs.content.clientWidth * this.currentSlide
      let xDifference = (this.lastClickX - e.clientX) / -2 - currentPos
      this.moveContent(xDifference)
    },
    moveContent(xDifference) {
      this.$refs.content.style.transform = `translateX(${xDifference}px)`
    }
  }
}
</script>

<style scoped lang="scss">
.slider {
  width: 500px;
  height: 400px;
}

.slider__wrapper {
  position: relative;
  overflow: hidden;
  max-height: 100%;
}
.slider__nav {
  position: absolute;
  left: 20px;
  top: calc(50% - 20px);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
  &_next {
    left: auto;
    right: 20px;
  }
}
.slider__pagination {
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: 200px;
  height: 50px;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 2;
}
.slider__current {
  position: absolute;
  top: 40px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 2;
}
.slider__content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  transition: 0.3s;
  cursor: grab;
  &_dragging {
    transition: none;
    cursor: grabbing;
  }
}
.slider__slide {
  position: relative;
  //display: none;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  &_current {
    //display: block;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.slider__thumbnails {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  overflow-x: scroll;
}
.slider__thumb {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: calc(33.33% - 20px / 3 * 2);
  max-height: 100px;
  margin: 10px;
  background-color: #F0F0F0;
  img {
    max-width: 100%;
    max-height: 100px;
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>