


<template>
  <div class="dark:bg-[#161821] pb-14">
    <!-- <div class="bg-white"> -->
    <div class="mx-6 md:mx-[100px]">
      <headers>
        <template v-slot:headerone>Education for everyone</template>
        <template v-slot:headertwo>
          Online
          <span class="text-[#20AD96] font-[400]">Tutoring</span> For
          Remote Learning.
        </template>
      </headers>

      <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <indextwocard>
          <template v-slot:cardIcon>
            <!-- <i class="fa-regular fa-flag dark:text-[#fff] text-[#000] text-[4rem] "></i> -->
            <i class="fa-solid fa-chalkboard-user dark:text-[#fff] text-[#000] text-[4rem]"></i>
          </template>
          <template v-slot:cardHead>One - on - one online classes</template>
          <template v-slot:cardP
            >Personalized one-on-one online classes that cater to your unique learning needs, achieve your academic or personal goals with maximum flexibility and convenience.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <!-- <i class=" fa-solid fa-gear dark:text-[#fff] text-[#000] text-[4rem] "></i> -->
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#000] dark:fill-[#fff]" width="90" height="90" viewBox="0 0 256 256"><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-26.37 144h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89ZM98 152a145.72 145.72 0 0 1 0-48h60a145.72 145.72 0 0 1 0 48Zm-58-24a87.61 87.61 0 0 1 3.33-24h38.46a161.79 161.79 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128Zm114.37-40h-52.74C107 69.66 116 53.13 128 40.11c12 13.02 21 29.55 26.37 47.89Zm19.84 16h38.46a88.15 88.15 0 0 1 0 48h-38.46a161.79 161.79 0 0 0 0-48Zm32.16-16h-35.43a142.39 142.39 0 0 0-20.26-45a88.37 88.37 0 0 1 55.69 45ZM105.32 43a142.39 142.39 0 0 0-20.26 45H49.63a88.37 88.37 0 0 1 55.69-45ZM49.63 168h35.43a142.39 142.39 0 0 0 20.26 45a88.37 88.37 0 0 1-55.69-45Zm101.05 45a142.39 142.39 0 0 0 20.26-45h35.43a88.37 88.37 0 0 1-55.69 45Z"/></svg>
          </template>
          <template v-slot:cardHead>World Class Tutors</template>
          <template v-slot:cardP
            >With the advent of technology, you now have access to world class tutors sitting in the opposite corner of the country, or the world. 
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#000] dark:fill-[#fff]" width="90" height="90" viewBox="0 0 512 512"><path d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"/></svg>
          </template>
          <template v-slot:cardHead>EduCare Mentors</template>
          <template v-slot:cardP
            >Get expert guidance, support and personalized mentorship from an EduCare Mentor assigned to help you with you academic and non-academic issues.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#000] dark:fill-[#fff]" width="90" height="90" viewBox="0 0 256 256"><path d="M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h74v20H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-20h74a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22ZM48 54h160a10 10 0 0 1 10 10v82H38V64a10 10 0 0 1 10-10Zm160 132H48a10 10 0 0 1-10-10v-18h180v18a10 10 0 0 1-10 10Z"/></svg>
          </template>
          <template v-slot:cardHead>Remote learning</template>
          <template v-slot:cardP
            >Learn from anywhere in the world on desktop, tablet or mobile phone
            with an Internet connection.
          </template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#000] dark:fill-[#fff]" width="90" height="90" viewBox="0 0 24 24"><path d="M8 19V5l11 7l-11 7Zm2-7Zm0 3.35L15.25 12L10 8.65v6.7Z"/></svg>
          </template>
          <template v-slot:cardHead>Online Courses</template>
          <template v-slot:cardP
            >Get access to a wide range of high-quality courses that are accessible, affordable, and designed to help you achieve your academic goals.
          </template>
        </indextwocard>
      </div>

      <div class="w-full">
        <oldschool />
      </div>
    </div>
  </div>
</template>

<script>
  

</script>




<style>
img {
  color: white;
}
</style>