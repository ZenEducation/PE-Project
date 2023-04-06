<template>
  <div class="dark:blue">
    <div
      class="py-[100px] mx-[100px] flex flex-col justify-center items-center"
    >
      <headers
        class="mt-[100px] container w-8/12 flex flex-col items-center justify-center text-center"
      >
        <template v-slot:headerone
          >equip yourself with the power of Education</template
        >
        <template v-slot:headertwo>
          Learn the secrets to
          <span class="text-[#20AD96] font-[400]">Life Success</span> ,these
          people have got the key.
        </template>
      </headers>

      <div class="w-full overflow-auto flex flex-row">
        <aboutcomments />
      </div>

      <!-- <div></div> -->
    </div>

    <div class="dark:bg-[#111] bg-[#f5f5f5] py-[100px]">
      <aboutrates />
    </div>

    <div>
      <aboutmail />
    </div>
  </div>
</template>