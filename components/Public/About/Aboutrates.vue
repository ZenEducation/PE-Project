<template>
  <div
    class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center"
  >
    <div v-for="rate in learningrates" :key="rate.number" class="flex flex-col justify-center items-center mb-[30px] px-3 py-0">
      <h2 class="text-[48px] text-[#20AD96] font-extrabold">
        {{ rate.number }}
      </h2>
      <h4 class="dark:text-white text-[#3f3a64] text-[15px] font-[bold] uppercase tracking-[2px] leading-[1.34] mt-3.5">{{ rate.title }}</h4>
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

</style>