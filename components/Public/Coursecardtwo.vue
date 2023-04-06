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
        min-w-[300px]
        max-w-full
        text-white
        hover:scale-105
        ease-in-out
        duration-150
        hover:drop-shadow-md hover:shadow-gray-900 hover:shadow-lg
      "
    >
      <div class="w-12/12">
        <div class="h-[229px] bg-gray-500">
          <img :src="course.image" alt="" class="w-full" />
        </div>

        <div class="relative p-8 pb-10 bg-black rounded-b-md">
          <span class="absolute right-[20px] top-[-40px]"
            ><p
              class="
                rounded-full
                flex
                items-center
                justify-center
                text-[24px] text-white
                font-extrabold
                green
                h-20
                w-20
              "
            >
              {{ course.price }}
            </p>
          </span>

          <span
            class="text-[15px] text-[#8C89A2] font-bold leading-[1.74] mb-1"
          >
            {{ course.date }}</span
          >
          <h3
            class="
              text-[24px] text-white
              hover:
              font-extrabold
              leading-[1.5]
              mb-1
            "
          >
            {{ course.title }}
          </h3>

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
        date: 'Jan 15, 2020',
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 2,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        date: 'Jan 15, 2020',
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 3,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        date: 'Jan 15, 2020',
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 4,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        date: 'Jan 15, 2020',
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 5,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        date: 'Jan 15, 2020',
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students'
    },

        {
        id: 6,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        date: 'Jan 15, 2020',
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
