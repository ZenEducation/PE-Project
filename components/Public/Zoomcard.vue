<template>
  <div
    class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10"
  >
    <div
      v-for="zoom in zoommeetings"
      :key="zoom.id"
      class="w-12/12 mb-[30px] rounded overflow-hidden max-w-full min-w-[300px] dark:text-white hover:scale-105 ease-in-out duration-150 hover:drop-shadow-sm hover:shadow-gray-900 hover:shadow-lg"
    >
      <div class="cursor-pointer">
        <div class="h-[inherit] bg-gray-500 flex">
          <img src="/images/event/370/event1.jpg" class="object-contain mx-auto" alt="" />
        </div>

        <div class="pad flex flex-col justify-start dark:bg-[#111]">
          <h4 class="text-left text-secondary dark:text-white text-[20px] font-bold">
            {{ zoom.title }}
          </h4>

          <h2
            class="text-left text-[#20ad96] text-[16px] font-[500] my-5 leading-[2.13px] uppercase"
          >
            <span class="text-[13px] text-[#9b9b9b] leading-[1.73px]"
              >meeting id:
            </span>
            {{ zoom.meetingid }}
          </h2>

          <div class="flex justify-start items-center text-[14px] font-light text-[#696969] dark:text-white">
            <span class="flex justify-start items-center">
              <i class="fa fa-calendar-day w-5 h-5"/>
              {{ zoom.date }}
              <span class="font-[600] ml-1"> {{ zoom.time }}</span>
            </span>

            <span class="ml-4 flex justify-start items-center">
              <i class="fa fa-clock w-5 h-5"/>
              {{ zoom.duration }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
data(){
return {
zoommeetings: [
    {
        id: 1,
        image: "/images/courses/370/course-1.jpg",
        title: 'Marketing Committee Meeting',
        meetingid: '91169814481',
        date: ' Jul 24, 2020',
        time: '2:30PM',
        duration: 60 + 'm',

    },

        {
        id: 2,
        image: "/images/courses/370/course-1.jpg",
        title: 'Executive Assistant Meeting',
        meetingid: '97202032068',
        date: ' Mar 24, 2020',
        time: '2:30PM',
        duration: 75 + 'm',

    },

            {
        id: 3,
        image: "/images/courses/370/course-1.jpg",
        title: 'Website Renovation Meeting',
        meetingid: '94700077974',
        date: ' Jun 24, 2020',
        time: '2:30PM',
        duration: 35 + 'm',

    },

            {
        id: 4,
        image: "/images/courses/370/course-1.jpg",
        title: 'Teacher Leader Team Meeting',
        meetingid: '95165752606',
        date: ' Apr 24, 2020',
        time: '2:30PM',
        duration: 45 + 'm',

    },

            {
        id: 5,
        image: "/images/courses/370/course-1.jpg",
        title: 'Team member responsibilities',
        meetingid: '99383649933',
        date: ' Sep 24, 2020',
        time: '2:30PM',
        duration: 40 + 'm',

    },

            {
        id: 6,
        image: "/images/courses/370/course-1.jpg",
        title: 'Strategic Planning Meeting',
        meetingid: '91169814481',
        date: ' Dec 24, 2020',
        time: '2:30PM',
        duration: 35 + 'm',

    },



]
}
}
}
</script>

<style>
.pad {
  padding: 20px 20px 60px;
}
</style>