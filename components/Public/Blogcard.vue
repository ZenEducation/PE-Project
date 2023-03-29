
<template>
  <div class="w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
    <div v-for="course in displayedCourses" :key="course.id"
      class="group w-12/12 rounded min-w-[300px] max-w-[370px] dark:text-white ease-in-out duration-150 hover:drop-shadow-sm hover:shadow-gray-900 hover:shadow-sm">
      <div class="">
        <div class="h-[229px] rounded-md overflow-hidden">
          <div class="thumbnail ">
            <a href="blog/12-essential-bodyweight-exercises" class="image"><img class="rounded-md object-contain group-hover:scale-[1.15] transition-all ease-in-out duration-500"
                :src="course.image" width="370" height="277.5" /></a>
          </div>
        </div>

        <div class="p-8 pl-8 pb-10 dark:blue rounded-b-md">
          <span class="text-[15px] text-[#8C89A2] tracking-[1px] uppercase leading-[1.74] mb-1">
            {{ course.bio }}</span>
          <h3
            class="text-[24px] hover: font-extrabold leading-[1.5] mb-1 text-[#3f3a64] dark:text-white hover:text-[#20ad96] dark:hover:text-[#20ad96] hover:cursor-pointer">
            <NuxtLink :to="`/blog/blogclassic#${course.id}`">{{ course.title }}</NuxtLink>
          </h3>

          <div class="flex justify-start items-center mt-5 text-[14px] font-light">
            <span class="flex justify-centere items-center text-[#333] dark:text-[#696969]">
              <i class="fa fa-calendar-day h-5 w-5" />
              {{ course.date }}
            </span>

            <span class="ml-4 flex justify-center items-center text-[#333] dark:text-[#696969]">
              <i class="fa fa-clock h-5 w-5" />
              {{ course.views }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <ul class="flex flex-row dark:text-white">
      <li class="font-blod p-[10px]"><a href="#">Prev</a></li>
      <li v-for="page in totalPages" :key="page" class="font-blod p-[10px]" :class="{ active: page === currentPage }">
        <a href="#" @click.prevent="currentPage = page" class="hover:cursor-pointer hover:text-[#20ad96]"  >{{ page }}</a>
      </li>
      
      <li class="font-blod p-[10px]"><a href="#">Next</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courses: [
      {
          id: 1,
          image: "/images/blog/blog-images-grid/blog-1.jpg",
          bio: '',
          date: 'June 21, 2022',
          title: 'Maximizing Exam Success with Personalized Learning: A Guide',
          views: '285 views'
        },

        {
          id: 2,
          image: "/images/blog/blog-images-grid/blog-2.jpg",
          bio: '',
          date: 'August 7, 2022',
          title: 'The Top Three Types of Exam Mistakes Students Make and How to Avoid Them',
          views: '154 views'
        },

        {
          id: 3,
          image: "/images/blog/blog-images-grid/blog-3.jpg",
          bio: '',
          date: 'September 15, 2022',
          title: 'Ace Your Exams: How to Memorize Different Formulae Like a Pro',
          views: '297 views'
        },

        {
          id: 4,
          image: "/images/blog/blog-images-grid/blog-4.jpg",
          bio: '',
          date: 'October 24, 2022',
          title: 'Unlocking Success: The Power of Personalized Attention in Competitive Exams',
          views: '170 views'
        },

        {
          id: 5,
          image: "/images/blog/blog-images-grid/blog-5.jpg",
          bio: '',
          date: 'December 1, 2022',
          title: 'Maximize Your Study Time with the Pomodoro Timer Technique: A Step-by-Step Guide',
          views: '265 views'
        },

        {
          id: 6,
          image: "/images/blog/blog-images-grid/blog-6.jpg",
          bio: '',
          date: 'January 9, 2023',
          title: 'Learn Smarter, Not Harder: How the Feynman Technique Can Revolutionize Your Study Habits',
          views: '189 views'
        },
        {
          id: 7,
          image: "/images/blog/blog-images-grid/blog-7.jpg",
          bio: '',
          date: 'February 14, 2023',
          title: 'From Perfectionists to Crisis Makers: A Comprehensive Guide to Procrastination Types While Studying',
          views: '221 views'
        },
        {
          id: 8,
          image: "/images/blog/blog-images-grid/blog-8.jpg",
          bio: '',
          date: 'March 1, 2023',
          title: "Cultivating a Winner's Mindset: A Guide to Academic Success",
          views: '174 views'
        },
        {
          id: 9,
          image: "/images/blog/blog-images-grid/blog-9.jpg",
          bio: '',
          date: 'March 8, 2023',
          title: 'Mastering the Art of Time Management: How to Beat Procrastination and Stay on Task',
          views: '277 views'
        },
        {
          id: 10,
          image: "/images/blog/blog-images-grid/blog-10.jpg",
          bio: '',
          date: 'March 15, 2023',
          title: 'One-on-One in the Online World: How Personalized Attention from Tutors Can Benefit Remote Learners',
          views: '236 views'
        },
        {
          id: 11,
          image: "/images/blog/blog-images-grid/blog-11.jpg",
          bio: '',
          date: 'March 22, 2023',
          title: 'Beyond Tutoring: How Educare Mentors Provide Holistic Support to Students',
          views: '159 views'
        },
        {
          id: 12,
          image: "/images/blog/blog-images-grid/blog-12.jpg",
          bio: 'health coaching',
          date: 'March 29, 2023',
          title: 'Beyond the Classroom: How Remote Learning is Revolutionizing Educations',
          views: '227 views'
        },
      ],
      itemsPerPage: 6,
      currentPage: 1
    }
  },
  computed: {
    displayedCourses() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      return this.courses.slice(startIndex, startIndex + this.itemsPerPage)
    },
    totalPages() {
      return Math.ceil(this.courses.length / this.itemsPerPage)
    }
  }
}
</script>
