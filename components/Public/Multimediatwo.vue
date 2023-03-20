<template>
  <div class="px-5 md:px-[100px] pt-[200px] pb-[100px] blue">
    <headers class="text-center">
      <template v-slot:headerone
        ><div class="text-[15px]">BEGIN YOUR JOURNEY AT MAXCOACH</div></template
      >
      <template v-slot:headertwo>
        <div class="text-[48px]">
          Signature <span class="text-[#20ad96] font-light">Courses</span>
        </div>
      </template>
    </headers>

    <div>
      <coursecardone />
      <div class="flex justify-center">
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