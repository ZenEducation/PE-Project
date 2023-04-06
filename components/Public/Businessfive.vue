<template>
  <div class="w-12/12 px-[20px] md:px-[100px] pt-[100px]">
    <headers
      class="flex flex-col items-center justify-center text-center mb-10"
    >
      <template v-slot:headerone>get in contact now</template>
      <template v-slot:headertwo>
        <div class="text-[48px]">
          Upcoming
          <span class="text-[#20AD96] font-[400]">Events</span>
        </div>
      </template>
    </headers>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mt-[64px]">
      <div v-for="event in events" :key="event.day">
        <div
          class="before relative p-[31px] rounded-md bg-[#111] flex items-start justify-between max-w-[576px] max-h-[167px] overflow-hidden"
        >
          <div class="mr-[30px]">
            <div class="location">
              <icon class="mr-2 text-[#7e7e7e]" name="uil:map-marker" />
              {{ event.location }}
            </div>
            <h3 class="text-[20px] leading-[1.5] font-bold text-white">
              {{ event.title }}
            </h3>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="text-[48px] leading-[1] text-[#20AD96]">
              {{ event.day }}
            </div>
            <div class="text-[15px] font-bold text-white uppercase">
              {{ event.month }}
            </div>
            <button
              class="green hover:bg-[#3F3A64] rounded-md text-[14px] leading-[30px] font-bold text-white py-0 px-[20px] mt-3"
            >
              Get ticket
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center text-center text-white justify-center mt-16">
      Excited about our event?
      <span class="flex items-center font-bold text-[#20ad96] ml-2">
        View all events
        <icon class="ml text-[#20ad96]" name="uil:arrow-right" />
      </span>
    </div>
  </div>
</template>

<script>

export default{
    data(){
        return{
 events:[
    {
        location: 'Texas,US',
        title: 'Storytelling workshop',
        day: 22,
        month: 'nov'
    },
        {
        location: 'Texas,US',
        title: 'Storytelling workshop',
        day: 22,
        month: 'nov'
    },
        {
        location: 'Texas,US',
        title: 'Storytelling workshop',
        day: 22,
        month: 'nov'
    },
        {
        location: 'Texas,US',
        title: 'Storytelling workshop',
        day: 22,
        month: 'nov'
    },
        {
        location: 'Texas,US',
        title: 'Storytelling workshop',
        day: 22,
        month: 'nov'
    },
        {
        location: 'Texas,US',
        title: 'Storytelling workshop',
        day: 22,
        month: 'nov'
    }
 ]
        }
    }
}
</script>

<style scoped>
.location {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #7e7e7e;
  margin-bottom: 7px;
}

.before:hover::before {
  opacity: 100%;
}
.before::before {
  position: absolute;
  content: " ";
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background: #20ad96;
  opacity: 0;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
