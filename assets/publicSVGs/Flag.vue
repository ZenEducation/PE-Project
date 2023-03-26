<template>
  <svg
    id="Layer_1"
    xml:space="preserve"
    enable-background="new 0 0 64 64"
    viewBox="0 0 64 64"
    height="64px"
    width="64px"
    y="0px"
    x="0px"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    alt="icon"
  >
    <line
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      :stroke="props.color"
      stroke-width="2"
      stroke-miterlimit="10"
      x1="7"
      y1="0"
      x2="7"
      y2="64"
    />
    <polyline
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      :stroke="props.color"
      stroke-width="2"
      stroke-miterlimit="10"
      points="32.062,6 26,11 26,35 57,35 51,23 57,11   26,11 "
    />
    <polyline
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      :stroke="props.color"
      stroke-width="2"
      stroke-miterlimit="10"
      points="26,30 7,30 7,6 32,6 32,11 "
    />
  </svg>
</template>

<script setup>
const props = defineProps(["color"]);
</script>
