<template>
  <div class="blue padding-responsive">
    <div>
      <headers class="text-center">
        <template v-slot:headerone
          ><div class="text-[15px]">STIMULATED TO TAKE PART IN?</div></template
        >
        <template v-slot:headertwo>
          <div class="title-responsive">
            Upcoming <span class="text-[#20ad96] font-light">Events</span>
          </div>
        </template>
      </headers>
    </div>

    <div
      class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 sm:px-10 md:px-0"
    >
      <div
        v-for="event in events"
        :key="event.id"
        class="hover md:max-w-[370px] mb-[30px] rounded-md overflow-hidden min-w-[300px] text-white"
      >
        <div class="m-4 rounded-md overflow-hidden">
          <div class="relative h-[inherit]">
            <img
              class="w-full"
              src="/images/event/370/event1.jpg"
              alt=""
            />
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

          <div class="pad flex flex-col justify-center items-center bg-[#111]">
            <h2
              class="text-center text-[#20ad96] text-[15px] font-[500] my-3 leading-[2px] uppercase"
            >
              {{ event.date }}
            </h2>

            <h4 class="text-center text-white text-[20px] font-bold">
              {{ event.title }}
            </h4>

            <div
              class="flex justify-start items-center mt-5 text-[14px] font-light"
            >
              <span class="flex justify-centere items-center">
                <icon class="w-4 h-4 mr-2" name="uil:map-marker" />
                {{ event.location }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-[50px]">
      <div
        class="flex flex-col sm:flex-row items-center justify-center md:justify-start text-[#8C89A2] text-center"
      >
        We love to see you at our events.
        <div
          class="flex flex-row items-center text-[#20AD96] font-bold border-b-[1px] ml-2 border-b-[#20AD96]"
        >
          Check out events
          <Icon class="text-[#20AD96]" name="uil:arrow-right" />
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

    //     {
    //     id: 4,
    //     image: "/images/courses/370/course-1.jpg",
    //     date: 'Jan 20, 2020',
    //     title: 'Consumer Food Safety Education',
    //     location: 'Illinois, US',
    // },

    //     {
    //     id: 5,
    //     image: "/images/courses/370/course-1.jpg",
    //     date: 'April 28, 2020',
    //     title: 'Learning to Write as a Professional Author',
    //     location: 'Chicago, US',
    // },



    //     {
    //     id: 6,
    //     image: "/images/courses/370/course-1.jpg",
    //     date: 'March 10, 2020',
    //     title: 'How meditation improve your mental health',
    //     location: 'Washington DC, US',
    // }

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