<template>
  <div class="blue padding-responsive pt-[200px] sm:pt-[300px]">
    <div>
      <div
        class="w-12/12 flex flex-col justify-center items-center text-center"
      >
        <headers>
          <template v-slot:headertwo>
            I am happy with their arrangement of lessons<br />
            and subjects. They reflect a scientific<br />
            investigation.
          </template>
        </headers>

        <div
          class="text-[15px] text-white tracking-[1px] leading-[1.3] uppercase font-bold"
        >
          uzzal hossain
          <p class="text-[14px] font-normal text-[#7E7E7E] mt-[10px]">
            /Front-end Developer
          </p>
        </div>
      </div>
    </div>

    <div>
      <div class="py-[100px]">
        <div class="w-full grid grid-cols-1 md:grid-cols-4 text-center">
          <div v-for="rate in learningrates" :key="rate.number" class="rate">
            <h2 class="text-[48px] text-[#20AD96] font-extrabold">
              {{ rate.number }}
            </h2>
            <h4 class="title">{{ rate.title }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="blue">
      <div class="grid grid-cols-1 lg:grid-cols-2 text-left items-center">
        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-6 mb-10"
        >
          <div class="flex flex-col justify-center gap-6">
            <div
              class="bg-[#111] bg-[url('/images/service/home-6-service-image-01.png')] bg-no-repeat bg-left-bottom w-full lg:w-[216px] xl:w-[276px] rounded-md pt-[35px] px-[24px] pb-[202px]"
            >
              <div class="font-bold text-[20px] text-white leading-[1.5]">
                Graphic Design
                <p
                  class="text-[#ddd] font-[400] text-[15px] leading-[1.74] mt-[5px]"
                >
                  Have a passion for graphics and arts? Show your talents with
                  confidence and self-assertiveness.
                </p>
              </div>
            </div>

            <div
              class="bg-[#111] bg-[url('/images/service/home-6-service-image-03.png')] bg-no-repeat bg-left-bottom w-full lg:w-[216px] xl:w-[276px] rounded-md pt-[35px] px-[24px] pb-[202px]"
            >
              <div class="font-bold text-[20px] text-white leading-[1.5]">
                Ideal Discussion
                <p
                  class="text-[#ddd] font-[400] text-[15px] leading-[1.74] mt-[5px]"
                >
                  Get teamed up with the specialists who work and teach coding
                  for years at famous universities.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-6 lg:mt-20">
            <div
              class="bg-[#111] bg-[url('/images/service/home-6-service-image-02.png')] bg-no-repeat bg-left-bottom w-full lg:w-[216px] xl:w-[276px] rounded-md pt-[35px] px-[24px] pb-[202px]"
            >
              <div class="font-bold text-[20px] text-white leading-[1.5]">
                Business Administration
                <p
                  class="text-[#ddd] font-[400] text-[15px] leading-[1.74] mt-[5px]"
                >
                  Learners are encouraged to study the mechanism and structure
                  of system administration.
                </p>
              </div>
            </div>

            <div
              class="bg-[#111] bg-[url('/images/service/home-6-service-image-04.png')] bg-no-repeat bg-left-bottom w-full lg:w-[216px] xl:w-[276px] rounded-md pt-[35px] px-[24px] pb-[202px]"
            >
              <div class="font-bold text-[20px] text-white leading-[1.5]">
                Web Development
                <p
                  class="text-[#ddd] font-[400] text-[15px] leading-[1.74] mt-[5px]"
                >
                  Learn to start building a webpage from scratch. You decide
                  your own pace, course and speed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end w-full">
          <div class="mb-6 w-full lg:w-10/12 md:ml-20">
            <h4
              class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
            >
              together we can create
            </h4>
            <h2
              class="mb-4 title-responsive lg:text-[48px] text-white font-[700] leading-[56px]"
            >
              Services We

              <span class="text-[#20AD96] font-[400]">Can Provide</span>
              For My Clients.
            </h2>
            <ul class="flex flex-col mt-16">
              <li class="flex items-center mb-2">
                <icon class="w-6 text-[#20AD96] font-bold" name="uil:check" />
                <p class="text-[#ddd] text-[15px] leading-[1.74] ml-5">
                  Select & customize courses to your preferences
                </p>
              </li>
              <li class="flex items-center mb-2">
                <icon class="w-6 text-[#20AD96] font-bold" name="uil:check" />
                <p class="text-[#ddd] text-[15px] leading-[1.74] ml-5">
                  Change the tutor and make arrangements
                </p>
              </li>
              <li class="flex items-center mb-2">
                <icon class="w-6 text-[#20AD96] font-bold" name="uil:check" />
                <p class="text-[#ddd] text-[15px] leading-[1.74] ml-5">
                  Participate in events to join others
                </p>
              </li>
              <li class="flex items-center mb-2">
                <icon class="w-6 text-[#20AD96] font-bold" name="uil:check" />
                <p class="text-[#ddd] text-[15px] leading-[1.74] ml-5">
                  Get the desired certificate delivered at house
                </p>
              </li>
            </ul>

            <button
              class="green hover:bg-[#3F3A64] rounded-md text-[15px] font-bold text-white py-4 px-10 mt-10"
            >
              Get started for free
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="p-[100px]">
        <gymtwo />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
learningrates: [{
  number: 1.926,
  title: 'Finished sessions'
},
{
  number: 3.092,
  title: 'online enrollment'
},
{
  number: 200,
  title: 'Subjects taught'
},{
  number: 150,
  title: 'Satisfaction rate'
}
]
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 14px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.34;
}

.rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 12px;
}
</style>