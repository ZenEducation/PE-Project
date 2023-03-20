<template>
  <div>
    <headers
      class="flex flex-col items-center justify-center text-center mb-10"
    >
      <template v-slot:headerone>people are praising maxcoach</template>
      <template v-slot:headertwo>
        <div class="text-[48px]">
          What make they
          <span class="text-[#20AD96] font-[400]">love us?</span>
        </div>
      </template>
    </headers>
  </div>

  <div class="mt-20 flex justify-center items-center">
    <div
      v-for="message in messages"
      :key="message.name"
      class="relative rounded-md blue px-[50px] pt-[110px] pb-[36px] max-w-[426px] mr-[30px] mb-[30px] text-center"
    >
      <div class="flex justify-center">
        <img
          class="rounded-[50%] max-w-[140px] max-h-[140px] absolute top-[-70px]"
          src="/images/testimonial/140/testimonial-avata-02.jpg"
          alt="image"
        />
      </div>
      <p class="mb-[15px] text-[18px] text-[#dddddd] leading-[1.67] font-[500]">
        {{ message.comment }}
      </p>

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

  <div class="mt-20">
    <div
      class="text-center flex flex-col justify-center items-center pb-[100px]"
    >
      <div class="text-[24px] font-bold text-[#8C89A2] leading-[1] mb-[10px]">
        Start today for getting
        <span class="text-[#20ad96] font-light">Online Certification</span>
      </div>
      <div class="text-[34px] font-bold text-white mb-[30px] leading-[1.3]">
        You can be your own guiding star with our help!
      </div>
      <button
        class="text-[14px] text-white font-bold px-12 py-4 bg-[#20ad96] rounded-md"
      >
        Get started for free
      </button>
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
                    {
                    comment: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    image: '',
                    name: 'madley pondor',
                    job: '/IT Specialist'
                },
                    {
                    comment: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.',
                    image: '',
                    name: 'luvic dubble',
                    job: '/Private Tutor'
                }
            ]
        }
    }
}
</script>