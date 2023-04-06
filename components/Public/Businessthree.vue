<template>
  <div>
    <div class="text-center">
      <span class="sub-title">Let's Dream Big Together</span>
      <h2 class="title">Explore How can I help you</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="course in courses"
        :key="course.id"
        class="hover relative max-w-[276px] max-h-[374px] overflow-hidden"
      >
        <img
          class="max-w-[276px] max-h-[374px] rounded-md"
          src="/images/courses/385/course-1.jpg"
          alt="Course Image"
        />

        <div class="bkg absolute bottom-0 w-full h-full"></div>

        <div class="slide absolute bottom-[-50%] w-full h-full">
          <div class="">
            <div class="p-4">
              <h2 class="text-[#20ad96] text-[24px] font-bold mb-3">
                {{ course.price }}
              </h2>

              <h4 class="text-white text-[24px] font-bold">
                {{ course.title }}
              </h4>

              <div
                class="flex justify-start items-center mt-5 text-[14px] font-light"
              >
                <span class="flex justify-centere items-center text-white">
                  <icon class="w-4 h-4 mr-2" name="uil:file-alt" />
                  {{ course.lessons }}
                </span>

                <span class="ml-4 flex justify-centere items-center text-white">
                  <icon class="w-4 h-4 mr-2" name="uil:users-alt" />
                  {{ course.students }}
                </span>
              </div>

              <div class="text-[14px] leading-[1.74] text-white mt-3">
                {{ course.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-16">
      <div class="text-[18px] text-[#8C89A2] font-medium">
        Take the control of their life back and start,<br />
        doing things to make their dream come true.<br />

        <div class="text-[#20ad96] font-bold">
          View all courses
          <icon class="text-[#20ad96]" name="uil:arrow-right" />
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
        students: '51 Students',
        content: 'The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and…',
    },

        {
        id: 2,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students',
        content: 'The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and…',
    },

        {
        id: 3,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students',
        content: 'The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and…',
    },

        {
        id: 4,
        image: "/images/courses/370/course-1.jpg",
        price: '$' + 40,
        title: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '51 Students',
        content: 'The purpose of this course is to provide the advanced writing techniques commonly used for inspiring readers and…',

    }
]
}
}
}
</script>

<style>
.sub-title {
  display: block;
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: #20ad96;
  margin-bottom: 20px;
}

.title {
  font-size: 48px;
  line-height: 56px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: initial;
  margin: 45px 0px;
  color: white;
}

.slide {
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(0, 0, 0, 0.1) 17.43%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.bkg {
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) 0%,
    rgba(0, 0, 0, 0.1) 40.72%,
    #000000 100%
  );
}

.hover:hover .slide {
  top: 12%;
}
</style>