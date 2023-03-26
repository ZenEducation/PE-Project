<script setup>
  import { ref } from 'vue'
  import { colorsBgLight } from '@/configs/colors.js'

  defineProps({
    color: {
      type: String,
      required: true,
      validator: (value) =>
        ['info', 'danger', 'success', 'warning'].includes(value),
    },
    position: {
      type: String,
      default: 'top-0 right-0',
    },
  })

  const hasPing = ref(true)

  setTimeout(() => {
    hasPing.value = false
  }, 3000)
</script>

<template>
  <div
    class="w-2.5 h-2.5 rounded-full absolute"
    :class="[position, colorsBgLight[color], { 'animate-ping': hasPing }]"
  />
</template>
