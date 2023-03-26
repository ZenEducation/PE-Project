<template>
  <div class="blue page">
    <profileone />
    <profiletwo />
    <CourseMembershipTable />
  </div>
</template>

<script setup>
  import CourseMembershipTable from '@/components/Public/Coursemembershiptable.vue'

  definePageMeta({
    layout: 'frontend',
  })
</script>
