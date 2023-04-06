<template>
  <div class="px-5 md:p-[100px] blue">
    <headers class="text-center">
      <template v-slot:headerone>WANNA TRANSFORM YOUR LIFE?</template>
      <template v-slot:headertwo>
        <div class="text-[48px]">
          Latest From
          <span class="text-[#20ad96] font-light">The Blog</span>
        </div>
      </template>
    </headers>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-20">
      <div class="px-[12px]">
        <div
          class="relative rounded-md overflow-hidden bg-[url('/images/blog/570/blog-1.jpg')] max-w-[576px] h-[334px]"
        >
          <div class="linear absolute w-full h-full"></div>
          <div
            class="text-[15px] text-white flex items-center p-[20px] absolute bottom-0"
          >
            <h4 class="px-[13px]">GYM COACHING</h4>

            <div class="text-[14px] flex items-center">
              <span class="px-[13px]"
                ><icon class="mr-1 w-4 h-4" name="uil:calender" /> Apr
                06,2020</span
              >
              <span class="px-[13px]"
                ><icon class="mr-1 w-4 h-4" name="uil:eye" /> 70 views</span
              >
            </div>
          </div>
        </div>

        <div class="pt-[20px]">
          <h3 class="text-[34px] font-bold text-white">
            10 Essential Bodyeight Exercises
          </h3>
          <p class="text-[14px] text-white mt-[10px] leading-[1.74]">
            Essential bodyweight exercises are crucial to a well-rounded
            training routine because<br />
            they’re versatile and can be done anywhere…
          </p>
          <button
            class="mt-3 flex items-center text-[14px] text-[#20AD96] border-b-[1px] border-white font-bold"
          >
            Read more <icon class="text-[#20ad96]" name="uil:arrow-right" />
          </button>
        </div>
      </div>

      <div class="px-[12px] flex flex-col">
        <div
          v-for="blog in blogs"
          :key="blog.title"
          class="md:border-l-[0.2px] border-[#272931]"
        >
          <div class="mt-[20px]">
            <div
              class="flex items-center pb-[20px] pl-[30px] border-b-[0.2px] border-[#272931]"
            >
              <img
                class="rounded-md"
                src="/images/blog/200/blog-1.jpg"
                alt="Blog Image"
              />
              <div class="pl-[30px]">
                <div
                  class="text-[14px] mb-[10px] flex items-center text-[#7e7e7e]"
                >
                  <span class="pr-[16px]"
                    ><icon
                      class="text-[#7e7e7e] mr-1 w-4 h-4"
                      name="uil:calender"
                    />
                    {{ blog.date }}</span
                  >
                  <span class="px-[16px]">
                    <icon class="text-[#7e7e7e] mr-1 w-4 h-4" name="uil:eye" />
                    {{ blog.views }}
                  </span>
                </div>
                <h3 class="text-[24px] font-bold text-white">
                  {{ blog.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
blogs: [
  {
    date: 'May 15, 2020',
    views: 52 + 'views',
    title: 'How to Keep Workouts Fresh in the New Year'
  },
    {
    date: 'Jun 18, 2020',
    views: 92 + 'views',
    title: 'Approved Foods to Support a Healthy Immune System'
  },
    {
    date: 'Dec 26, 2020',
    views: 85 + 'views',
    title: 'Self-care And Stress Management'
  }
]
    }
  }
}
</script>

<style scoped>
.linear {
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(0, 0, 0, 0.1) 17.43%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
</style>