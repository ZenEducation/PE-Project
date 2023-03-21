<template>
  <div
    id="trans"
    class="
      px-[20px]
      pt-[40px]
      pb-[30px]
      w-12/12
      md:max-w-[300px]
      m-[4px]
      dark:bg-[#161821]
      rounded-md
      flex flex-col
      justify-center
      items-center
      text-center
    "
  >
    <span class="mb-[24px] w-full bg-secondary p-2 flex justify-center">
      <slot name="cardIcon"></slot>
    </span>

    <h2 class="font-[700] text-[24px] text-secondary dark:text-white leading-[1.5]">
      <slot name="cardHead"></slot>
    </h2>

    <p class="font-[400] text-[15px] font-extralight font-body dark:text-[#ddd] leading-[1.6]">
      <slot name="cardP"></slot>
    </p>

    <span class="flex items-center p-[5px] text-secondary dark:text-[#ddd] mt-[25px]">
      <h4 class="font-[700] text-[14px] mr-2">Start Here</h4>
      <icon name="uil:arrow-right" />
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#trans:hover {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>