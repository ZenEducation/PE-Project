


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
            <!-- <i class="fa-solid fa-chalkboard-user dark:text-[#fff] text-[#000] text-[4rem]"></i> -->
            <i class="fal fa-chalkboard-user text-[#000] dark:text-[#fff] text-[80px]"  style="line-height: 1;"></i>
            
          </template>
          <template v-slot:cardHead>One - on - one online classes</template>
          <template v-slot:cardP>Personalized one-on-one online classes that cater to your unique learning needs, achieve
            your academic or personal goals with maximum flexibility and convenience.
          </template>
          <template v-slot:know><NuxtLink to="/blog/unlocking-success-the-power-of-personalized-attention-in-competitive-exams">Know More</NuxtLink></template>
        </indextwocard>

        <indextwocard>
          <template v-slot:cardIcon>
            <!-- <i class=" fa-solid fa-gear dark:text-[#fff] text-[#000] text-[4rem] "></i> -->
            
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#000] dark:fill-[#fff]" width="90" height="90"
            viewBox="0 0 256 256">
            <path
            d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm81.57 64h-40.18a139.15 139.15 0 0 0-23.45-50.2A90.32 90.32 0 0 1 209.57 90Zm8.43 38a89.7 89.7 0 0 1-3.83 26h-42.31a159 159 0 0 0 0-52h42.31a89.7 89.7 0 0 1 3.83 26Zm-90 90a1.75 1.75 0 0 1-1.32-.59C113.8 203.54 104.34 185.73 99 166h58c-5.34 19.73-14.8 37.54-27.68 51.41a1.75 1.75 0 0 1-1.32.59Zm-31.69-64a147.48 147.48 0 0 1 0-52h63.38a147.48 147.48 0 0 1 0 52ZM38 128a89.7 89.7 0 0 1 3.83-26h42.31a159 159 0 0 0 0 52H41.83A89.7 89.7 0 0 1 38 128Zm90-90a1.75 1.75 0 0 1 1.32.59C142.2 52.46 151.66 70.27 157 90H99c5.34-19.73 14.8-37.54 27.68-51.41A1.75 1.75 0 0 1 128 38Zm-17.94 1.8A139.15 139.15 0 0 0 86.61 90H46.43a90.32 90.32 0 0 1 63.63-50.2ZM46.43 166h40.18a139.15 139.15 0 0 0 23.45 50.2A90.32 90.32 0 0 1 46.43 166Zm99.51 50.2a139.15 139.15 0 0 0 23.45-50.2h40.18a90.32 90.32 0 0 1-63.63 50.2Z" />
          </svg>
          
        </template>
        <template v-slot:cardHead>World Class Tutors</template>
        <template v-slot:cardP>With the advent of technology, you now have access to world class tutors sitting in the
          opposite corner of the country, or the world.
        </template>
        <template v-slot:know><NuxtLink to="/blog/one-on-one-in-the-online-world-how-personalized-attention-from-tutors-can-benefit-remote-learners">Know More</NuxtLink></template>
      </indextwocard>
      
      <indextwocard>
        <template v-slot:cardIcon>
          
          <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#000] dark:fill-[#fff] icon-stroke" width="90"
          height="90" viewBox="0 0 24 24">
          <path
                d="M12 11.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5zm-3 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5zm4.415-5.96C15.71 1.195 9.385.88 5.29 4.584C1.195 8.289.88 14.614 4.584 18.709l-2.438 2.437A.5.5 0 0 0 2.5 22H12a10 10 0 0 0 6.709-2.585c4.096-3.705 4.412-10.03.706-14.125zM12 21H3.707l1.929-1.929a.5.5 0 0 0 0-.707a8.999 8.999 0 0 1 6.362-15.362A8.999 8.999 0 0 1 12 21z" />
              </svg>
          </template>
          <template v-slot:cardHead>EduCare Mentors</template>
          <template v-slot:cardP>Get expert guidance, support and personalized mentorship from an EduCare Mentor assigned
            to help you with you academic and non-academic issues.
          </template>
          <template v-slot:know><NuxtLink to="/blog/beyond-tutoring-how-educare-mentors-provide-holistic-support-to-students">Know More</NuxtLink></template>
        </indextwocard>
        
        <indextwocard>
          <template v-slot:cardIcon>
            <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#000] dark:fill-[#fff]" width="90" height="90"
            viewBox="0 0 256 256">
            <path
            d="M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h74v20H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-20h74a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22ZM48 54h160a10 10 0 0 1 10 10v82H38V64a10 10 0 0 1 10-10Zm160 132H48a10 10 0 0 1-10-10v-18h180v18a10 10 0 0 1-10 10Z" />
          </svg>
        </template>
        <template v-slot:cardHead>Remote learning</template>
        <template v-slot:cardP>Learn from anywhere in the world on desktop, tablet or mobile phone
          with an Internet connection.
        </template>
        <template v-slot:know><NuxtLink to="/blog/beyond-the-classroom-how-remote-learning-is-revolutionizing-educations">Know More</NuxtLink></template>
      </indextwocard>
      
      <indextwocard>
        <template v-slot:cardIcon>
          
          <svg xmlns="http://www.w3.org/2000/svg" class=" fill-[#000] dark:fill-[#fff]" width="90" height="90"
          viewBox="0 0 256 256">
          <path
          d="M231.36 116.19L87.28 28.06a14 14 0 0 0-14.18-.27A13.69 13.69 0 0 0 66 39.87v176.26a13.69 13.69 0 0 0 7.1 12.08a14 14 0 0 0 14.18-.27l144.08-88.13a13.82 13.82 0 0 0 0-23.62Zm-6.26 13.38L81 217.7a2 2 0 0 1-2.06 0a1.78 1.78 0 0 1-1-1.61V39.87a1.78 1.78 0 0 1 1-1.61A2.06 2.06 0 0 1 80 38a2 2 0 0 1 1 .31l144.1 88.12a1.82 1.82 0 0 1 0 3.14Z" />
        </svg>
          </template>
          <template v-slot:cardHead>Online Courses</template>
          <template v-slot:cardP>Get access to a wide range of high-quality courses that are accessible, affordable, and
            designed to help you achieve your academic goals.
          </template>
          <template v-slot:know><NuxtLink to="/blog/beyond-the-classroom-how-remote-learning-is-revolutionizing-educations">Know More</NuxtLink></template>
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

.icon-stroke {
  stroke-width: 5px;
}</style>