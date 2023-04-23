<template>
  <div class="blue p-[100px]">
    <div class="text-center mb-20">
      <span class="sub-title">Let’s Dream Big Together</span>
      <h2 class="bigtitle">
        We are pioneers of the digital approach, using leading-edge<br />
        technology to simplify procedures and apply executive<br />
        coaching in the new age of digitalization.
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="card in dreamcards"
        :key="card.header"
        class="flex items-start mb-10"
      >
        <img class="mr-5" src="" />
        <div>
          <h3 class="text-[24px] font-[600] text-white leading-[1.5]">
            {{ card.header }}
          </h3>
          <div class="text-[15px] text-[#dddddd] leading-[1.74] mt-2">
            <p>
              {{ card.content }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <button
        class="hover:bg-green rounded-md text-[14px] font-bold text-[#20ad96] hover:text-white hover:green hover:border-none py-4 px-10 mt-[35px] border border-white box-border m-4"
      >
        Learn more
      </button>
      <button
        class="green hover:bg-[#3F3A64] rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px] m-4"
      >
        Get started today
      </button>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return{
dreamcards: [
    {
        header: 'One on One',
        content: 'Getting the necessary clarity about the current state to help you improve your game.'
    },
        {
        header: 'Anywhere',
        content: 'Access to valuable and portable program which allow you to setup and live anywhere you want.'
    },
        {
        header: 'On Time',
        content: 'Punctuality is our top priority because its an essential criteria to assess a program quality.'
    },
        {
        header: 'Online Courses',
        content: 'Online business coaching now offers you a very powerful way to empower your business into success.'
    },
        {
        header: 'Consulting',
        content: 'You will get a clear sense of direction for your business, thorough assessment and faster results.'
    },
        {
        header: 'Self Development',
        content: 'Business Coaching often keep your focus and develop you both in a professional and personal way.'
    },
]
        }
    }
}
</script>


<style scoped>
.sub-title {
  display: block;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.34;
  color: #20ad96;
  margin-bottom: 30px;
  text-transform: none;
}

.bigtitle {
  font-size: 34px;
  font-weight: bold;
  line-height: 1.42;
  margin: 0;
  color: white;
}
</style>