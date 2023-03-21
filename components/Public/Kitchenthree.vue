<template>
  <div class="padding-responsive blue">
    <div>
      <headers class="text-center">
        <template v-slot:headerone
          ><div class="text-[#6ac5f1] subtitle-responsive normal-case">
            Made Fresh Weekly
          </div></template
        >
        <template v-slot:headertwo
          ><div class="text-[40px] title-responsive">
            Latest Online Courses
          </div></template
        >
      </headers>
    </div>

    <div
      class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-10 py-10"
    >
      <div
        v-for="course in courses"
        :key="course.id"
        class="w-12/12 overflow-hidden min-w-[260px] lg:max-w-[370px] text-white ease-in-out duration-150 hover:drop-shadow-md hover:shadow-gray-900 hover:shadow-lg"
      >
        <div class="w-12/12">
          <div>
            <img
              class="w-full"
              src="/images/courses/330/kitchen-course-2.jpg"
              alt=""
            />
          </div>

          <div class="pt-[26px] pb-[20px]">
            <h2 class="text-[#ef6f31] text-[18px] font-bold mb-3">
              {{ course.price }}
            </h2>

            <h4 class="text-white hover:text-[#ef6f31] text-[20px] font-bold">
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

    <div class="flex justify-center">
      <button
        class="bg-[#ef6f31] hover:bg-[#6ac5f1] rounded-md text-[14px] font-bold text-white py-4 px-10 mt-[35px] flex items-center"
      >
        View all courses
        <icon class="ml-2" name="uil:arrow-right" />
      </button>
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
        title: 'Reboot Family’s Eating Habit in a Practical & Real LifeWay',
        lessons: '4 Lessons',
        students: '51 Students'
    },

        {
        id: 2,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 19,
        title: 'Ketogenic Diet Ketosis Nutrition Health Coach Certification',
        lessons: '11 Lessons',
        students: '59 Students'
    },

        {
        id: 3,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 35,
        title: 'Gluten-Free & Paleo Family Meals For Diet Persons',
        lessons: '7 Lessons',
        students: '28 Students'
    },

        {
        id: 4,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 99,
        title: 'Professional Cooking Class For Senior Chefs',
        lessons: '14 Lessons',
        students: '51 Students'
    },

        {
        id: 5,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 25,
        title: 'Master The Art of Indian Cooking – Indian Culinary World',
        lessons: '5 Lessons',
        students: '33 Students'
    },

        {
        id: 6,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 44,
        title: 'Life Mastery – Be Happy, Healthy And Successful Simplified',
        lessons: '9 Lessons',
        students: '51 Students'
    },

        {
        id: 7,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 25,
        title: 'How to Make the Perfect Cup – Become a Coffee Expert',
        lessons: '8 Lessons',
        students: '43 Students'
    },

        {
        id: 8,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 19,
        title: 'Get Your Dream Body – Weight Loss & Nutrition',
        lessons: '8 Lessons',
        students: '66 Students'
    }

]
}
}
}
</script>

