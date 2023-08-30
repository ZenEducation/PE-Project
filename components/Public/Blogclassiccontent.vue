<template>
  <div class=""   data-aos="fade-up" data-aos-duration="2000">
  <div
    v-for="blog in blogs"
    :key="blog.id"
    :id="blog.id"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <div
      class="w-12/12 pb-10  overflow-hidden"
    >
    <div class="thumbnail group w-full h-[400px] bg-red-500 rounded-md overflow-hidden">
      <NuxtLink :to="`/blog/${blog.link}`">
      <img
        class="rounded-md object-contain group-hover:scale-[1.10] transition-all ease-in-out duration-1000"
        :src="blog.image"
        alt="Connection Between Self-Portraits and Identity"
      /></NuxtLink>
    </div>

      <div>
        <div class="p-8 pl-0 pb-10 dark:blue rounded-b-md">
          <span
            class="text-[15px] text-[#8C89A2] tracking-[2px] uppercase leading-[1.74] mb-1 font-semibold hover:text-[#20ad96] dark:hover:text-[#20ad96] cursor-pointer"
          >
            {{ blog.category }}</span
          >
          <h3
            class="text-[32px] dark:text-white text-[#323332] hover:text-[#20AD96] font-extrabold leading-[1.5] mb-1"
          >
            <NuxtLink :to="`/blog/${blog.link}`"> {{ blog.title }} </NuxtLink>
          </h3>

          <div
            class="flex justify-start items-center mt-3 text-[14px] font-light"
          >
            <div class="flex justify-start items-center">
              <img
                src="../../public/images/logo/photon-logo-earth.png"
                alt="image"
                class="rounded-[50%] mr-2 w-[32px] h-[32px]"
              />
              <div
                class="dark:text-[#ddd] hover:text-[#20ad96] dark:hover:text-[#20ad96] hover:cursor-pointer text-[15px] text-[#8C89A2] font-medium"
              >
                {{ blog.name }}
              </div>
            </div>
            <div class="flex items-center text-[#333] dark:text-[#696969] ml-5">
              <i
                class="fa-regular fa-calendar text-[#8C89A2] mb-1 text-[16px]"
              ></i>
              <div class="text-[15px] text-[#8C89A2] pl-2 font-medium">
                {{ blog.date }}
              </div>
            </div>

            <div
              class="ml-5 flex justify-center items-center text-[#333] dark:text-[#696969]"
            >
              <i class="fa-regular fa-eye text-[#8C89A2] text-[16px]"></i>
              <div class="text-[15px] text-[#8C89A2] pl-2 font-medium">
                {{ blog.views }}
              </div>
            </div>
          </div>

          <div
            class="text-[16px] dark:text-[#ddd] text-[#696969] leading-[1.74] my-4"
          >
            <p>{{ blog.summary }}</p>
          </div>

          <div class="flex items-center justify-between pt-4">
            <NuxtLink :to="`/blog/${blog.link}`">
              <button
                class="w-auto text-[15px] text-white font-bold px-10 py-3 bg-[#20ad96] hover:bg-[#3F3A64] rounded-md"
              >
                Read more
              </button>
            </NuxtLink>
            <div class="flex items-center dark:text-[#ddd] share">
              <div class="font-bold cursor-pointer text-[#8C89A2]">
                Share this post
              </div>

              <div class="tooltip_Section">
                <div class="tooltiptext  dark:bg-gray-900 rounded flex " >
                  <NuxtLink :to="`/blog/${blog.link}`">
                  <i
                    class="w-5 h-5  text-gray-700 fa-brands fa-facebook mx-2 hover:text-[#20ad96] cursor-pointer"
           
                  />
                </NuxtLink>
                <NuxtLink :to="`/blog/${blog.link}`">
                  <i
                    class="w-5 h-5  text-gray-700 fa-brands fa-twitter mx-2   hover:text-[#20ad96] cursor-pointer"
                 
                  />
                  </NuxtLink>
                  <NuxtLink :to="`/blog/${blog.link}`">
                  <i
                    class="w-5 h-5 text-gray-700 fa-brands fa-linkedin mx-2  hover:text-[#20ad96] cursor-pointer"
                 
                  />
                </NuxtLink>
                </div>
                <div class="triangle dark:bg-gray-900"></div>
                <div
                  class="shadow border border-[#ddd] rounded-[50%] w-12 h-12 flex justify-center items-center ml-4 flex items-center justify-center shareValue tooltip cursor-pointer"
                >
                  <i
                    class="w-5 h-5 text-[#20ad96] fa fa-share ml-1 mt-1 hicon"
                    name="uil:share-alt"
                  />
                </div>
              </div>
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
        blogs: [
          {
            id: 1,
            image: '/images/blog/blog_images/blog-1.jpg',
            category: 'Business',
            name: 'Author Name',
            bio: '',
            date: 'June 21, 2022',
            title:
              'Maximizing Exam Success with Personalized Learning: A Guide',
            views: '156 views',
            summary:
              "Personalized classes provide a tailor-made approach to learning that can greatly improve a student's chances of success in competitive exams. They offer a more flexible schedule, a more focused learning experience, and more interaction with the instructor. Personalized classes can greatly increase a student's chances of success in competitive exams by providing a customized approach to learning.",
            link: 'maximizing-exam-success-with-personalized-learning',
          },

          {
            id: 2,
            image: '/images/blog/blog_images/blog-2.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'August 7, 2022',
            title:
              'The Top Three Types of Exam Mistakes Students Make and How to Avoid Them',
            views: '154 views',
            summary:
              'Exams are important, but mistakes happen. There are three common types of exam mistakes: conceptual errors from not understanding concepts, execution errors from not applying knowledge effectively, and silly mistakes from being careless. To avoid these mistakes, students should practice problem-solving, understand concepts deeply, and stay focused.',
            link: 'the-top-three-types-of-exam-mistakes-students-make-and-how-to-avoid-them',
          },

          {
            id: 3,
            image: '/images/blog/blog_images/blog-3.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'September 15, 2022',
            title:
              'Ace Your Exams: How to Memorize Different Formula Like a Pro',
            views: '297 views',
            summary:
              'Memorizing formulas can be tough for students. To make it easier, break down the formula into parts and understand how they work together. Create flashcards, practice regularly, use mnemonic devices like rhymes or phrases, and visualize the formula to remember it. Look for connections between different formulas and concepts. With practice and the right approach, memorizing formulas can become easier, leading to better exam performance.',
            link: 'ace-your-exams-how-to-memorize-different-formula-like-a-pro',
          },
          {
            id: 4,
            image: '/images/blog/blog_images/blog-4.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'October 24, 2022',
            title:
              'Unlocking Success: The Power of Personalized Attention in Competitive Exams',
            views: '170 views',
            summary:
              'This article highlights the importance of personalized attention for success in competitive exams like JEE, NEET, and CAT. Personalized attention allows for individualized learning, targeted instruction, better time management, improved confidence, and greater success. With personalized attention, students can receive instruction that meets their specific needs, improve their weaknesses, build on their strengths, and gain the skills and knowledge needed to succeed in their chosen field.',
            link: 'unlocking-success-the-power-of-personalized-attention-in-competitive-exams',
          },
          {
            id: 5,
            image: '/images/blog/blog_images/blog-5.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'December 1, 2022',
            title:
              'Maximize Your Study Time with the Pomodoro Timer Technique: A Step-by-Step Guide',
            views: '265 views',
            summary:
              'The Pomodoro Timer Technique is a time management method developed in the late 1980s that involves breaking down work into 25-minute intervals called Pomodoros with five-minute breaks in between. The technique can help you stay focused and be more productive while studying or working on a computer. By setting a timer and taking breaks, you can manage your time more effectively, reduce stress and burnout, and improve your overall well-being.',
            link: 'maximize-your-study-time-with-the-pomodoro-timer-technique',
          },
          {
            id: 6,
            image: '/images/blog/blog_images/blog-6.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'January 9, 2023',
            title:
              'Learn Smarter, Not Harder: How the Feynman Technique Can Revolutionize Your Study Habits',
            views: '189 views',
            summary:
              'Do you struggle to retain complex concepts? The Feynman Technique, named after Nobel Prize-winning physicist Richard Feynman, is a powerful learning method that can help. By breaking down complex ideas into simple explanations, you can identify gaps in your knowledge and improve your understanding. This article explains how the Feynman Technique works and provides step-by-step instructions to implement it in your studying routine. Give it a try and watch your understanding and retention of complex concepts improve.',
            link: 'learn-smarter-not-harder-how-the-feynman-technique-can revolutionize-your-study-habits',
          },
          {
            id: 7,
            image: '/images/blog/blog_images/blog-7.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'February 14, 2023',
            title:
              'From Perfectionists to Crisis Makers: A Comprehensive Guide to Procrastination Types While Studying',
            views: '221 views',
            summary:
              'Procrastination is a common problem among students, and understanding the different types of procrastinators can help identify effective strategies to overcome it. The article identifies and provides solutions for five types of procrastinators: The Perfectionist, The Busy Bee, The Dreamer, The Avoider, and The Crisis Maker. By recognizing and addressing these habits, students can improve their productivity and achieve their academic goals.',
            link: 'from-perfectionists-to-crisis-makers-a-comprehensive-guide-to-procrastination-types-while-studying',
          },
          {
            id: 8,
            image: '/images/blog/blog_images/blog-8.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'March 1, 2023',
            title:
              "Cultivating a Winner's Mindset: A Guide to Academic Success",
            views: '174 views',
            summary:
              "This article explores the characteristics of a winner's mindset and how it can improve study habits. A belief in oneself, a focus on the process, self-discipline, perseverance, and continuous learning are all essential components of a winning mindset. By cultivating these qualities, students can improve their academic performance and achieve their goals. The article emphasizes that developing a winning mindset takes time and practice, but the results are worth the effort.",
            link: 'cultivating-a-winners-mindset-a-guide-to-adacemic-success',
          },
          {
            id: 9,
            image: '/images/blog/blog_images/blog-9.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'March 8, 2023',
            title:
              'Mastering the Art of Time Management: How to Beat Procrastination and Stay on Task',
            views: '277 views',
            summary:
              'This article provides five actionable steps to help individuals overcome procrastination and increase productivity. It suggests setting specific goals and deadlines, creating a distraction-free environment, breaking tasks into smaller steps, using the Pomodoro Technique, and prioritizing self-care as effective strategies. Consistency and motivation are emphasized as keys to developing successful habits and achieving academic goals.',
            link: 'mastering-the-art-of-time-management-how-to-beat-procrastination-and-stay-on-task',
          },
          {
            id: 10,
            image: '/images/blog/blog_images/blog-10.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'March 15, 2023',
            title:
              'One-on-One in the Online World: How Personalized Attention from Tutors Can Benefit Remote Learners',
            views: '236 views',
            summary:
              'This blog post explores how online tutoring can provide personalized attention to students in remote learning environments. By offering one-on-one interaction, customized learning experiences, real-time feedback, and flexible scheduling options, online tutoring helps students overcome challenges and achieve academic success. The post highlights the benefits of online tutoring, including its ability to provide students with access to subject-specific tutors, regardless of their location or schedule.',
            link: 'one-on-one-in-the-online-world-how-personalized-attention-from-tutors-can-benefit-remote-learners',
          },
          {
            id: 11,
            image: '/images/blog/blog_images/blog-11.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'March 22, 2023',
            title:
              'Beyond Tutoring: How Educare Mentors Provide Holistic Support to Students',
            views: '159 views',
            summary:
              'The traditional approach to education often neglects the emotional and practical needs of students, but Educare Mentors offer personalized mentorship and support beyond the classroom. Educare mentors provide holistic support, micromanage schedules, help students set and achieve goals, act as a bridge between students and teachers, and provide support for both academic and non-academic challenges. With Educare Mentors, students can achieve their full potential both inside and outside of the classroom.',
            link: 'beyond-tutoring-how-educare-mentors-provide-holistic-support-to-students',
          },
          {
            id: 12,
            image: '/images/blog/blog_images/blog-12.jpg',
            category: 'Business',
            name: 'Author Name',

            bio: '',
            date: 'March 29, 2023',
            title:
              'Beyond the Classroom: How Remote Learning is Revolutionizing Educations',
            views: '227 views',
            link: 'beyond-the-classroom-how-remote-learning-is-revolutionizing-educations',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  h3 {
    /* font-family: Poppins,sans-serif; */
    transition-duration: 0.5s;
  }
  p {
    font-family: Poppins, sans-serif;
  }
  .share:hover .shareValue {
    background: #20ad96;
    color: white;
    transition-duration: 0.5s;
  }
  .share:hover .hicon {
    color: white;
    transition-duration: 0.5s;
  }

  .tooltip_Section {
    position: relative;
    /* display: inline-block; */
    /* border-bottom: 1px dotted black; */
  }
  .tooltiptext {
    opacity: 0;
    /* visibility: hidden; */
    /* clip-path: polygon(
      100% 0,
      100% 70%,
      70% 70%,
      60% 100%,
      50% 70%,
      0 70%,
      0 0
    ); */
    position: absolute;

    top: -48px;
    left: -40px;
    padding: 0.2rem 0.3rem 0 0.3rem ;
    /* width: 80px; */
    -webkit-box-shadow: -1px 2px 27px 0px rgba(224, 224, 224, 0.767);
    -moz-box-shadow: -1px 2px 27px 0px rgba(224, 224, 224, 0.767);
    box-shadow: -1px 2px 27px 0px rgba(224, 224, 224, 0.767);
    transition-duration: 0.8s;
    /* border: 1px solid red; */
    visibility: hidden;
  }

  .triangle{
    width: 20px;
    height: 20px;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    position: absolute;
    top: -22px;
    left: 30px;

    opacity: 0;
    transition-duration: 0.8s;
    
  }
  .share:hover .triangle {
    opacity: 1;
    visibility: visible;

  }
  .share:hover .tooltiptext{
    opacity: 1;
    visibility: visible;

  }
</style>
