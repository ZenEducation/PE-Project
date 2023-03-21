<template>
  <div
    class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center px-5 md:px-[100px] blue py-[50px]"
  >
    <div v-for="rate in learningrates" :key="rate.number" class="rate">
      <div class="mb-[50px] lg:mb-[20px]">
        <div
          class="text-[18px] lg:text-[24px] font-bold max-w-[180px] text-white mb-[20px] leading-[1.34]"
        >
          {{ rate.type }}
        </div>
        <h2 class="large-rate">
          {{ rate.number }}
        </h2>
        <h4 class="title">{{ rate.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
learningrates: [{
  number: 1790,
  title: 'ENROLLED LEARNERS',
  type: 'Successfully trained',
},
{
  number: 19,
  title: 'COUNTRYWIDE AWARDS',
  type: 'Proudly Received'
},
{
  number: 24,
  title: 'LOCAL BRANCHES',
  type:'Firmly Established'
},
{
  number: 1090,
  title: 'BLOG POSTS',
  type:'Getting Featured on'
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
  padding: 0 12px;
}
</style>