<template>
  <div class="">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center padding-responsive bg-[#ddd]"
    >
      <div class="mb-[30px]">
        <span class="sub-title">Family Nutrrition</span>
        <h2 class="title text-[36px] lg:text-[46px] xl:text-[56px] normal-case">
          Take Your Food To The Next Level With These Methods
        </h2>

        <button
          class="bg-[#ef6f31] hover:bg-[#6ac5f1] rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px]"
        >
          Get started today
        </button>
      </div>

      <div>
        <img
          class="xl:max-w-[576px] xl:max-h-[543px] md:ml-5"
          src="/images/intro/intro11/kitchen-hero-slider-slide-01-image.jpg"
          alt="intro image"
        />
      </div>
    </div>

    <div>
      <kitchenone />
    </div>

    <div>
      <kitchentwo />
    </div>

    <div>
      <kitchenthree />
    </div>

    <div>
      <kitchenfour />
    </div>

    <div>
      <kitchenfive />
    </div>

    <div>
      <kitchennewsletter />
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
  color: #333333;
  margin-bottom: 20px;
}

.title {
  font-weight: 700;
  letter-spacing: 2px;
  color: #333333;
}
</style>
