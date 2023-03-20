<template>
  <div class="">
    <div class="flex flex-col md:flex-row mb-20">
      <div class="boardcard md:mr-3 before:bg-[#8fd6ca]">
        <h1 class="text-[48px] font-normal text-[#20ad96] mr-[26px]">01</h1>
        <h2 class="text-[18px] font-bold text-white max-w-[130px]">
          Courses Completed
        </h2>
      </div>

      <div class="boardcard md:mx-3 before:bg-[#f5dbaf]">
        <h1 class="text-[48px] font-normal text-[#ebb860] mr-[26px]">01</h1>
        <h2 class="text-[18px] font-bold text-white max-w-[130px]">
          Courses Complete In Progress
        </h2>
      </div>

      <div class="boardcard md:mx-3 before:bg-[#b8c3f3]">
        <h1 class="text-[48px] font-normal text-[#7288e8] mr-[26px]">01</h1>
        <h2 class="text-[18px] font-bold text-white max-w-[130px]">
          Quizzez Completed
        </h2>
      </div>

      <div class="boardcard md:ml-3 before:bg-[#efadb5]">
        <h1 class="text-[48px] font-normal text-[#df5b6c] mr-[26px]">02</h1>
        <h2 class="text-[18px] font-bold text-white max-w-[130px]">
          Quizzes In Progress
        </h2>
      </div>
    </div>

    <div>
      <h2 class="head">Courses progress</h2>

      <div>
        <h2 class="text-[18px] font-bold text-white mb-4">
          Database & SQL for Computer Science
        </h2>
        <div class="w-6/12 rounded-[30px] bg-[#f2f2f2] h-[32px] p-[6px]">
          <div class="green rounded-[30px] w-[33.3%] h-full relative">
            <h4 class="text-[12px] text-[#fff] font-bold absolute right-[15px]">
              33.3%
            </h4>
          </div>
        </div>
      </div>

      <div class="my-[50px]">
        <h2 class="text-[18px] font-bold text-white mb-4">
          Introduction to Javascript for Beginners
        </h2>
        <div class="w-6/12 rounded-[30px] bg-[#f2f2f2] h-[32px] p-[6px]">
          <div class="green rounded-[30px] w-[70%] h-full relative">
            <h4 class="text-[12px] text-[#fff] font-bold absolute right-[15px]">
              70%
            </h4>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-[18px] font-bold text-white mb-4">
          Academic Listening and Note-taking
        </h2>
        <div class="w-6/12 rounded-[30px] bg-[#f2f2f2] h-[32px] p-[6px]">
          <div class="green rounded-[30px] w-[25%] h-full relative">
            <h4 class="text-[12px] text-[#fff] font-bold absolute right-[15px]">
              25%
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.head {
  font-size: 34px;
  line-height: 1.3;
  font-weight: 700;
  margin: 0px 0px 33px;
  color: #ffffff;
}
</style>
