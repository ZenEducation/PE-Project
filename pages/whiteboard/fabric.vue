<template>
  <NuxtLayout name="wbfabric">
    <div class="mydiv"><whiteboard></whiteboard></div>
  </NuxtLayout>
</template>

<script>
  import Whiteboard from '@/components/AfterAuth/WBFabric/WBFabric.vue'
  export default {
    components: {
      whiteboard: Whiteboard,
    },
  }
</script>
