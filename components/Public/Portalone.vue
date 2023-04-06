<template>
  <div class="px-5 md:px-[100px] py-[100px] bg-[#111]">
    <headers class="text-center">
      <template v-slot:headerone>STIMULATED TO LEARN?</template>
      <template v-slot:headertwo>
        <div class="text-[34px]">Featured Online Courses</div>
      </template>
    </headers>

    <div class="pt-10">
      <coursecardthree />
      <div class="flex justify-center items-center">
        <button
          class="green hover:bg-[#3F3A64] rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px]"
        >
          View all courses
          <icon class="ml-2" name="uil:arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>