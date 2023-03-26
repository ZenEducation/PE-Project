<template>
  <div class="container py-16 relative">
    <div>
      <headers class="mb-[60px]">
        <template v-slot:headerone>What does it mean when we say we are giving you</template>
        <template v-slot:headertwo>
          The Best Possible
          <span class="text-[#20AD96] font-[400] uppercase">Educational Service</span>
        </template>
      </headers>
    </div>

    <div class="relative z-[20]">
      <div
        class="relative overflow-hidden group z-20 rounded shadow-xxl shadow-black/[22%] max-w-[970px] mx-auto -bottom-[140px] -mt-[140px]">
        <!-- <img
          src="/images/about/about-me/about-me-popup-video-poster.jpeg"
          class="w-full transition-transform duration-1500 group-hover:scale-110"
          alt=""
        /> -->
        <iframe class="w-full transition-transform duration-1500 group-hover:scale-110"  height="400" :src="'https://www.youtube.com/embed/JWoWfzHowjI'" frameborder="0"
          allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>

      <ShapeWithAnimation imgSrc="/images/shape-animation/shape-2.svg"
        addClassName="absolute z-1 left-0 -top-[90px] w-[120px] h-[130px] md:-top-[120px] md:w-[226px] md:h-[226px]"
        dataDepth="4" />
      <ShapeWithAnimation addClassName="absolute z-[-99] top-0 left-5 w-[90px] h-[90px] md:w-auto md:h-auto" dataDepth="4"
        imgSrc="/images/shape-animation/shape-3.png" />
      <ShapeWithAnimation addClassName="absolute z-[-99] top-10 right-0" dataDepth="4"
        imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
      <ShapeWithAnimation addClassName="absolute z-[-99] bottom-[45px] right-5 w-[85px] md:w-auto" dataDepth="4"
        imgSrc="/images/shape-animation/shape-1.png" />
    </div>
  </div>
</template>