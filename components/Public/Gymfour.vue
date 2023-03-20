<template>
  <div class="px-5 md:p-[100px] blue">
    <headers class="text-center">
      <template v-slot:headerone>why do people love us?</template>
      <template v-slot:headertwo>
        <div class="text-[48px]">
          We Are Optimists Who Love<br />
          To
          <span class="text-[#20ad96] font-light">Work Together</span>
        </div>
      </template>
    </headers>

    <div class="mt-20 flex justify-center items-center">
      <div
        v-for="message in messages"
        :key="message.name"
        class="relative rounded-md bg-[#111] px-[50px] py-[36px] max-w-[686px] mr-[30px] mb-[30px] text-center"
      >
        <div class="flex justify-center">
          <img
            class="rounded-[50%] max-w-[140px] max-h-[140px] p-[3px] border-[6px] border-[#50e3c2]"
            src="/images/testimonial/200/testimonial-avata-01.jpg"
            alt="image"
          />
        </div>

        <div>
          <div class="my-6 flex justify-center">
            <!-- <img src="@/src/_nuxt/images/icons/testimonial-icon-8.png" /> -->
          </div>
          <p
            class="mb-[15px] text-[21px] text-[#dddddd] leading-[1.67] font-[500]"
          >
            {{ message.comment }}
          </p>
        </div>

        <div class="pt-[40px]">
          <div class="flex flex-col">
            <span class="uppercase text-[15px] tracking-[1px] text-white">{{
              message.name
            }}</span>
            <span class="text-[14px] tracking-[1px] text-[#8C89A2] mt-[10px]">{{
              message.job
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    data (){
        return {
            messages: [
                {
                    comment: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.',
                    image: '',
                    name: 'florence themes',
                    job: '/Multimedia Admin'
                },
                //     {
                //     comment: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                //     image: '',
                //     name: 'madley pondor',
                //     job: '/IT Specialist'
                // },
                //     {
                //     comment: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.',
                //     image: '',
                //     name: 'luvic dubble',
                //     job: '/Private Tutor'
                // }
            ]
        }
    }
}
</script>

