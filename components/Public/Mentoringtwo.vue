<template>
  <div class="mx-[20px] md:mx-[100px] pb-20">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 text-left pt-[100px] items-center"
    >
      <workcultureheader class="lg:mr-24">
        <template v-slot:headerone>TESTIMONIALS</template>
        <template v-slot:headertwo>
          Why Do People
          <span class="text-[#20AD96] font-[400]">Hearts</span>
          Us?
        </template>
        <template v-slot:content>
          Seeking for verbals of our service quality? Find them here. Everything
          is transparent and straightforward for your sense of jusitifcation.
        </template>
      </workcultureheader>

      <div
        v-for="card in cards"
        :key="card.ttitle"
        class="relative mt-32 lg:mt-10 w-[620px] h-[380px] flex flex-row flex-nowrap"
      >
        <div class="bg-[#111] py-10 px-12 rounded-md mx-4">
          <h4 class="mb-[15px] font-bold leading-[1.6] text-[20px] text-white">
            {{ card.title }}
          </h4>
          <p class="text-[18px] leading-[1.67] text-[#ddd]">
            {{ card.comment }}
          </p>

          <div class="flex flex-row items-center mt-10">
            <div class="min-w-[70px] mr-4">
              <img
                class="rounded-[50%]"
                src=""
                alt="image"
              />
            </div>
            <div class="leading-[1.74]">
              <h6
                class="text-[15px] font-bold uppercase tracking-[1px] leading-[1.3] text-white mb-2"
              >
                {{ card.name }}
              </h6>
              <span class="text-[14px] text-[#8C89A2]">{{ card.job }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 lg:grid-cols-2 my-[100px] text-left items-center"
    >
      <div class="relative flex justify-center items-center mb-10 lg:mb-0">
        <img src="/images/team/home-3-team-image.png" alt="team" />
      </div>

      <div class="mb-6 w-full lg:w-8/12 ml-10">
        <h4
          class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
        >
          EVERYTHING IN MAXCOACH
        </h4>
        <h2
          class="mb-4 text-[28px] lg:text-[48px] text-white font-[700] leading-[56px]"
        >
          We’re Here To
          <span class="text-[#20AD96] font-[400]">Transform</span>
          You!
        </h2>
        <p class="text-[#ddd] text-[15px] leading-[1.74] mb-5">
          As learners, people can enjoy great companionship from MaxCoach
          mentors and educators. We can help you develop and grow at your best.
        </p>

        <button
          class="green hover:bg-[#3F3A64] rounded-md text-[15px] font-bold text-white py-4 px-10"
        >
          Get Free Guide
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default{
    data(){
        return{
            cards:[
                {
                    title: 'High level of efficiency and scientific teaching methods',
                    comment: '  I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.',
                    name:'Florence Themes',
                    job: '/Multimedia Admin'
                },

                {
                    title: 'Professional team of specialists and passionate mentors at reach',
                    comment: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    name:'Florence Themes',
                    job: '/Multimedia Admin'
                },

               {
                    title: 'High level of efficiency and scientific teaching methods',
                    comment: '  I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.',
                    name:'MADLEY PONDOR',
                    job: '/Multimedia Admin'
                },
            ]
        }
    }
}
</script>

<style>
.youtube {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>