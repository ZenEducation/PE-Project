


<template>
  <div class="dark:bg-[#161821] pb-14">
    <!-- <div class="bg-white"> -->
    <div class="mx-6 md:mx-[100px]">
      <headers>
        <template v-slot:headerone>Education for everyone</template>
        <template v-slot:headertwo>
          Online
          <span class="text-[#20AD96] font-[400]">Coaching Lessons</span> For
          Remote Learning.
        </template>
      </headers>

      <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <indextwocard>
          <template v-slot:cardIcon>
            <img src="/svgs/flag.svg" />
          </template>
          <template v-slot:cardHead>Life Mentoring</template>
          <template v-slot:cardP
            >Get some soul healing and guidance for your future career and
            vocational directions.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img src="/svgs/selfdevelopment.svg" />
          </template>
          <template v-slot:cardHead>Self Development</template>
          <template v-slot:cardP
            >Develop skills for career of various majors including computer
            science &amp; language competence.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img src="/svgs/consultancy.svg" />
          </template>
          <template v-slot:cardHead>Ask Consultancy</template>
          <template v-slot:cardP
            >Make a reservation with our special consultant to learn what's best
            for your dream career.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <img src="/svgs/learning.svg" />
          </template>
          <template v-slot:cardHead>Remote Learning</template>
          <template v-slot:cardP
            >Learn from anywhere in the world on desktop, tablet or mobile phone
            with an Internet connection.
          </template>
        </indextwocard>
      </div>

      <div class="w-full">
        <oldschool />
      </div>
    </div>
  </div>
</template>


<style>
img {
  color: white;
}
</style>