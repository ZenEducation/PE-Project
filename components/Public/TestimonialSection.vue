
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:m-[30px]">
    <TestimonialCard id="aadya" :imageSrc="'/images/testimonial/70/aadya-deshpande.jpg'">
      <template v-slot:comment>
        <div class="font-medium	">
        My NEET performance would not have been possible without them! Their Early Completion of
        Syllabus Strategy enabled me to revise the entire syllabus more than 5 to 6 times, which was not possible for
        other students that I know from other institutes, as their syllabus was completed just 3 to 4 months before the
        NEET exam, in which case revision would not at all be possible for any student.
      </div>
        <NuxtLink to="/about/testimonials#aadya" class="text-[#20ad96]">See More...
        </NuxtLink>
      </template>
      <template v-slot:name>    <div class="font-bold	"> Aadya Deshpande </div></template>
      <template v-slot:position> <div class="font-medium"> NEET All India Rank | 355 </div></template>
    </TestimonialCard>

    <TestimonialCard id="saurabh" :imageSrc="'/images/testimonial/70/saurabh-parekh.jpg'">
      <template v-slot:comment>
         <div class="font-medium	">
        My experience was very wonderful. I have learnt a lot here. The professors at are very
        helpful. Due to the personalized teaching mode, I was able to clear all my doubts effectively. Getting my doubts
        clarified on time improved my practice test scores. I would strongly recommend JEE Advanced and JEE Main aspirants
        to enroll with them.</div>
        <NuxtLink to="/about/testimonials#saurabh" class="text-[#20ad96]">See More...
        </NuxtLink>
      </template>
      <template v-slot:name> <div class="font-bold	"> Saurabh Parekh </div></template>
      <template v-slot:position>  <div class="font-medium"> B-TECH | IIT BOMBAY</div></template>
    </TestimonialCard>

    <TestimonialCard id="owais" :imageSrc="'/images/testimonial/70/owais-chunawala.jpg'">
      <template v-slot:comment>  <div class="font-medium	">I was guided every step of the way by the professors and mentors. All my doubts were
        cleared very effectively and on-time. I was given numerous tips, tricks and techniques for efficient preparation,
        fast problem-solving and was made to solve 100s of questions from the learning sources, in a structured and
        systematic manner, and that greatly impacted my test scores and helped me gain confidence.</div>
        <NuxtLink to="/about/testimonials#owais" class="text-[#20ad96]">See More...
        </NuxtLink>
      </template>
      <template v-slot:name>  <div class="font-bold	">Owais Chunawala </div></template>
      <template v-slot:position><div class="font-medium">B-TECH | IIT BOMBAY</div></template>
    </TestimonialCard>

    <TestimonialCard id="ojas" :imageSrc="'/images/testimonial/70/ojas-deshpande.jpg'">
      <template v-slot:comment> <div class="font-medium	"> The one to one teaching and mentoring methodology helped me in a great way. It allowed the
        professors to monitor my progress at each step. I received feedback pertaining to my areas of improvement and not
        just some general feedback that is applicable to everyone. That helped me immensely to focus on my weak areas and
        strengthen them with time.</div>
        <NuxtLink to="/about/testimonials#ojas" class="text-[#20ad96]">See More...
        </NuxtLink>
      </template>
      <template v-slot:name>  <div class="font-bold	">Ojas Deshpande</div> </template>
      <template v-slot:position><div class="font-medium">M.B.B.S | KING EDWARD MEMORIAL HOSPITAL AND SETH GORDHANDAS SUNDERDAS MEDICAL COLLEGE,
        MUMBAI </div></template>
    </TestimonialCard>
  </div>
</template>
<script setup>
import TestimonialCard from "./TestimonialCard.vue";
</script>
