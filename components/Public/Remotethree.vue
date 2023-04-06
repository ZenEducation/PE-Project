<template>
  <div class="blue padding-responsive">
    <headers class="flex flex-col items-center justify-center text-center">
      <template v-slot:headertwo>
        <div class="title-responsive">
          Why People Talk About
          <span class="text-[#20AD96] font-[400]">MaxCoach </span>?
        </div>
      </template>
    </headers>

    <div class="flex justify-center">
      <div
        class="w-12/12 flex-col md:flex-row flex justify-start md:items-center text-left mt-10"
      >
        <div class="md:mr-[88px]">
          <img
            class="rounded-[50%] w-[140px] h-[140px] md:min-w-[200px] md:min-h-[200px]"
            src="/images/testimonial/200/testimonial-avata-02.jpg"
            alt="Maria MerryThumbnail"
          />
        </div>

        <div class="mt-4">
          <headers>
            <template v-slot:headertwo>
              <div class="text-[24px] md:text-[34px] font-[400]">
                I am happy with their arrangement of <br />
                lessons and subjects. They reflect a<br />
                scientific investigation.
              </div>
            </template>
          </headers>

          <div
            class="text-[15px] text-white tracking-[1px] leading-[1.3] font-bold"
          >
            <div class="uppercase">uzzal hossain</div>
            <p class="text-[12px] font-normal text-white mt-[10px]">
              /Front-end Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>