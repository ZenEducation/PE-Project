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
             <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">Maximizing Exam Success with <br> Personalized Learning: A Guide</span>
            </div>
          </li>

          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div>
              <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">The Top Three Types of Exam Mistakes Students Make and How to Avoid Them</span>
            </div>
          </li>

          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div>
              <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">Ace Your Exams: How to Memorize Different Formulae Like a Pro</span>
            </div>
          </li>

          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div><span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">Unlocking Success: The Power of Personalized Attention in Competitive Exams</span></div>
          </li>

          <li class="group flex justify-start items-start text-lg font-bold leading-[1.78] relative ml-0 pl-0 pr-[30px] pt-4 pb-[15px] border-b-[solid] border-b-[#696969]">
            <i class="fa-solid fa-arrow-right w-4 h-4 mr-4 mt-2 group-hover:text-[#20ad96] text-[#696969] dark:text-white group-hover:cursor-pointer"></i>
            <div>
              <span class="group-hover:text-[#20ad96] group-hover:cursor-pointer text-[#696969] dark:text-white">Maximize Your Study Time with the Pomodoro Timer Technique: A Step-by-Step Guide</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-10">
        <h3 class="text-2xl font-bold leading-[1.3] mt-0 mb-[30px] dark:text-white">Popular posts</h3>

        <div class="flex flex-wrap gap-2 dark:text-white text-[#696969]">
          <button class="rounded text-[small] transition-all duration-[0.3s] ease-[ease-in-out] px-5 py-2 hover:bg-[#20ad96] hover:text-white dark:hover:bg-[#20ad96] dark:hover:text-white bg-[#f5f5f5] dark:bg-[#3f3a54]">Lifestyle</button>
          <button class="rounded text-[small] transition-all duration-[0.3s] ease-[ease-in-out] px-5 py-2 hover:bg-[#20ad96] hover:text-white dark:hover:bg-[#20ad96] dark:hover:text-white bg-[#f5f5f5] dark:bg-[#3f3a54]">Health Care</button>
          <button class="rounded text-[small] transition-all duration-[0.3s] ease-[ease-in-out] px-5 py-2 hover:bg-[#20ad96] hover:text-white dark:hover:bg-[#20ad96] dark:hover:text-white bg-[#f5f5f5] dark:bg-[#3f3a54]">Education</button>
          <button class="rounded text-[small] transition-all duration-[0.3s] ease-[ease-in-out] px-5 py-2 hover:bg-[#20ad96] hover:text-white dark:hover:bg-[#20ad96] dark:hover:text-white bg-[#f5f5f5] dark:bg-[#3f3a54]">Kitchen</button>
          <button class="rounded text-[small] transition-all duration-[0.3s] ease-[ease-in-out] px-5 py-2 hover:bg-[#20ad96] hover:text-white dark:hover:bg-[#20ad96] dark:hover:text-white bg-[#f5f5f5] dark:bg-[#3f3a54]">Course</button>
          <button class="rounded text-[small] transition-all duration-[0.3s] ease-[ease-in-out] px-5 py-2 hover:bg-[#20ad96] hover:text-white dark:hover:bg-[#20ad96] dark:hover:text-white bg-[#f5f5f5] dark:bg-[#3f3a54]">Business</button>
          <button class="rounded text-[small] transition-all duration-[0.3s] ease-[ease-in-out] px-5 py-2 hover:bg-[#20ad96] hover:text-white dark:hover:bg-[#20ad96] dark:hover:text-white bg-[#f5f5f5] dark:bg-[#3f3a54]">Gym</button>
        </div>
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