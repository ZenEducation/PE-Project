<template>
  <div class="blue">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 text-left pt-[100px] items-center"
    >
      <div class="flex justify-center">
        <img
          src="/images/learner/gym-coaching-intro-image.png"
          alt="learner"
        />
      </div>
      <div class="mb-6 w-full lg:w-8/12 ml-10">
        <h4
          class="uppercase text-[15px] text-[#8C89A2] font-[500] tracking-[2px] mb-[10px]"
        >
          what you'll learn
        </h4>
        <h2
          class="mb-4 text-[28px] lg:text-[48px] text-white font-[700] leading-[56px]"
        >
          Stay at Home<br />

          <span class="text-[#20AD96] font-[400]">Become Your</span> <br />
          Strongest Self
        </h2>
        <ul class="flex flex-col mt-16">
          <li class="flex items-center mb-2">
            <icon class="w-6 text-[#20AD96] font-bold" name="uil:check" />
            <p class="text-[#ddd] text-[15px] leading-[1.74] ml-5">
              Choose the right exercises
            </p>
          </li>
          <li class="flex items-center mb-2">
            <icon class="w-6 text-[#20AD96] font-bold" name="uil:check" />
            <p class="text-[#ddd] text-[15px] leading-[1.74] ml-5">
              combine fitness, nutrition, and lifestyle
            </p>
          </li>
          <li class="flex items-center mb-2">
            <icon class="w-6 text-[#20AD96] font-bold" name="uil:check" />
            <p class="text-[#ddd] text-[15px] leading-[1.74] ml-5">
              Demonstrate the correct postures and techniques
            </p>
          </li>
          <li class="flex items-center mb-2">
            <icon class="w-6 text-[#20AD96] font-bold" name="uil:check" />
            <p class="text-[#ddd] text-[15px] leading-[1.74] ml-5">
              Archieve a special goal
            </p>
          </li>
        </ul>

        <button
          class="green hover:bg-[#3F3A64] rounded-md text-[15px] font-bold text-white py-4 px-10 mt-10"
        >
          Get start for free
        </button>
      </div>
    </div>
    <div class="p-[100px]">
      <gymtwo />
    </div>
  </div>
</template>