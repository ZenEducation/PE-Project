<template>
  <div>
    <div class="frontpage py-[200px] text-center">
      <div class="inline-block flex-col">
        <span class="sub-title">Spread Health and Happiness</span>
        <div class="title text-[40px] lg:text-[64px]">
          Health Coaching<br />
          Just Got <span>Easier!</span>
        </div>
        <button
          class="hover:bg-[#3f3a64] green rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px] mx-2"
        >
          Free Consultation
        </button>
      </div>
    </div>

    <div>
      <Healthone />
    </div>

    <div>
      <Healthwo />
    </div>

    <div>
      <Healththree />
    </div>

    <div>
      <Healthfour />
    </div>

    <div>
      <Healthfive />
    </div>

    <div>
      <healthsix />
    </div>

    <div>
      <newsletter />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.title span {
  color: #3a7e69;
  font-style: italic;
  font-weight: 400;
}

.title {
  line-height: 1.17;
  font-weight: bold;
  color: #3f3a64;
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

.frontpage {
  background-image: url(/images/intro/intro7/hero-slider-slide-bg-02.jpg);
  background: contain;
  background-position: center;
}
</style>
