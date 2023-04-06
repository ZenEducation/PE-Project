<template>
  <div class="padding-responsive blue lg:rounded-br-[50%]">
    <div>
      <headers class="text-center">
        <template v-slot:headerone
          ><div class="text-[15px]">maxcoach available courses</div></template
        >
        <template v-slot:headertwo>
          <div class="title-responsive-h">
            Access
            <span class="text-[#20ad96] font-[400]">Smart Tutoring</span>
            Program For Benfits.
          </div>
        </template>
      </headers>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <abouttwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/learner-01.png" />
          </template>
          <template v-slot:cardHead>Customize Preferences</template>
          <template v-slot:cardP
            >Learners are given the right to arrange and customize their study
            schedule and timetable based on preferences.
          </template>
        </abouttwocard>

        <abouttwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/learner-02.png" />
          </template>
          <template v-slot:cardHead>Cloud Storage</template>
          <template v-slot:cardP
            >You can store online lessons via online cloud or download to your
            device and revise lessons on the way.
          </template>
        </abouttwocard>

        <abouttwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/learner-03.png" />
          </template>
          <template v-slot:cardHead>Multimedia Channels</template>
          <template v-slot:cardP
            >We provide study materials with various formats: video, audio,
            slides, doc, prints, books and applications.
          </template>
        </abouttwocard>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 my-[100px] text-left items-center"
      >
        <div class="flex justify-center items-center">
          <img
            class="w-[621px] lg:h-[417px]"
            src="/images/video/home-2-popup-video-poster.jpg"
            alt="video poster"
          />
        </div>

        <div class="w-full">
          <div class="mb-6 w-full lg:w-8/12 lg:ml-24">
            <h4
              class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
            >
              <div class="text-[#8C89A2]">
                Get started <span class="font-bold">effortlessly</span>
              </div>
            </h4>
            <h2
              class="mb-4 text-[28px] lg:text-[48px] text-white font-[700] leading-[56px]"
            >
              Enjoy Our
              <span class="text-[#20AD96] font-[300]">Companionship</span>
            </h2>
            <p class="text-[#ddd] text-[15px] leading-[1.74] mb-5">
              Spend some time to visit our website or head office and discover
              our current courses, enrollment procedure, and registration
              deadline. We're opening new classes every beginning of each month.
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
    </div>
  </div>
</template>