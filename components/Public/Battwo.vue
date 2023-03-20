<template>
  <div class="page bg-[#161821] py-[100px] w-12/12">
    <div class="flex justify-between items-center">
      <headers>
        <template v-slot:headerone>MAKE IT MAXCOACH</template>
        <template v-slot:headertwo>
          4 Steps to Earn
          <span class="font-light text-[#20AD96]">
            the Honour CFDR <br />
            Certification
          </span>
          from courses
        </template>
      </headers>

      <div class="four">
        04
        <h4 class="uppercase">steps</h4>
      </div>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="step in steps" :key="step.number">
        <div
          :class="line"
          class="
            green
            rounded-full
            mr-10
            lg:mr-0 lg:mb-14
            p-20px
            w-[48px]
            h-[48px]
            leading-[44px]
            text-center text-[18px] text-white
            border-[2px] border-[#555]
          "
        >
          {{ step.number }}
        </div>
        <div class="w-11/12 p-[15px] md:px-[15px] md:py-0">
          <h2>{{ step.title }}</h2>
          <p>{{ step.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

            line: 'line',
            
            steps: [
                {
                    number: 1,
                    title: 'Register for a CFDR preliminary categorized class',
                    content: 'CFDR preliminary classes whose names are ended with 101CF. Finishing these classes will bring you the basic knowledge and skills.'
                },

                {
                    number: 2,
                    title: 'Finished all obligatory subjects in CFDR program',
                    content: 'Learners have to finish these subjects within the period of 3 years. Early completion will reward them with a faster certifying process.'
                },

                {
                    number: 3,
                    title: 'Submit all essential documents & related proof of completion',
                    content: 'We need to verify your participation in all subjects included and collect all the scores as well as assessment to grade your certificate.'
                },

               {
                    number: 4,
                    title: 'Receive printed certification via postal & e-version via emails',
                    content: " We'll send your certificate by postal line in one week after the verification process and also email an electronic version to your inbox"
                },
            ]
        }
    }
}
</script>

<style scoped>
h2 {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 9px;
  color: #ffffff;
}

p {
  font-size: 15px;
  line-height: 1.74;
  font-weight: 400;
  color: #ddd;
}

h4 {
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 60px;
  /* transform: translate(0, -50%); */
  font-size: 14px;
  line-height: 0.8;
  font-weight: 400;
  color: #ededed;
  z-index: 1;
}

h4::before {
  content: " ";
  width: 50px;
  height: 1px;
  background: #20ad96;
  position: absolute;
  top: 50%;
  left: -130%;
}

.four {
  position: relative;
  font-size: 120px;
  font-weight: 900;
  color: #111;
}

.line::after {
  content: " ";
  height: 2px;
  background-color: #555;
  width: 300px;
}
</style>