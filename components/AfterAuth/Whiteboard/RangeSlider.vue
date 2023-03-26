<template>
  <VueSlider
    v-model="sliderValue"
    :lazy="true"
    :min="min"
    :max="max"
    :dot-size="12"
    :height="3"
    :interval="2"
    :process-style="{ background: 'black' }"
    :bg-style="{ backgroundColor: '#e6e9f0' }"
    :slider-style="{ backgroundColor: 'black', boxShadow: 'unset' }"
    tooltip="none"
    :width="'168px'"
  ></VueSlider>
</template>

<script>
import VueSlider from "vue-3-slider-component";
// import { reactive, toRefs } from "vue";

export default {
  // setup() {
  //   const data = reactive({ value: 0 });
  //   return toRefs(data);
  // },
  components: {
    VueSlider,
  },
  props: ["min", "max", "value", "onChange"],
  data() {
    return {
      sliderValue: this.value,
    };
  },
  watch: {
    sliderValue: function (size) {
      this.onChange(size);
    },
  },
};
</script>
