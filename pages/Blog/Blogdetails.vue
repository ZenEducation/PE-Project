<template>
  <div class="bg-[#161821] w-12/12 px-24">
    <div class="py-[100px]">
      <courseheader>
        <template #title>Blog Details</template>
      </courseheader>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3">
      <div class="min-w-[376px] pr-[30px] col-span-1">
        <blogclassicsidebar />
      </div>
      <div class="col-span-2 ml-5">
        <blogdetailscontent />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'frontend',
  })
</script>
