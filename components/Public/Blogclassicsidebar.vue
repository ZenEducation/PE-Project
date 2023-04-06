<template>
  <div class="w-auto min-w-[376px]">
    <div>
      <h3 class="text-2xl font-bold leading-[1.3] mt-0 mb-[30px] dark:text-white">Search</h3>
      <div
        class="flex items-center h-[52px] dark:bg-[#222] bg-[#f5f5f5] rounded-md border-[1px] border-primary relative px-[12px] md:max-w-[346px]"
      >
        <input
          type="search"
          name="searchinput"
          placeholder="Search..."
          class="dark:bg-[#222] bg-[#f5f5f5] text-[#696969] dark:text-white focus:ring-0 border-none w-[230px] pl-2 placeholder:font-light"
        />
        <button
          class="absolute right-0 top-0 bottom-0 h-[100%] w-[48px] dark:bg-[#222] hover:bg-[#20c997] rounded-r-md hover:text-white"
        >
          <i class="w-4 h-4 text-[#20c997] fa fa-search"/>
        </button>
      </div>

      <div class="mt-[30px] dark:text-white">
        <h3 class="text-2xl font-bold leading-[1.3] mt-0 mb-[30px]">Popular posts</h3>

        <ul class="flex flex-col text-[#696969] dark:text-white">
          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div>
             <NuxtLink to="/blog/maximizing-exam-success-with-personalized-learning">
              <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">Maximizing Exam Success with <br> Personalized Learning: A Guide</span>
             </NuxtLink>
            </div>
          </li>

          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div>
              <NuxtLink to="/blog/the-top-three-types-of-exam-mistakes-students-make-and-how-to-avoid-them">
                <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">The Top Three Types of Exam Mistakes Students Make and How to Avoid Them</span>
              </NuxtLink>
            </div>
          </li>

          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div>
              <NuxtLink to="/blog/ace-your-exams-how-to-memorize-different-formula-like-a-pro">
                <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">Ace Your Exams: How to Memorize Different Formulae Like a Pro</span>
              </NuxtLink>
            </div>
          </li>

          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div>
              <NuxtLink to="/blog/unlocking-success-the-power-of-personalized-attention-in-competitive-exams">
                <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">Unlocking Success: The Power of Personalized Attention in Competitive Exams</span>
              </NuxtLink>
            </div>
          </li>

          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div>
              <NuxtLink to="/blog/maximize-your-study-time-with-the-pomodoro-timer-technique">
                <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">Maximize Your Study Time with the Pomodoro Timer Technique: A Step-by-Step Guide</span>
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>

      
    </div>
  </div>
</template>




<style scoped>
.purplebtn {
  padding: 8px 20px;
  border-radius: 4px;
  font-size: small;
  transition: all 0.3s ease-in-out;
}

.purplebtn:hover {
  background: #20ad96;
}

.link {
  display: flex;
  margin-left: 0;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.78;
  position: relative;
  padding: 16px 30px 15px 0px;
  border-bottom: solid 0.5px #696969;
}

.sidebar-title {
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 0;
}
</style>