<template>
  <div
    style="background: rgb(14, 15, 21)"
    class="w-full px-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center"
  >
    <div v-for="rate in gymrates" :key="rate.number" class="rate">
      <icon class="w-20 h-20 mb-10 font-light" name="uil:clock-five" />
      <h2 class="text-[48px] text-[#20AD96] font-extrabold">
        {{ rate.number }}
      </h2>
      <h4 class="title">{{ rate.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
gymrates: [

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
  color: white;
  font-size: 15px;
  font-weight: medium;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.34;
}

.rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  border-right: solid 0.1px #6969698f;
  border-left: solid 0.1px #6969698f;
  padding: 50px 0;
}
</style>

