<template>
  <div class="grid md:grid-cols-3 lg:w-3/4 mx-auto gap-[30px]">
    <div class="rate">
      <h2 class="text-[48px] text-[#20AD96] font-extrabold">

        {{ n1 }} +
      
      </h2>
      <h4 class="title text-secondary dark:text-white">Students Taught</h4>
    </div>

    <div class="rate">
      <h2 class="text-[48px] text-[#20AD96] font-extrabold">{{ n2 }} +</h2>
      <h4 class="title text-secondary dark:text-white">kinds of exams</h4>
    </div>

    <div class="rate">
      <h2 class="text-[48px] text-[#20AD96] font-extrabold">{{ n3 }} %</h2>
      <h4 class="title text-secondary dark:text-white">Satisfaction rate</h4>
    </div>
  </div>
</template>

<script setup>
import VueNumber from 'vue-number-animation'
const n1= ref(0)
const n2 = ref(0)
const n3  = ref(0)


window.addEventListener('scroll', () =>
{
  console.log(scrollY)
if( scrollY>1950 && scrollY<2200){
  setInterval(() => {
    if(n1.value < 100) {
        n1.value++;
    }
    if(n2.value < 50) {
        n2.value++;
    }
    if(n3.value < 100) {
        n3.value++;
    }
}, 100);
}
}
)
</script>


<style>
.title {
  margin-top: 14px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.34;
}

.rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 12px;
}
</style>