<template>
  <div class="page blue">
    <div class="py-[100px]">
      <courseheader>
        <template #title>Course Details</template>
      </courseheader>
    </div>

    <div class="pb-[50px] flex flex-col lg:flex-row-reverse">
      <div class="p-3 lg:ml-6 lg:float-right">
        <coursesidebar />
      </div>

      <div class="p-3 lg:clear-right">
        <div class="relative w-12/12 mb-8">
          <ul class="flex">
            <li @click="display = 'overview'">Overview</li>
            <li @click="display = 'instructor'">Instructor</li>
            <li @click="display = 'review'">Reviews</li>
          </ul>
          <div class="h-[2px] w-full bg-white absolute bottom-[2px] z-0"></div>
        </div>

        <div v-show="display === 'overview'">
          <courseoverview />
        </div>
        <div v-show="display === 'instructor'">
          <courseinstructor />
        </div>
        <div v-show="display === 'review'">
          <coursereview />
        </div>
      </div>
    </div>

    <div class="w-12/12">
      <div class="font-bold text-[24px] text-center text-white">
        Related Courses
      </div>
      <div class="w-12/12 flex overflow-x-auto gap-4 py-10">
        <div
          v-for="course in courses"
          :key="course.id"
          class="w-12/12 rounded-md min-w-[300px] max-w-full text-white hover:scale-105 ease-in-out duration-150 hover:drop-shadow-md hover:shadow-gray-900 hover:shadow-lg"
        >
          <div class="">
            <div class="h-[229px] bg-gray-500">
              <img :src="course.image" alt="" class="w-full" />
            </div>

            <div class="p-10">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "overview",

      courses: [
        {
          id: 1,
          image: "/images/courses/370/course-1.jpg",
          price: "$" + 40,
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "51 Students",
        },

        {
          id: 2,
          image: "/images/courses/370/course-1.jpg",
          price: "$" + 40,
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "51 Students",
        },

        {
          id: 3,
          image: "/images/courses/370/course-1.jpg",
          price: "$" + 40,
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "51 Students",
        },

        {
          id: 4,
          image: "/images/courses/370/course-1.jpg",
          price: "$" + 40,
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "51 Students",
        },

        {
          id: 5,
          image: "/images/courses/370/course-1.jpg",
          price: "$" + 40,
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "51 Students",
        },

        {
          id: 6,
          image: "/images/courses/370/course-1.jpg",
          price: "$" + 40,
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "51 Students",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul li {
  font-weight: 900;
  font-size: 20px;
  padding: 9px 25px;
  color: #ababab;
  position: relative;
}

ul li:hover {
  color: #333333;
}

li::after {
  content: "  ";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #20ad96;
  height: 2px;
  display: none;
  z-index: 100;
}

ul li:hover::after {
  display: block;
}
</style>
