<template>
  <div class="mx-[20px] md:mx-[100px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 text-left">
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
      <workcultureheader class="lg:ml-24">
        <template v-slot:headerone>how we work</template>
        <template v-slot:headertwo>
          Upgrade your skill
          <span class="text-[#20AD96] font-[400]">Upgrade your life</span>
          at MaxCoach
        </template>
        <template v-slot:content>
          Spend some time to visit our website or head office and discover our
          current courses, enrollment procedure, and registration deadline.
          We're opening new classes every beginning of each month.
        </template>
      </workcultureheader>
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