<template>
  <div class="mt-20 flex flex-col gap-4 justify-center items-center">
    <div
      v-for="message in messages"
      :key="message.name"
      class="rounded-md blue px-[50px] pt-[41px] pb-[36px] w-full mr-[10px] mb-[30px]"
    >
      <h4 class="mb-[15px] text-[20px] text-white leading-[1.6] font-bold">
        {{ message.title }}
      </h4>
      <p class="mb-[15px] text-[18px] text-[#dddddd] leading-[1.67] font-[500]">
        {{ message.comment }}
      </p>

      <div class="flex items-center pt-[40px]">
        <img
          class="rounded-[50%] mr-[20px]"
          src="/images/testimonial/70/aadya-deshpande.jpg"
          alt="Florence Themes"
        />
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
</template>

<script>
export default {
    data (){
        return {
            messages: [
                {
                    title: ' High level of efficiency and scientific teaching methods',
                    comment: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.',
                    image: '',
                    name: 'florence themes',
                    job: '/Multimedia Admin'
                },
                    {
                    title: ' Professional team of specialists and passionate mentors at reach',
                    comment: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    image: '',
                    name: 'madley pondor',
                    job: '/IT Specialist'
                },
                    {
                    title: ' Highly recommend thier courses and teaching system',
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


<h4 class="title"></h4>

__