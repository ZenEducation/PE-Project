<template>
  <div>
    <div class="page pt-[100px]">
      <div
        class="w-12/12 flex flex-col justify-center items-center text-center"
      >
        <headers>
          <template v-slot:headerone>new horizon is calling</template>
          <template v-slot:headertwo>
            Take your interest and register an online class <br />
            today to enjoy life fully
          </template>
        </headers>

        <button
          class="
            text-[14px] text-white
            font-bold
            px-12
            py-4
            bg-[#20ad96]
            rounded-md
            mt-12
          "
        >
          Get started for free
        </button>
      </div>

      <div class="py-[100px]">
        <div class="w-full grid grid-cols-1 md:grid-cols-4 text-center">
          <div v-for="rate in learningrates" :key="rate.number" class="rate">
            <h2 class="text-[48px] text-[#20AD96] font-extrabold">
              {{ rate.number }}
            </h2>
            <h4 class="title">{{ rate.title }}</h4>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center relative bottom-[-90px]">
        <img
          class="image"
          src="/images/others/hero-image.png"
          alt="image"
        />
      </div>
    </div>

    <div class="w-12/12 z-30">
      <svg
        class="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        height="100"
        fill="#161821"
      >
        <path
          class="elementor-shape-fill"
          d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
learningrates: [{
  number: 1.926,
  title: 'Finished sessions'
},
{
  number: 3.092,
  title: 'online enrollment'
},
{
  number: 200,
  title: 'Subjects taught'
},{
  number: 150,
  title: 'Satisfaction rate'
}
]
    }
  }
}
</script>

<style>
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
  margin-bottom: 30px;
  padding: 0 12px;
}
</style>