<template>
  <div class="padding-responsive blue">
    <div class="text-center">
      <div class="inline-block flex-col">
        <span class="sub-title">TOGETHER WE CAN CREATE</span>
        <div class="title">
          Inspiring you to live a <span> healthier </span>lifestyle.
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 py-10"
      >
        <div
          class="w-full md:max-w-[370px] rounded-md flex flex-col justify-center items-center hover:bg-[#111] p-[30px]"
        >
          <div class="mb-[40px]">
            <img
              class="max-w-[158px] max-h-[151px]"
              src="/images/health/health-coaching-box-image-01.png"
              alt="feature.title"
            />
          </div>
          <div>
            <h3 class="text-[24px] text-white leading-[1.5] font-[600]">
              Workout Routines
            </h3>
            <p class="text-[18px] text-[#ddd] leading-[1.67] mt-[15px]">
              Research confirm physical routines can improve health during all
              stage of life
            </p>
          </div>
        </div>

        <div
          class="w-full md:max-w-[370px] rounded-md flex flex-col justify-center items-center hover:bg-[#111] p-[30px]"
        >
          <div class="mb-[40px]">
            <img
              class="max-w-[158px] max-h-[151px]"
              src="/images/health/health-coaching-box-image-02.png"
              alt="feature.title"
            />
          </div>
          <div>
            <h3 class="text-[24px] text-white leading-[1.5] font-[600]">
              Nutrition Strategies
            </h3>
            <p class="text-[18px] text-[#ddd] leading-[1.67] mt-[15px]">
              Good food is a life's great pleasures. And for most, good meals
              are at the heart of family life and celebrations
            </p>
          </div>
        </div>

        <div
          class="w-full md:max-w-[370px] rounded-md flex flex-col justify-center items-center hover:bg-[#111] p-[30px]"
        >
          <div class="mb-[40px]">
            <img
              class="max-w-[158px] max-h-[151px]"
              src="/images/health/health-coaching-box-image-03.png"
              alt="feature.title"
            />
          </div>
          <div>
            <h3 class="text-[24px] text-white leading-[1.5] font-[600]">
              Support & Motivation
            </h3>
            <p class="text-[18px] text-[#ddd] leading-[1.67] mt-[15px]">
              Living a healthy lifestyle is a key component to wellness means
              taking care of you from inside out.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center">
        <button
          class="hover:bg-[#3f3a64] bg-white rounded-md text-[14px] font-bold text-[#111] hover:text-white py-4 px-10 mt-[35px] mx-2"
        >
          Learn more
        </button>
        <button
          class="hover:bg-[#3f3a64] green rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px] mx-2"
        >
          Get started today
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.title span {
  color: #3a7e69;
  font-weight: 400;
}

.title {
  font-size: 34px;
  line-height: 1.17;
  font-weight: 400;
  color: white;
  font-family: "Playfair Display", serif;
}

.sub-title {
  font-size: 15px;
  font-weight: 600;
  line-height: 2;
  display: block;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #8c89a2;
}
</style>