<script setup>
  import BaseIcon from '@/components/AfterAuth/Display/BaseIcon.vue'

  defineProps({
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
    small: Boolean,
  })
</script>

<template>
  <div
    class="inline-flex items-center capitalize leading-none text-slate-700 dark:text-slate-100"
    :class="[small ? 'text-xs' : 'text-sm']"
  >
    <BaseIcon
      v-if="icon"
      :path="icon"
      h="h-4"
      w="w-4"
      :class="small ? 'mr-1' : 'mr-2'"
      :size="small ? 14 : null"
    />
    <span>{{ label }}</span>
  </div>
</template>
