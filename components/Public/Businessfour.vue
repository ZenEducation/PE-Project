<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
    <div>
      <div class="relative flex justify-center items-center">
        <img
          class="relative"
          src="/images/video/home-business-video.jpg"
          alt="image"
        /><img
          class="absolute"
          src="/images/icons/icon-youtube-play.png"
          alt="icon"
        />
      </div>
    </div>
    <div>
      <h2 class="title">
        To Thrive In Business Today, You’ll Need a Good Plan
      </h2>

      <div>
        <div class="mb-4 border-b border-white/20 rounded-md">
          <button
            @click="open = !open"
            class="btn text-[26px] text-left w-full bg-transparent"
          >
            <icon
              class="mr-3 font-bold text-[#ddd] w-6 h-6"
              name="uil:plus-circle"
            />
            How can I help?
          </button>

          <Transition name="close">
            <div v-if="open" class="card-body">
              <p class="text-white ml-10">
                MaxCoach supports the act of teaching and learning on multiple
                platforms like online or offline via material downloads. We know
                things aren’t supposed to be devoured in a short time, you can
                always access our knowledge base from any device.
              </p>
            </div>
          </Transition>
        </div>

        <div class="mb-4 border-b border-white/20 rounded-md">
          <button
            @click="open2 = !open2"
            class="btn text-[26px] text-left w-full bg-transparent"
          >
            <icon
              class="mr-3 font-bold text-[#ddd] w-6 h-6"
              name="uil:plus-circle"
            />
            Why would I need a business coach?
          </button>

          <Transition name="close">
            <div v-if="open2" class="card-body">
              <p class="text-white ml-10">
                Study for a number of courses at the same time is possible as
                long as you can afford the fee and time for completing them in
                the proper time. Learn at your own desired timeline and
                timetable. Maximum up to 5 course at a time for a learner at
                MaxCoach.
              </p>
            </div>
          </Transition>
        </div>

        <div class="mb-4 border-b border-white/20 rounded-md">
          <button
            @click="open3 = !open3"
            class="btn text-[26px] text-left w-full bg-transparent"
          >
            <icon
              class="mr-3 font-bold text-[#ddd] w-6 h-6"
              name="uil:plus-circle"
            />
            What is one-on-one coaching?
          </button>

          <Transition name="close">
            <div v-if="open3" class="card-body">
              <p class="text-white ml-10">
                It’s not just a normal thing to be able to build such a solid
                online educational system like MaxCoach where your progress is
                easily tracked and feedback is properly delivered. We promise to
                keep improving our system for better stability and flexibility.
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default{
    data(){
        return{

            open: false,
            open2: false,
            open3: false,

        }
    }
}
</script>

<style scoped>
.title {
  font-size: 48px;
  line-height: 56px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  /* color: #3F3A64; */
  max-width: 470px;
  color: white;
}

.card-body {
  background: transparent;
  padding: 2px 25px 39px;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.74;
  font-size: 15px;
  border: 0 none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 20px 40px rgb(0 0 0 / 7%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>