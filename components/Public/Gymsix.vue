<template>
  <div>
    <div
      class="w-12/12 grid grid-cols-1 md:grid-cols-2 items-center bg-[url('/images/bg/callout-bg.jpg')] bg-cover bg-center px-5 md:px-[100px] pt-[40px]"
    >
      <div class="w-full">
        <span class="sub-title"
          >Join Thousands of
          <span class="text-white font-normal">Successful Entrepreneurs</span>
        </span>
        <h2 class="title">& Start Your Online Life Coaching Business!</h2>

        <button
          class="green hover:bg-[#3F3A64] rounded-md text-[14px] font-bold text-white py-4 px-20 mt-[35px]"
        >
          Get start now
        </button>
      </div>

      <div class="flex md:justify-end">
        <img
          class="max-w-[476px]"
          src="/images/others/callout-avatar.png"
          alt="callout-avatar"
        />
      </div>
    </div>
  </div>
</template>




<style scoped>
.sub-title {
  display: block;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: #20ad96;
  margin-bottom: 20px;
}

.title {
  font-size: 68px;
  font-weight: 700;
  letter-spacing: 2px;
  /* color: #3F3A64; */
  line-height: 1.27;
  color: white;
  width: 100%;
}
</style>