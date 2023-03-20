<template>
  <div class="blue page">
    <profileone />
    <profiletwo />
    <CourseMembershipTable />
  </div>
</template>
<script setup>
import CourseMembershipTable from "@/components/FrontEndTemplate/Coursemembershiptable.vue";

definePageMeta({
  layout: "frontend",
});
</script>
