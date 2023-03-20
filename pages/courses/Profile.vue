<template>
  <div class="blue page">
    <profileone />
    <profiletwo />
    <CourseMembershipTable />
  </div>
</template>
<script setup>
import CourseMembershipTable from "@/components/AfterAuth/FrontEndTemplate/Coursemembershiptable.vue";

definePageMeta({
  layout: "frontend",
});
</script>
