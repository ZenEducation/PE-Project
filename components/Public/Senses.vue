<template>
  <div class="public-container py-16  w-full ">
    <div>
      <headers class="mb-[60px]">
        <template v-slot:headerone>What does it mean when we say we are giving you</template>
        <template v-slot:headertwo>
          The Best Possible
          <span class="text-[#20AD96] font-[400] uppercase">Educational Service</span>
        </template>
      </headers>
    </div>

    <div class="bg-red-500 w-full ">
      <ShapeWithAnimation imgSrc="/images/shape-animation/shape-2.svg"
        addClassName="absolute z-[-99] left-0 -top-[90px] w-[120px] h-[130px] md:-top-[120px] md:w-[226px] md:h-[226px]"
        dataDepth="4" />
      <ShapeWithAnimation addClassName="absolute z-[1] top-0 left-5 w-[90px] h-[90px] md:w-auto md:h-auto" dataDepth="4"
        imgSrc="/images/shape-animation/shape-3.png" />
      <ShapeWithAnimation addClassName="absolute z-[-99] top-10 right-0" dataDepth="4"
        imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
      <ShapeWithAnimation addClassName="absolute z-[-99] bottom-[45px] right-5 w-[85px] md:w-auto" dataDepth="4"
        imgSrc="/images/shape-animation/shape-1.png" />
    </div>

    <div class="relative  h-[560px] w-[970px] overflow-hidden mx-auto ">
      <div
        class="relative overflow-hidden group z-20 rounded shadow-xxl shadow-black/[22%] max-w-[970px] mx-auto -bottom-[140px] -mt-[140px] videoSec  
        h-[560px] w-[970px] flex justify-center items-center cursor-pointer
         "
         @click="video=true"
         >
     
      <i class="fa-brands fa-youtube text-[70px] text-red-600" ></i>

    


      </div>

      
    </div>
    <div class="">
  
    </div>
  </div>
  <div class=" w-screen h-screen  videoSection" v-if="video">
    <div class=" w-full h-full flex justify-center items-center cover backgropund">
      <div class="">
        <div class="text-right"  @click="video=false">
          <i class="fa-sharp fa-regular fa-circle-xmark text-white cursor-pointer"></i>
        </div>
        <iframe class="transition-transform duration-1500 group-hover:scale-105" width="970" height="570"
          :src="'https://www.youtube.com/embed/JWoWfzHowjI'" frameborder="0" allow="autoplay; encrypted-media"
          allowfullscreen></iframe>
          </div>
    </div>
   </div>
</template>

<script setup>
const video = ref(false)

</script>


<style scoped>
.videoSec{
  background-image: url('@/assets/images/poster.png');
  background-position: center;
  background-repeat: no-repeat;
  transition-duration: 1s;

}
.videoSec:hover{
  transform: scale(1.08);
  transition-duration: 1s;

}
.videoSection{
  z-index: 500000000000;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  position: fixed;
}
.backgropund{
  background: rgba(0, 0, 0, 0.705);
}
</style>