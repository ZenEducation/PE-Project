<template>
  <div class="mx-[20px] md:mx-[100px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 text-left pt-[100px]">
      <workcultureheader class="lg:mr-24">
        <template v-slot:headerone>Get to know about maxcoach</template>
        <template v-slot:headertwo>
          Learn about our
          <span class="text-[#20AD96] font-[400]">Work Culture</span>
          at MaxCoach
        </template>
        <template v-slot:content>
          Spend some time to visit our website or head office and discover our
          current courses, enrollment procedure, and registration deadline.
          We're opening new classes every beginning of each month.
        </template>
      </workcultureheader>

      <div class="relative mt-32 lg:mt-10">
        <img
          class="rounded-md w-full h-auto"
          src="/images/about/about01/about1.jpg"
          alt="about-01"
        />
        <img
          class="rounded-md absolute top-[-25%] right-0"
          src="/images/about/about01/about2.jpg"
          alt="about-02"
        />
      </div>
    </div>

    <div class="mt-20">
      <Rates />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 my-[100px] text-left">
      <div class="relative flex justify-center items-center mb-10 lg:mb-0">
        <img
          class="image h-full w-full"
          src="/images/video/about-video.jpg"
          alt="image"
        />
        <img
          class="youtube"
          src="/images/icons/icon-youtube-play.png"
          alt="icon"
        />
      </div>

      <div class="mb-6 w-full lg:w-8/12 lg:ml-24">
        <h4
          class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
        >
          <div class="text-white">How we work</div>
        </h4>
        <h2
          class="mb-4 text-[28px] lg:text-[48px] text-white font-[700] leading-[56px]"
        >
          Upgrade your skill
          <span class="text-[#20AD96] font-[400]">Upgrade your life</span> at
          Maxcoach
        </h2>
        <p class="text-[#ddd] text-[15px] leading-[1.74] mb-5">
          Spend some time to visit our website or head office and discover our
          current courses, enrollment procedure, and registration deadline.
          We're opening new classes every beginning of each month.
        </p>

        <div
          class="inline-flex flex-row items-center text-[#20AD96] border-b-[1px] border-b-[#20AD96]"
        >
          Download free guidebook<Icon
            class="text-[#20AD96]"
            name="uil:arrow-right"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.youtube {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>