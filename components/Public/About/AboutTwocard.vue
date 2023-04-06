<template>
  <div
    id="trans"
    class="px-[20px] py-[30px] w-12/12 md:max-w-[500px] m-[4px] blue rounded-md flex flex-col justify-center items-center text-center"
  >
    <span class="mb-[24px]">
      <slot name="cardIcon"></slot>
    </span>

    <h2 class="font-[700] text-[20px] text-white leading-[1.5]">
      <slot name="cardHead"></slot>
    </h2>

    <p class="font-[400] mt-4 text-[15px] text-[#ddd] leading-[1.6]">
      <slot name="cardP"></slot>
    </p>

    <span class="flex items-center p-[5px] text-[#ddd] mt-[25px]">
      <h4 class="font-[700] text-[14px] mr-2">Start Here</h4>
      <icon name="uil:arrow-right" />
    </span>
  </div>
</template>


<style>
#trans:hover {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>