<template>
  <div id="trans"
    class="px-[20px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] dark:bg-[#161821] rounded-md flex flex-col items-center text-center">
    <div class="h-[20rem]">
      <span class="mb-[24px] w-full p-1 flex justify-center">
      <slot name="cardIcon"></slot>
    </span>

    <h2 class="font-[700] text-[24px] text-secondary dark:text-white leading-[1.5]">
      <slot name="cardHead"></slot>
    </h2>

    <p class="font-[400] text-[15px] font-extralight font-body dark:text-[#ddd] leading-[1.6]">
      <slot name="cardP"></slot>
    </p>
    </div>

    <div class="group">
      <span class="flex items-center p-[5px] text-secondary dark:text-[#ddd] mt-[25px]  group-hover:text-[#ddd] group-hover:bg-[#20ad96] transition-all ease-in-out duration-500 group-hover:cursor-pointer group-hover:rounded-xl ">
      <h4 class="font-[700] text-[14px] mr-2  transition-all ease-in-out duration-500"><slot name="know"></slot></h4>
      <i class="fa-solid fa-arrow-right group-hover:pl-4 transition-all ease-in-out duration-500"></i>
    </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#trans:hover {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
