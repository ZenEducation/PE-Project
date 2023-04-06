<template>
  <div
    class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10"
  >
    <div
      v-for="course in courses"
      :key="course.id"
      class="
        w-12/12
        rounded-md
        min-w-[250px]
        max-w-full
        dark:text-white
        hover:scale-105
        ease-in-out
        duration-150
        hover:drop-shadow-md hover:shadow-gray-900 hover:shadow
      "
    >
      <div class="flex flex-col">
        <div class="h-[229px] flex">
          <img :src="course.image" alt="" class="object-contain mx-auto" />
        </div>

        <div class="p-10">
          <h2 class="text-[#20ad96] text-[24px] font-bold mb-3">
            {{ course.price }}
          </h2>

          <h4 class="text-[20px] hover:text-primary font-bold">
            {{ course.title }}
          </h4>

          <div
            class="flex justify-start items-center text-[#696969] mt-5 text-[14px] font-light"
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
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 3,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 4,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 5,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 6,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    }

]
}
}
}
</script>

<style>
</style>