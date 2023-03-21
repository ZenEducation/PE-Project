<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:m-[30px]">
    <tutor :imageSrc="'/images/testimonial/70/testimonial-1.jpeg'">
      <template v-slot:comment
        >I am happy with their arrangement of lessons and subjects. They reflect
        a scientific investigation into effective methods to adopt for
        learners.</template
      >
      <template v-slot:name> Luvic Dubble </template>
      <template v-slot:position>Private Tutor</template>
    </tutor>

    <tutor :imageSrc="'/images/testimonial/70/testimonial-2.jpeg'">
      <template v-slot:comment
        >I'm a very strict person so I require everything to be organized and
        neat. Then, I'll be able to make things right and shine. MaxCoach guys
        just got me.</template
      >
      <template v-slot:name> Mina Hollace </template>
      <template v-slot:position>IT Specialist</template>
    </tutor>
  </div>
</template>