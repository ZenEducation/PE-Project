<template>
  <div class="emd:w-[370px] p-3 rounded-lg bg-transparent">
    <span>
      <slot name="img"></slot>
    </span>

    <div class="relative p-8 pb-10 dark:bg-black rounded-b-md">
      <span class="text-[15px] text-[#8C89A2] font-bold leading-[1.74] mb-1">
        <slot name="date"></slot
      ></span>
      <h3
        class="text-[24px] dark:text-white  font-extrabold leading-[1.5] mb-1"
      >
        <slot name="title"></slot>
      </h3>
      <p class="text-[15px] dark:text-[#DDD] font-normal leading-[1.74]">
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>


<style>
</style>