<template>
  <div class="font-body dark:bg-[#161821] w-12/12 px-24">
    <div class="container">
      <div class="pt-[100px] pb-[60px]">
        <courseheader>
          <template v-slot:title>Zoom Meetings</template>
        </courseheader>
      </div>

      <div class="pb-[100px] px-[80px]">
        <zoomcard />
        <loadmorebtn />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.select {
  width: 300px;
  height: 54px;
  margin-bottom: 10px;
  padding: 0px 8px;
}

select {
  width: 100%;
  height: 100%;
  padding: 0px 15px;
  outline: none;
  padding: 0px 12px;
  border-radius: 2px;
}
</style>
