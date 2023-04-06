<template>
  <div>
    <div class="text-center">
      <span class="sub-title">Let's Dream Big Together</span>
      <h2 class="title">Explore How can I help you</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3">
      <div
        v-for="card in explore"
        :key="card.title"
        class="lg:max-w-[372px] rounded-md overflow-hidden"
      >
        <div>
          <img src="/images/service/business-service-1.jpg" alt="image" />
        </div>

        <div class="relative text-center blue px-[35px] pt-[30px] pb-20">
          <div>
            <h3 class="text-[24px] font-[600] text-white leading-[1.5]">
              {{ card.title }}
            </h3>
          </div>
          <div class="text-[15px] text-[#dddddd] leading-[1.74] mt-2">
            <p>{{ card.content }}</p>
          </div>

          <button
            class="hover border-[#444] border-t-[1px] bg-transparent hover:green rounded-b-md text-[14px] font-bold text-[#20AD96] hover:text-white py-4 px-10 mt-[35px] absolute bottom-0 left-0 right-0"
          >
            Discover now
            <icon class="icon text-[#20AD96]" name="uil:arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            explore: [
                {
                    title: 'Consultative Training',
                    content: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.'
                },
                    {
                    title: 'Real Deal Coaching',
                    content: 'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.'
                },
                    {
                    title: 'Advisor Training Program',
                    content: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.'
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
  line-height: 32px;
  font-weight: 500;
  color: #20ad96;
  margin-bottom: 20px;
}

.title {
  font-size: 48px;
  line-height: 56px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: initial;
  margin: 45px 0px;
  color: white;
}

.hover:hover .icon {
  color: white;
}
</style>