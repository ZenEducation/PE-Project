


<template>
  <div class="blue py-[100px]">
    <!-- <div class="bg-white"> -->
    <div class="mx-6 md:mx-[100px]">
      <headers class="flex flex-col items-center justify-center text-center">
        <template v-slot:headerone>start learning coding languages</template>
        <template v-slot:headertwo>
          <div class="text-[48px]">
            Build Your Dream
            <span class="text-[#20AD96] font-[400]">Today</span>
          </div>
        </template>
      </headers>

      <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <indextwocard>
          <template v-slot:cardIcon>
            <img
              src="/images/learner/home-5-image-box-01.png"
              alt="icon"
            />
          </template>

          <template v-slot:cardHead>Ideal Discussion</template>
          <template v-slot:cardP
            >Get teamed up with the specialists who work and teach coding for
            years at famous universities.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img
              src="/images/learner/home-5-image-box-02.png"
              alt="icon"
            />
          </template>
          <template v-slot:cardHead>Web Development</template>
          <template v-slot:cardP
            >Learn to start building a webpage from scratch. You decide your own
            pace, course and speed.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img
              src="/images/learner/home-5-image-box-03.png"
              alt="icon"
            />
          </template>
          <template v-slot:cardHead>System Administration</template>
          <template v-slot:cardP
            >Learners are encouraged to study the mechanism and structure of
            system administration.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img
              src="/images/learner/home-5-image-box-04.png"
              alt="icon"
            />
          </template>
          <template v-slot:cardHead>Graphic Design</template>
          <template v-slot:cardP
            >Have a passion for graphics and arts? Show your talents with
            confidence and self-assertiveness.
          </template>
        </indextwocard>
      </div>

      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 items-center mt-[50px]"
      >
        <div>
          <img
            src="/images/about/about03/about-us-03-image-01.png"
            alt="about"
          />
        </div>

        <div>
          <div class="mb-6 w-full">
            <h4
              class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
            >
              Everything <strong>Maxcoach</strong>
            </h4>
            <h2
              class="mb-4 text-[28px] lg:text-[48px] text-white font-[700] leading-[56px] w-full"
            >
              Construct A
              <span class="text-[#20AD96] font-[400]">Stunning</span><br />
              Career Perspective
            </h2>
          </div>

          <div class="mb-4">
            <button @click="open = !open" class="btn text-left w-full bg-white">
              Multiple Platforms Supported for Teaching &amp; Studying
              <icon
                class="ml-[70px] font-bold text-[#696969] w-6 h-6"
                name="uil:plus-circle"
              />
            </button>

            <Transition name="close">
              <div v-if="open" class="card-body">
                <p class="bg-[#111] text-white">
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads. We
                  know things aren’t supposed to be devoured in a short time,
                  you can always access our knowledge base from any device.
                </p>
              </div>
            </Transition>
          </div>

          <div class="mb-4">
            <button
              @click="open2 = !open2"
              class="btn text-left w-full bg-white"
            >
              Multiple Course Participation at the Same Time
              <icon
                class="ml-[70px] font-bold text-[#696969] w-6 h-6"
                name="uil:plus-circle"
              />
            </button>

            <Transition name="close">
              <div v-if="open2" class="card-body">
                <p class="bg-[#111] text-white">
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads. We
                  know things aren’t supposed to be devoured in a short time,
                  you can always access our knowledge base from any device.
                </p>
              </div>
            </Transition>
          </div>

          <div class="mb-4">
            <button
              @click="open3 = !open3"
              class="btn text-left w-full bg-white"
            >
              Track Study Progress &amp; Deliver Prompt Feedback
              <icon
                class="ml-[70px] font-bold text-[#696969] w-6 h-6"
                name="uil:plus-circle"
              />
            </button>

            <Transition name="close">
              <div v-if="open3" class="card-body">
                <p class="bg-[#111] text-white">
                  MaxCoach supports the act of teaching and learning on multiple
                  platforms like online or offline via material downloads. We
                  know things aren’t supposed to be devoured in a short time,
                  you can always access our knowledge base from any device.
                </p>
              </div>
            </Transition>
          </div>
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
.card-body {
  background: #111;
  padding: 27px 25px 39px;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.74;
  font-size: 15px;
  border: 0 none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 20px 40px rgb(0 0 0 / 7%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

img {
  color: white;
}

.btn {
  border-radius: 5px 5px 0 0;
  box-shadow: 0 15px 50px rgb(51 51 51 / 10%);
  color: #696969;
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  padding: 20px 40px 20px 25px;
}
</style>