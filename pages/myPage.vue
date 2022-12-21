<template>
  <div class="bg-gray-900 text-white flex justify-center text-lg">
    <h1>Hello from My Page</h1>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
