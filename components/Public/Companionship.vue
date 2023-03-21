<template>
  <div class="w-full lg:w-8/12">
    <h4
      class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
    >
      <slot name="headerone"></slot>
    </h4>
    <h2
      class="mb-4 text-[28px] lg:text-[48px] text-white font-[700] leading-[56px]"
    >
      <slot name="headertwo"></slot>
    </h2>
    <p class="text-[#ddd] text-[15px] leading-[1.74] mb-5 mt-[30px]">
      <slot name="content"></slot>
    </p>
    <button
      class="text-[14px] text-white font-bold px-12 py-4 mt-[30px] bg-[#20ad96] rounded-md"
    >
      Get trial courses
    </button>
  </div>
</template>