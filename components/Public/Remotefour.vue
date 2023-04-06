


<template>
  <div class="linear">
    <!-- <div class="bg-white"> -->
    <div class="px-5 md:px-[100px] pt-[100px]">
      <headers class="flex flex-col items-center justify-center text-center">
        <template v-slot:headerone>WANNA TRANSFORM YOUR LIFE?</template>
        <template v-slot:headertwo>
          <div class="title-responsive">
            Glad to
            <span class="text-[#20AD96] font-[400]">Help You </span> Learn
          </div>
        </template>
      </headers>

      <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div
          id="trans"
          class="px-[20px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] blue rounded-md flex flex-col justify-start text-left"
        >
          <span class="mb-[24px]">
            <img src="/svgs/flag.svg" />
          </span>

          <h2 class="font-[700] mb-3 text-[24px] text-white leading-[1.5]">
            Idea Discussion
          </h2>

          <p class="font-[400] text-[15px] text-[#ddd] leading-[1.6]">
            Get some soul healing and guidance for your future career and
            vocational directions.
          </p>
        </div>

        <div
          id="trans"
          class="px-[20px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] blue rounded-md flex flex-col justify-start text-left"
        >
          <span class="mb-[24px]">
            <img src="/svgs/selfdevelopment.svg" />
          </span>

          <h2 class="font-[700] mb-3 text-[24px] text-white leading-[1.5]">
            Web Development
          </h2>

          <p class="font-[400] text-[15px] text-[#ddd] leading-[1.6]">
            Get teamed up with the specialists who work and teach coding for
            years at famous universities.
          </p>
        </div>

        <div
          id="trans"
          class="px-[20px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] blue rounded-md flex flex-col justify-start text-left"
        >
          <span class="mb-[24px]">
            <img src="/svgs/consultancy.svg" />
          </span>

          <h2 class="font-[700] mb-3 text-[24px] text-white leading-[1.5]">
            System Administration
          </h2>

          <p class="font-[400] text-[15px] text-[#ddd] leading-[1.6]">
            Learners are encouraged to study the mechanism and structure of
            system administration.
          </p>
        </div>

        <div
          id="trans"
          class="px-[20px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] blue rounded-md flex flex-col justify-start text-left"
        >
          <span class="mb-[24px]">
            <img src="/svgs/learning.svg" />
          </span>

          <h2 class="font-[700] mb-3 text-[24px] text-white leading-[1.5]">
            Graphic Design
          </h2>

          <p class="font-[400] text-[15px] text-[#ddd] leading-[1.6]">
            Have a passion for graphics and arts? Show your talents with
            confidence and self-assertiveness.
          </p>
        </div>
      </div>

      <div class="mt-20 flex justify-center">
        <img
          src="/images/service/home-6-services-image.png"
          alt="service image"
        />
      </div>
    </div>
  </div>
</template>


<style>
img {
  color: white;
}

#trans:hover {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.linear {
  background-image: linear-gradient(180deg, #161821 0%, #111111 100%);
}
</style>