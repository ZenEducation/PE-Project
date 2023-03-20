<template>
  <headers class="text-center">
    <template v-slot:headerone>BEGIN YOUR JOURNEY AT MAXCOACH</template>
    <template v-slot:headertwo>
      <div class="text-[48px]">
        Signature <span class="text-[#20ad96] font-light">Courses</span>
      </div>
    </template>
  </headers>

  <div
    class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
  >
    <div
      v-for="course in courses"
      :key="course.id"
      class="relative border-[0.2px] border-[#696969] rounded-md w-12/12 min-w-[300px] max-w-full text-white hover:border-green-500 ease-in-out duration-150 hover:drop-shadow-md hover:shadow-gray-900 hover:shadow-lg"
    >
      <div class="w-12/12">
        <div class="relative w-12/12 rounded-md">
          <div class="thumbnail relative">
            <a href="blog/12-essential-bodyweight-exercises" class="image"
              ><img
                class="rounded-t-md w-full"
                src="/images/blog/370/blog-1.jpg"
            /></a>
            <div
              class="absolute bottom-0 left-0 px-6 py-2 green rounded-tr-md text-[18px] font-bold"
            >
              {{ course.tag }}
            </div>
          </div>
        </div>

        <div class="pt-5 relative px-8 pb-10 blue rounded-b-md">
          <div
            class="text-[14px] text-white tracking-[1px] leading-[1.74] mb-1 flex items-center"
          >
            <img
              class="mr-2 rounded-[50%]"
              src="/images/courses/course-avatar.jpeg"
              alt="/images/courses/course-avatar.jpeg"
            />
            {{ course.name }}
          </div>
          <h3
            class="text-[20px] text-white hover: font-extrabold leading-[1.5] mt-2 mb-4"
          >
            {{ course.title }}
          </h3>

          <div
            class="flex justify-start items-center mt-5 text-[14px] font-light text-white"
          >
            <span class="flex justify-centere items-center">
              <icon class="w-4 h-4 mr-2" name="uil:file-alt" />
              {{ course.lessons }}
            </span>

            <span class="ml-4 flex justify-centere items-center">
              <icon class="w-4 h-4 mr-2" name="uil:user" />
              {{ course.students }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full flex justify-center mb-10">
    <button
      class="green hover:bg-[#3F3A64] rounded-md text-[15px] font-bold text-white py-4 px-10 flex items-center"
    >
      View all Courses
      <icon class="ml-2 text-white" name="uil:arrow-right" />
    </button>
  </div>
</template>


<script>

export default {
data(){
return {
courses: [
    {
        id: 1,
        tag: '$'+ 40,
        image: "images/courses/370/course-1.jpg",
        name: 'Maya Parboti',
        title: 'Complete Fitness Trainer: Beginner to Advanced',
        students: '32 students',
        lessons: '50 lessons',
    },

        {
        id: 2,
        tag: 'Free',
        image: "images/courses/370/course-1.jpg",
        name: 'Maggie Strickland',
        title: 'Lazy Dancer Ballet Burn – 30 days programme',
        students: '45 students',
        lessons: '70 lessons',
    },

        {
        id: 3,
        tag: '$'+ 19,
        image: "images/courses/370/course-1.jpg",
        name: 'Blanche Fields',
        title: 'Open Programming Courses for Everyone: Python',
        students: '16 students',
        lessons: '57 lessons',
    },

        {
        id: 4,
        tag: '$'+ 26,
        image: "images/courses/370/course-1.jpg",
        name: 'Maggie Strickland',
        title: 'The Ultimate Bodyweight Workout For Warriors',
        students: '14 students',
        lessons: '67 lessons',
    },

        {
        id: 5,
        tag: '$'+ 40,
        image: "images/courses/370/course-1.jpg",
        name: 'Baraka Hisham',
        title: 'Use Your Health & Fitness Expertise to Earn A Living Online',
        students: '16 students',
        lessons: '57 lessons',
    },

        {
        id: 6,
        tag: 'Free',
        image: "images/courses/370/course-1.jpg",
        name: 'Maria Maya',
        title: 'Calisthenics Masterclass for Beginners guys',
        students: '16 students',
        lessons: '57 lessons',
    },



]
}
}
}
</script>


