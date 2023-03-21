<template>
  <div class="flex flex-col bg-white dark:bg-black md:flex-row justify-start p-[40px] rounded-md m-4">
    <div style="flex: 1 0 auto; width: 70px">
      <img
        :src="imageSrc"
        class="mb-4 sm:mr-4 rounded-full w-[70px] h-[70px] bg-gray-500"
        alt=""
      />
    </div>
    <div
      class="mt-[20px] sm:mt-0"
      style="flex: 1 0 auto; width: calc(100% - 70px); padding-left: 30px"
    >
      <p class="text-[18px] text-body dark:text-[#ddd] font-normal leading-[1.67] mb-[34px]">
        <slot name="comment"></slot>
      </p>
      <h2 class="text-[15px] dark:text-white uppercase leading-[1.3] tracking-[1px]">
        <slot name="name"></slot>
      </h2>
      <h4 class="text-[14px] text-body dark:text-white mt-[11px]">
        <slot name="position"></slot>
      </h4>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["imageSrc"]);
</script>
