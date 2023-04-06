<template>
  <div
    id="trans"
    class="px-[20px] group cursor-pointer pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] dark:hover:bg-[#3f3a64] hover:bg-white rounded-md flex flex-col justify-center items-center text-center"
  >
    <span class="mb-[24px] p-2 w-full flex justify-center">
      <slot name="cardIcon"></slot>
    </span>

    <h2 class="font-[700] text-[24px] text-[#3f3a64] dark:text-white leading-[1.5]">
      <slot name="cardHead"></slot>
    </h2>

    <p class="font-[400] text-[15px] dark:text-[#ddd] leading-[1.6]">
      <slot name="cardP"></slot>
    </p>

    <span class="flex items-center p-[5px] group-hover:text-primary text-[#8C89A2] dark:text-[#ddd] mt-[25px]">
      <h4 class="font-[700] text-[14px] mr-2">Start Here</h4>
      <i class="fa fa-arrow-right" />
    </span>
  </div>
</template>


<style>
#trans:hover {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>