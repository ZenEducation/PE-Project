<template>
  <div class="px-5 md:p-[100px] blue">
    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-end">
      <div class="inline-block flex-col">
        <span class="sub-title">CHANGE YOUR LIFE</span>
        <div class="title title-responsive-h">
          I have learnt over the years that have<br />
          brought me much <span>happiness</span> and <span>success.</span>
        </div>
      </div>

      <div>
        <button
          class="hover:bg-[#3f3a64] bg-white rounded-md text-[14px] font-bold text-[#111] hover:text-white py-4 px-10 mt-6"
        >
          View all courses
        </button>
      </div>
    </div>

    <div
      class="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4"
    >
      <div
        v-for="course in courses"
        :key="course.title"
        class="min-w-[243px] lg:max-w-[372px] mb-5 px-4"
      >
        <div>
          <img
            class="w-full"
            src="/images/courses/360/course-1.jpg"
            alt="Health And Wellness Coaching Certification"
          />
        </div>
        <div
          class="flex flex-col py-[16px] text-[18px] text-white leading-[1.78] fontt-[500]"
        >
          {{ course.title }}
          <span
            class="text-[18px] text-[#3a7e69] mt-[15px] leading-[1px] font-bold"
            >{{ course.price }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default{
    data(){
        return{
             courses:[
                {
                    title: 'Health And Wellness Coaching Certification',
                    price: '$' + 40.00
                },

                {
                    title: 'Ketogenic Diet Ketosis Nutrition Health Coach Certification',
                    price: '$' + 65.00
                },

                {
                    title: 'Life Mastery – Be Happy, Healthy And Successful Simplified',
                    price: '$' + 30.00
                },

                {
                    title: 'Vegan Nutrition Health Coach Certification',
                    price: '$' + 36.00
                },

                {
                    title: 'Innovating for Dementia, Aging Assessment, and Intervention',
                    price: '$' + 44.00
                },

                {
                    title: 'Meat and Vegan nutrition for everyday living',
                    price: '$' + 50.00
                },
             ]
        }
    }
}
</script>


<style scoped>
.title span {
  color: #3a7e69;
  font-weight: 400;
}

.title {
  font-size: 34px;
  line-height: 1.42;
  font-weight: 400;
  color: white;
  font-family: "Playfair Display", serif;
}

.sub-title {
  font-size: 15px;
  font-weight: 600;
  line-height: 2;
  display: block;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #8c89a2;
}
</style>