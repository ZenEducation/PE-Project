<template>
  <div class="padding-responsive h-auto bg-[#111] relative">
    <div class="relative lg:bottom-[-100px]">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <abouttwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/learner-01.png" />
          </template>
          <template v-slot:cardHead
            >Customize Freely to your preferences</template
          >
          <template v-slot:cardP
            >Learners are given the right to arrange and customize their study
            schedule and timetable based on preferences.
          </template>
        </abouttwocard>

        <abouttwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/learner-02.png" />
          </template>
          <template v-slot:cardHead
            >Cloud Storage or Download Lessons to Devices</template
          >
          <template v-slot:cardP
            >You can store online lessons via online cloud or download to your
            device and revise lessons on the way.
          </template>
        </abouttwocard>

        <abouttwocard>
          <template v-slot:cardIcon>
            <img src="/images/learner/learner-03.png" />
          </template>
          <template v-slot:cardHead
            >Multimedia Study Materials &amp; Channels</template
          >
          <template v-slot:cardP
            >We provide study materials with various formats: video, audio,
            slides, doc, prints, books and applications.
          </template>
        </abouttwocard>
      </div>

      <div
        class="text-[18px] font-medium leading-[1.67em] text-[#8C89A2] text-center mt-[50px]"
      >
        Explore the most appropriate courses and certificate that you desire
        will be the<br />
        sweet ultimate reward.
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 text-left pt-[100px] w-full">
        <div class="mb-6 w-full lg:w-9/12 w-12/12 sm:w-8/12 pb-10 lg:pb-0">
          <h4
            class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
          >
            EVERYTHING STARTS WITH <span class="font-bold">MAXCOACH</span>
          </h4>
          <h2
            class="mb-4 text-[28px] lg:text-[48px] text-white font-[700] leading-[56px]"
          >
            We prioritize & embrace the power of
            <span class="text-[#20AD96] font-[300]">Cooperation</span>
          </h2>
          <p class="text-[#ddd] text-[15px] leading-[1.74] mb-5">
            Get better choice of course, lessons, duration and tutors from our
            catalog. Free consultation sessions available.
          </p>
          <div class="flex flex-row items-center justify-start text-[#8C89A2]">
            Have questions?
            <div
              class="flex flex-row items-center text-[#20AD96] border-b-[1px] ml-2 border-b-[#20AD96]"
            >
              Get Free Guidebook
              <Icon class="text-[#20AD96]" name="uil:arrow-right" />
            </div>
          </div>
        </div>

        <div>
          <div class="w-full grid grid-cols-1 md:grid-cols-2 text-center">
            <div v-for="rate in learningrates" :key="rate.number" class="rate">
              <h2 class="text-[48px] text-[#20AD96] font-extrabold">
                {{ rate.number }}
              </h2>
              <h4 class="title">{{ rate.title }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="relative bottom-[-100px] flex justify-center items-center">
        <img
          class="image"
          src="/images/about/about-me/video-about-us-2.jpg"
          alt="image"
        />
        <img
          class="youtube"
          src="/images/icons/icon-youtube-play.png"
          alt="icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
learningrates: [

{
  number: 1.926,
  title: 'Finished Sessions'
},
    
{
  number: 3.092,
  title: 'Online Enrollment'
},
{
  number: 200,
  title: 'Subjects taught'
},
{
  number: 150,
  title: 'Satisfaction rate'
}
]
    }
  }
}
</script>

<style scoped>
.youtube {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  margin-top: 14px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.34;
}

.rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 12px;
}
</style>