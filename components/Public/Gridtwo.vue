<template>
  <div class="w-12/12 cursor-pointer lg:max-w-[370px] p-3 rounded-lg">
    <span>
      <img
        src="/images/courses/370/course-2.jpg"
        class="w-full lg:w-full h-[229px]"
      />
    </span>

    <div class="relative p-8 pb-10 bg-[#EAE1D6] dark:bg-black rounded-b-md">
      <span class="absolute right-[20px] top-[-40px]"
        ><p
          class="
            rounded-full
            flex
            items-center
            justify-center
            text-[24px] text-white
            font-extrabold
            green
            h-20
            w-20
          "
        >
          <slot name="tag"></slot>
        </p>
      </span>

      <span class="text-[15px] text-body dark:text-[#8C89A2] font-bold leading-[1.74] mb-1">
        <slot name="date"></slot
      ></span>
      <h3
        class="text-[24px] text-secondary dark:text-white hover: font-extrabold leading-[1.5] mb-1"
      >
        <slot name="title"></slot>
      </h3>
      <p class="text-[15px] text-body dark:text-[#DDD] font-normal leading-[1.74]">
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>


<style>
</style>