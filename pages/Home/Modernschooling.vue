<template>
  <div>
    <Schoolingone />
  </div>
  <div>
    <Schoolingtwo />
  </div>
  <div class="py-[50px] bg-[#111]">
    <aboutrates />

    <div class="px-[100px] pt-[50px]">
      <schoolingthree />
    </div>

    <div class="blue pb-[100px] rounded-br-[40%]">
      <schoolingfour />
    </div>

    <div class="md:py-[100px] px-5">
      <schoolingfive />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>
