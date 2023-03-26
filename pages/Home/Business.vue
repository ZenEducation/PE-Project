<template>
  <div class="bg-[#111]">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center bg-[#111] pl-[100px] pt-[40px]"
    >
      <div class="">
        <span class="sub-title">New Challenges, New Skills</span>
        <h2 class="title">Build Your Own Life Coaching Business</h2>
        <p>
          Whole-Life Business Coaching for committed<br />
          entrepreneurs
        </p>

        <button
          class="green hover:bg-[#3F3A64] rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px]"
        >
          Get started today
        </button>
      </div>

      <div>
        <img
          src="/images/intro/intro9/home-business-hero-avatar.png"
          alt="image"
        />
      </div>
    </div>
    <div>
      <businessone />
    </div>
    <div class="px-5 md:p-[100px] bg-[#111]">
      <businesstwo />
    </div>

    <div class="px-5 md:p-[100px] blue">
      <businessthree />
    </div>

    <div class="background px-5 md:p-[100px]">
      <businessfour />
    </div>

    <div class="blue pb-[100px] rounded-br-[40%]">
      <businessfive />
    </div>

    <div class="md:py-[100px] px-5 bg-[#111]">
      <businesssix />
    </div>

    <div class="mt-0 pt-0 blue">
      <aboutmail />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.sub-title {
  display: block;
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: #20ad96;
  margin-bottom: 20px;
}

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

p {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.67;
  color: #8c89a2;
  margin-top: 20px;
}

.background {
  background-color: rgb(50, 48, 67);
  background-image: url(/images/bg/map-dots-top-right-transparent.png);
}
</style>
