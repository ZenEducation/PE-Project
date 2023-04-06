

<template>
  <div class="w-full m-0 bg-[#EAE1D6] dark:bg-[#111] py-16 flex justify-center items-center relative">
    <div class="w-11/12 flex flex-col justify-center items-center">
      <div class="w-8/12 md:w-6/12 mb-[60px]">
        <headers>
          <template v-slot:headerone
            >Maximize Your Potentials and Possibilities</template
          >
          <template v-slot:headertwo>
            Your Best Shot at
            <span class="text-[#20AD96] font-[400]">Academic Excellence</span>, Like These People
          </template>
        </headers>
      </div>

      <Rates />
      <testimonials />
      <Senses />
    </div>
        <div
      class="bottom-shape absolute -bottom-px left-0 w-full h-[70px] z-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        height="100"
        class="w-full h-full fill-white"
      >
        <!-- <path d="M 0 0 L100 0 Q 50 200 0 0"></path> -->
      </svg>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>