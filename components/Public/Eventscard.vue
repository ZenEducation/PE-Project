<template>
  <div
    class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10"
  >
    <div
      v-for="event in events"
      :key="event.id"
      class="hover w-12/12 mb-[30px] rounded-md overflow-hidden max-w-full min-w-[300px] dark:text-white"
    >
      <div class="">
        <div class="relative h-[inherit]">
          <img src="/images/event/370/event1.jpg" alt="" class="w-full object-contain" />
          <div
            class="event-overlay-background flex items-center justify-center"
          >
            <button
              class="bg-white rounded-md text-[14px] font-bold text-[#20ad96] py-4 px-8"
            >
              Get ticket
            </button>
          </div>
        </div>

        <div class="pad flex flex-col justify-center items-center dark:bg-[#111]">
          <h2
            class="text-center text-[#20ad96] text-[15px] font-[500] my-3 leading-[2px] uppercase"
          >
            {{ event.date }}
          </h2>

          <h4 class="text-center text-[20px] font-bold">
            {{ event.title }}
          </h4>

          <div
            class="flex justify-start items-center mt-5 text-[14px]"
          >
            <span class="flex dark:text-[#fff] text-[#696969] justify-center items-center">
              <i class="fa fa-location-circle w-5 h-5"/>
              {{ event.location }}
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
events: [
    {
        id: 1,
        image: "/images/courses/370/course-1.jpg",
        date: 'Nov 22, 2020',
        title: 'Storytelling Workshop 2020',
        location: 'Texas, US',

    },

        {
        id: 2,
        image: "/images/courses/370/course-1.jpg",
        date: 'Oct 10, 2020',
        title: 'Painting Art Contest 2020',
        location: 'New York, US',
    },
            {
        id: 3,
        image: "/images/courses/370/course-1.jpg",
        date: 'Dec 25, 2020',
        title: 'International Art Fair 2020',
        location: 'Hamburg, Germany',
    },

        {
        id: 4,
        image: "/images/courses/370/course-1.jpg",
        date: 'Jan 20, 2020',
        title: 'Consumer Food Safety Education',
        location: 'Illinois, US',
    },

        {
        id: 5,
        image: "/images/courses/370/course-1.jpg",
        date: 'April 28, 2020',
        title: 'Learning to Write as a Professional Author',
        location: 'Chicago, US',
    },



        {
        id: 6,
        image: "/images/courses/370/course-1.jpg",
        date: 'March 10, 2020',
        title: 'How meditation improve your mental health',
        location: 'Washington DC, US',
    }

]
}
}
}
</script>

<style>
.pad {
  padding: 20px 20px 60px;
}

.event-overlay-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(63, 58, 100, 0.6);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.hover:hover m.event-overlay-background {
  opacity: 1;
  visibility: visible;
}
</style>