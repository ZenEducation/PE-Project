<template>
  <div class="colorPicker">
    <div id="darkColors" class="">
      <div
        v-for="(color, i) in darkColors"
        :key="i"
        class="color"
        :style="{ 'background-color': color }"
        @click="selectColor(color)"
      ></div>
    </div>
    <div id="vividColors" class="">
      <div
        v-for="(color, i) in vividColors"
        :key="i"
        class="color"
        :style="{ 'background-color': color }"
        @click="selectColor(color)"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['vividColors', 'darkColors', 'onSelectColor'],
    methods: {
      selectColor: function (color) {
        this.onSelectColor(color)
      },
    },
  }
</script>

<style scoped>
  .colorPicker {
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .colorPicker .color {
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 15px;
    transition: opacity 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .colorPicker .color:not(.active):hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
</style>
