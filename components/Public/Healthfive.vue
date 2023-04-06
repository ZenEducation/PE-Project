<template>
  <div class="padding-responsive blue">
    <div class="text-center">
      <div class="inline-block flex-col">
        <span class="sub-title">UPCOMING EVENTS</span>
        <div class="title title-responsive-h">
          It's time to take care of <span> your health </span>now!
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 mt-20">
      <div class="px-[12px] mb-12">
        <div
          class="relative overflow-hidden bg-[url('/images/blog/570/blog-1.jpg')] bg-cover bg-center lg:max-w-[576px] h-[334px]"
        >
          <div class="linear absolute w-full h-full"></div>
        </div>
        <div class="flex flex-col sm:flex-row">
          <div class="date text-center">
            <div class="mb-[5px] text-[48px] text-[#3a7e69] italic font-bold">
              12
            </div>
            <div class="text-[#3F3A64] text-[15px] uppercase leading-[1px]">
              Jul
            </div>
          </div>
          <div class="pt-[20px]">
            <h3 class="text-[23px] font-bold text-white mb-2">
              Consumer Food Safety Education Conference
            </h3>
            <span class="text-[#ddd] font-light"
              ><icon class="mr-1 w-4 h-4 text-[#ddd]" name="uil:map-marker" />
              Hamburg, Germany</span
            >
          </div>
        </div>
      </div>

      <div class="px-[12px] flex flex-col lg:ml-[8.3%]">
        <div v-for="blog in blogs" :key="blog.title">
          <div>
            <div
              class="relative flex flex-col sm:flex-row items-center pb-[20px] lg:pl-[30px]"
            >
              <div class="w-full sm:max-w-[150px] sm:min-w-[150px]">
                <img
                  class="w-full"
                  src="/images/event/170/event1.jpg"
                  alt="Blog Image"
                />
                <div
                  class="w-full bg-[#f1f4f2] text-[13px] text-[#3a7e69] tracking-[1.5px] uppercase text-center"
                >
                  {{ blog.date }}
                </div>
              </div>

              <div
                class="pl-[30px] mt-5 mb-10 md:m-0 flex flex-col justify-start"
              >
                <h3
                  class="text-[18px] leading-[1.74] text-white hover:text-[#3a7e69]"
                >
                  {{ blog.title }}
                </h3>

                <div class="text-[14px] text-[#ddd] mt-[14px]">
                  <span class="pr-[16px]"
                    ><icon
                      class="text-[#ddd] mr-1 w-4 h-4"
                      name="uil:map-marker"
                    />
                    {{ blog.date }}</span
                  >
                </div>
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
    views: 'Dubai',
    title: 'How meditation improve your mental health?'
  },
    {
    date: 'Jun 18, 2020',
    views: 'Washington DC, US',
    title: 'Dialogue for Action on Cancer Screening and Prevention'
  },
    {
    date: 'Dec 26, 2020',
    views: 'Birmingham, England',
    title: 'Workout routine and Longevity Meetup'
  }
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
  line-height: 1.17;
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

.date {
  display: flex;
  margin: -50px 26px 0 20px;
  font-weight: bold;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  width: 100px;
  background: #f1f4f2;
  margin-right: 26px;
  flex-shrink: 0;
}
</style>