<template>
  <div class="text-center mb-6">
    <h4
      class="
        uppercase
        text-[15px] text-[#8C89A2]
        font-[500]
        tracking-[2px]
        mb-[10px]
      "
    >
      <slot name="headerone"></slot>
    </h4>
    <h2 class="text-[26px] lg:text-[34px] text-secondary dark:text-white font-[700] leading-[1.3]">
      <slot name="headertwo"></slot>
    </h2>
  </div>
</template>