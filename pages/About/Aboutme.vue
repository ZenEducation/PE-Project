<template>
  <kinesis-container
    is="div"
    id="animationsWrapper"
    easing="all 1.5s cubic-bezier(0,0,.2,1)"
  >
    <div class="text-body dark:bg-[#111] bg-[#f5f5f5] pt-[100px]">
      <aboutone />

      <div class="mb-[-140px] relative flex justify-center items-center">
        <div class="max-w-[970px] overflow-hidden">
          <img
            class="image hover:scale-110"
            src="/images/about/about-me/about-me-popup-video-poster.jpeg"
            alt="image"
          />
          <img
            class="youtube"
            src="/images/icons/icon-youtube-play.png"
            alt="icon"
          />
        </div>
      </div>
      <div
        class="imageWrapper mb-[-140px] relative flex justify-center items-center z-8877 max-w-[1200px] w-full h-56"
      >
        <!-- <kinesis-element class="absolute left-64 top-0 h-32" type="translate" :strength="100" :maxX="50" :originX="-50"
          :originY="0" :maxY="50">
          <yellow-cloud></yellow-cloud>
        </kinesis-element> -->

        <!-- dotted circle -->
        <!-- <kinesis-element class="absolute left-10 bottom-0 h-8" type="translate" :strength="10" maxX="2">
        <img src="@/public/images/shape-animation/shape-3.png" alt="dotted circle">
      </kinesis-element> -->

        <!-- dotted square -->
        <!-- <kinesis-element class="absolute right-10 top-0 h-8" type="translate" :strength="10" maxX="2">
        <img src="@/public/images/shape-animation/shape-1.png" alt="dotted circle">
      </kinesis-element> -->

        <!-- circle -->
        <!-- <kinesis-element class="absolute right-10 bottom-0 h-20" type="translate" :strength="10" maxX="10">
        <div class="h-20 w-20 border-8 rounded-full border-solid border-[#ecc5ab]"></div>
      </kinesis-element> -->
      </div>

      <div class="fill-white dark:fill-[#161821]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          height="100"
          width="100%"
        >
          <path
            class="elementor-shape-fill"
            d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
          ></path>
        </svg>
      </div>

      <div class="bg-white dark:blue">
        <abouttwo />
      </div>
    </div>
  </kinesis-container>
</template>

<script setup>
  import { KinesisContainer, KinesisElement } from 'vue-kinesis'
  import DottedCircle from '../HoverImages/DottedCircle.vue'
  import YellowCloud from '../HoverImages/YellowCloud.vue'

  definePageMeta({
    layout: 'frontend',
  })
  const show = ref(false)

  onMounted(() => {
    setTimeout(() => {
      show.value = true
    }, 2000)
  })
</script>

<style>
  .youtube {
    position: absolute;
    z-index: 9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* .image {
  margin-bottom: -140px !important;
} */

  .image {
    width: 100%;
    transition: all 1.5s cubic-bezier(0, 0, 0.2, 1);
    transform: scale(1);
  }

  .image::hover {
    transform: scale(1.1);
  }
</style>

<!-- <div class="shape scene shape-1" style="transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: none;"><span data-depth="3" style="transform: translate3d(-8.7px, -66.6px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;"><img src="/images/shape-animation/shape-2.svg" alt="shape image"></span></div> <div class="shape scene shape-2" style="transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: none;"><span data-depth="-3" style="transform: translate3d(6.8px, 52.4px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;"><img src="/images/shape-animation/shape-3.png" alt="shape image"></span></div> <div class="shape scene shape-3" style="transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: none;"><span data-depth="3" style="transform: translate3d(-3.5px, -26.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;"><img alt="shape image"></span></div> <div class="shape scene shape-4" style="transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: none;"><span data-depth="4" style="transform: translate3d(-8.7px, -66.8px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;"><img src="/images/shape-animation/shape-1.png" alt="shape image"></span></div> -->
