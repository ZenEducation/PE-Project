<template>
  <headers class="text-center">
    <template v-slot:headerone>Join match coach at best</template>
    <template v-slot:headertwo
      >Latest Online
      <span class="text-[#20ad96] font-light">Courses</span></template
    >
  </headers>
  <div
    class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 rounded-md overflow-hidden"
  >
    <div
      v-for="course in courses"
      :key="course.id"
      class="w-12/12 rounded-md min-w-[300px] max-w-full text-white hover:scale-105 ease-in-out duration-150 hover:drop-shadow-md hover:shadow-gray-900 hover:shadow-lg"
    >
      <div class="rounded-md">
        <div class="h-[229px] bg-gray-500 rounded-t-md">
          <img :src="course.image" alt="" class="w-full" />
        </div>

        <div class="p-10 blue rounded-b-md">
          <h2 class="text-[#20ad96] text-[24px] font-bold mb-3">
            {{ course.price }}
          </h2>

          <h4 class="text-white text-[20px] font-bold">
            {{ course.title }}
          </h4>

          <div
            class="flex justify-start items-center mt-5 text-[14px] font-light"
          >
            <span class="flex justify-centere items-center">
              <icon class="w-4 h-4 mr-2" name="uil:file-alt" />
              {{ course.lessons }}
            </span>

            <span class="ml-4 flex justify-centere items-center">
              <icon class="w-4 h-4 mr-2" name="uil:users-alt" />
              {{ course.students }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full flex justify-center mt-10">
    <div
      class="flex relative w-10/12 md:w-6/12 text-[18px] text-center font-medium text-[#8C89A2]"
    >
      Get the most dedicated consultation for your life-changing course. Earn a
      certification for your effort and passion
      <div
        class="text-center text-[#20AD96] font-light flex items-center leading-4"
      >
        Get a Guide
        <icon name="uil:arrow-right" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
data(){
return {
courses: [
    {
        id: 1,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 2,
        image: "/images/courses/370/course-1.jpg",
        price: 'Free',
        title: 'Customer-Centric-Info-Tech-Strategies',
        lessons: '40 Lessons',
        students: '80 Students'
    },

        {
        id: 3,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 19,
        title: 'Opeen Programming Courses for Everyone: Python',
        lessons: '16 Lessons',
        students: '57 Students'
    }

]
}
}
}
</script>

<style>
</style>