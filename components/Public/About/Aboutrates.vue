<template>
  <div
    class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center"
  >
    <div v-for="rate in learningrates" :key="rate.number" class="rate">
      <h2 class="text-[48px] text-[#20AD96] font-extrabold">
        {{ rate.number }}
      </h2>
      <h4 class="dark:text-white text-[#3f3a64] title">{{ rate.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
learningrates: [

{
  number: 1.926,
  title: 'Finished Sessions'
},
    
{
  number: 3.092,
  title: 'Online Enrollment'
},
{
  number: 200,
  title: 'Subjects taught'
},
{
  number: 150,
  title: 'Satisfaction rate'
}
]
    }
  }
}
</script>

<style scoped>
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