<template>
  <div>
    <div class="bg-[#111] py-[100px] px-5 md:px-[100px]">
      <div
        class="grid grid-cols-1 xl:grid-cols-2 my-[100px] text-left justify-center items-center"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:px-12 md:px-0">
          <div>
            <div
              class="mb-5 flex flex-col px-[26px] py-[44px] rounded-md w-full md:max-w-[376px] text-center blue justify-center items-center"
            >
              <img
                class="w-[140px] h-[140px] rounded-[50%]"
                src="/images/testimonial/140/home-4-testimonial-avatar-01.png"
                alt="image"
              />

              <p class="text-[18px] leading-[30px] my-10 text-[#dddddd]">
                I love their flexibility. Even when my request is too
                complicated to handle. they could still suggest something useful
                for me.
              </p>

              <div class="flex flex-col items-center justify-center">
                <div
                  class="uppercase text-white text-[15px] tracking-[1px] leading-[1.3]"
                >
                  florence theme
                </div>
                <div
                  class="text-[#7E7E7E] text-[15px] mt-[10px] tracking-[1px] leading-[1.3]"
                >
                  /Multimedia Admin
                </div>
              </div>
            </div>
            <div>
              <h2
                class="p-[30px] max-w-[270px] text-[20px] font-bold leading-[30px] text-white blue ml-20"
              >
                "Best out of the best in the online coaching field ..."
              </h2>
            </div>
          </div>

          <div class="gap-4">
            <div
              class="mb-5 blue px-[25px] pt-[56px] pb-[36px] rounded-md max-w-[210px] max-h-[218px] text-center flex flex-col justify-center items-center"
            >
              <h2 class="text-white text-[24px] leading-[1] font-bold">
                4.9/5.0
              </h2>

              <div class="flex flex-row mt-[8px] mb-[10px]">
                <icon class="w-4 h-4" name="uil:star" />
                <icon class="w-4 h-4" name="uil:star" />
                <icon class="w-4 h-4" name="uil:star" />
                <icon class="w-4 h-4" name="uil:star" />
                <icon class="w-4 h-4" name="uil:star" />
              </div>

              <p class="text-[#ddd] text-[15px] leading-[1.74]">
                by 700+ Students for 3200+ Sales
              </p>
            </div>
            <div
              class="flex flex-col px-[26px] py-[44px] rounded-md w-full md:max-w-[288px] text-center blue justify-center items-center"
            >
              <img
                class="rounded-[50%]"
                src="/images/testimonial/100/home-4-testimonial-avatar-02.png"
                alt="image"
              />

              <p class="text-[18px] leading-[30px] my-10 text-[#dddddd]">
                Excellent guiding instructions. They are all great mentors at
                life &amp; career
              </p>

              <div class="flex flex-col items-center justify-center">
                <div
                  class="uppercase text-white text-[15px] tracking-[1px] leading-[1.3]"
                >
                  fannie moreno
                </div>
                <div
                  class="text-[#7E7E7E] text-[15px] mt-[10px] tracking-[1px] leading-[1.3]"
                >
                  /Developer
                </div>
              </div>
            </div>
          </div>
        </div>

        <companionship class="xl:ml-24 mt-10 xl:mt-0">
          <template v-slot:headerone>together expand and grow</template>
          <template v-slot:headertwo>
            Enjoy
            <span class="text-[#20AD96] font-[400]">Our Companionship</span>
          </template>
          <template v-slot:content>
            As learners, people can enjoy great companionship from MaxCoach
            mentors and educators. We can help you develop and grow at your
            best.
          </template>
        </companionship>
      </div>
    </div>
  </div>
</template>