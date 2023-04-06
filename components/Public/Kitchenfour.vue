


<template>
  <div class="bg-[#111]">
    <!-- <div class="bg-white"> -->
    <div class="padding-responsive">
      <headers class="flex flex-col items-center justify-center text-center">
        <template v-slot:headertwo>
          Healthy Cooking Fundamentals That<br />
          Save Time, Money & Stress
        </template>
      </headers>

      <div class="w-12/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div
          id="trans"
          class="px-[10px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] bg-[#111] rounded-md flex flex-col justify-center items-center text-center"
        >
          <span class="">
            <img
              src="/images/ketchen/ketchen-box-image-1.png"
              alt="Online Coures"
            />
          </span>

          <h2 class="font-[700] mb-3 text-[28px] text-white leading-[1.5]">
            Online Coures
          </h2>

          <p class="font-[400] text-[15px] text-[#ddd] leading-[1.74]">
            You can learn any lesson on-the-go. You will be more confident
            creating your own healthy meals
          </p>
        </div>

        <div
          id="trans"
          class="px-[10px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] bg-[#111] rounded-md flex flex-col justify-center items-center text-center"
        >
          <span class="">
            <img
              src="/images/ketchen/ketchen-box-image-2.png"
              alt="One to One"
            />
          </span>

          <h2 class="font-[700] mb-3 text-[28px] text-white leading-[1.5]">
            One to One
          </h2>

          <p class="font-[400] text-[15px] text-[#ddd] leading-[1.74]">
            This one-to-one course is made to help you learn & cook exactly
            everything you need
          </p>
        </div>

        <div
          id="trans"
          class="px-[10px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] bg-[#111] rounded-md flex flex-col justify-center items-center text-center"
        >
          <span class="">
            <img
              src="/images/ketchen/ketchen-box-image-3.png"
              alt="Master Skills"
            />
          </span>

          <h2 class="font-[700] mb-3 text-[28px] text-white leading-[1.5]">
            Master Skills
          </h2>

          <p class="font-[400] text-[15px] text-[#ddd] leading-[1.74]">
            Your skills will be upgraded at any level you are. We will make a 30
            minutes phone-assistance before start
          </p>
        </div>

        <div
          id="trans"
          class="px-[10px] pt-[40px] pb-[30px] w-12/12 md:max-w-[300px] m-[4px] bg-[#111] rounded-md flex flex-col justify-center items-center text-center"
        >
          <span class="">
            <img
              src="/images/ketchen/ketchen-box-image-4.png"
              alt="Recipes"
            />
          </span>

          <h2 class="font-[700] mb-3 text-[28px] text-white leading-[1.5]">
            Recipes
          </h2>

          <p class="font-[400] text-[15px] text-[#ddd] leading-[1.74]">
            We create a special recipe plan based on your interest &
            health-situation to make sure you'll love it
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
img {
  color: white;
}

#trans:hover {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>