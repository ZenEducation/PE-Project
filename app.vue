<script setup>
import { useStyleStore } from "@/stores/style.js";
import { darkModeKey, styleKey } from "@/configs/config";
import { useMainStore } from "@/stores/main.js";
import "@/assets/css/main.css";

const mainStore = useMainStore();
const styleStore = useStyleStore();
const loading = ref(true);

onMounted(() => {
  styleStore.setDarkMode("1");
  // todo revert checks dark mode from localstorage
  if (
    (!localStorage[darkModeKey] &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage[darkModeKey] === "1"
  ) {
    styleStore.setDarkMode('1');
  }
  loading.value = false;
});
</script>

<template>
  <NuxtLayout v-if="!loading">
    <NuxtPage />
  </NuxtLayout>
</template>
