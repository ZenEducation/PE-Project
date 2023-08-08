<template>
  <div class="dark:bg-black bg-white">
    <!-- Container for demo purpose -->
    <div class="container px-6 mx-auto bg-white dark:bg-black">
      <!-- <h1 class="text-[#161821] dark:text-[#fff] text-3xl text-center py-6 relative ">TESTIMONIAL</h1> -->
      <!-- <courseheader>
                <template v-slot:title>Testimonials</template>
            </courseheader> -->

      <!-- Section: Design Block -->
      <section
        v-for="item in testimonials"
        :key="item.id"
        :id="item.id"
        class="text-center md:text-left my-3"
      >
        <div class="block rounded-lg bg-gray-200 dark:bg-gray-900">
          <div
            class="flex flex-wrap items-start dark:bg-gray-900 bg-gray-200 p-5"
          >
            <div
              class="grow-0 shrink-0 basis-auto block lg:flex justify-center w-full lg:w-6/12 xl:w-4/12"
            >
              <img
                :src="item.profile"
                alt="aadya deshpande"
                class="pt-10"
                width="200"
                style="border-radius: 800%"
              />
            </div>
            <div
              class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12 dark:bg-gray-900 bg-gray-200"
            >
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-3xl font-bold mb-2 text-[#20ad96]">
                  {{ item.name }}
                </h2>
                <p class="mb-2 font-semibold text-gray-300 dark:text-[#dddddd]">
                  {{ item.college }}
                </p>
                <p
                  class="mb-4 font-bold text-[#696969] dark:text-[#dddddd]"
                  v-html="item.ranks"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph1"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph2"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph3"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph4"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph5"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph6"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph7"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph8"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph9"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph10"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph11"
                ></p>
                <p
                  class="text-[#696969] dark:text-[#ddd] mb-6"
                  v-html="item.paragraph12"
                ></p>
                <p
                  class="font-bold text-[#696969] dark:text-[#dddddd] mb-6"
                  v-html="item.admission"
                ></p>
                <iframe
                  v-if="item.video"
                  width="640"
                  height="360"
                  :src="item.video"
                  title="Aadya Deshpande | MBBS | A Paathshala Ascension Exclusive"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
  </div>
</template>

<script>
  definePageMeta({
    layout: 'frontend',
  })

  export default {
    data() {
      return {
        testimonials: [
          {
            id: 'aadya',
            name: 'Aadya Deshpande',
            college:
              'M.B.B.S | GRANT MEDICAL COLLEGE AND SIR J. J. GROUP OF HOSPITALS, MUMBAI',
            ranks: `NEET | 692 / 720 <br> NEET All India Rank | 355 <br> XII Boards | 99.33 %`,
            profile: '/images/testimonial/70/aadya-deshpande.jpg',
            paragraph1:
              'A huge thank you to Paathshala and Photon Ecademy. My NEET performance would not have been possible without them! Their Early Completion of Syllabus Strategy enabled me to revise the entire syllabus more than 5 to 6 times, which was not possible for other students that I know from other institutes, as their syllabus was completed just 3 to 4 months before the NEET exam, in which case revision would not at all be possible for any student',
            paragraph2:
              'Also, their one to one, extensively personalized teaching played an important role not only in effective teaching but also in completing the syllabus early, since it is not possible to complete the syllabus fast in a batch or a group teaching mode. I could get my doubts solved swiftly because of the personalized mode. However, that would not have been possible for me, if I was studying elsewhere in a batch or a group. I have given around 200 to 250 Full Syllabus Tests',
            paragraph3:
              'What I realized is, in the beginning, the Full Syllabus Tests seem challenging and the scores are usually low, lower than the Part Syllabus Tests. As we keep at them and keep going, analyze our mistakes thoroughly and work on our weak topics and chapters, our scores in FSTs start improving. It is also important to not compare your performance with anyone else’s but with your own previous performance. It is important to balance or eliminate hyper normal stimuli like video gaming, excessive eating, watching videos online, which, if not moderated might be a huge obstacle to the path of preparation',
            paragraph4:
              'All along, love the process of learning science and gathering knowledge and try to learn from the mistakes rather than feel bad about the mistakes made in the tests or any low scores. As many problems as possible should be solved and it is also a great idea to solve the same problem set multiple times to become more confident in a chapter or topic',
            admission:
              'Secured Admission At Grant Medical College and Sir J. J. Group of Hospitals, Mumbai for M.B.B.S',
            video: 'https://www.youtube.com/embed/8GmVNb_6Ckk',
          },
          {
            id: 'ojas',
            name: 'Ojas Deshpande',
            college:
              'M.B.B.S | KING EDWARD MEMORIAL HOSPITAL AND SETH GORDHANDAS SUNDERDAS MEDICAL COLLEGE, MUMBAI',
            ranks: `NEET | 680 / 720 <br> NEET All India Rank 892 <br> JEE Main | 98.62 Percentile <br> KVPY SX All India Rank 198 <br> XII Boards 98.83% <br> Qualified for AIIMS, Rishikesh`,
            profile: '/images/testimonial/70/ojas-deshpande.jpg',
            paragraph1:
              'I would like to extend my thanks to Paathshala and Photon Ecademy for my NEET score. Their one to one teaching and mentoring methodology helped me in a great way. It allowed the professors to monitor my progress at each step. I received feedback pertaining to my areas of improvement and not just some general feedback that is applicable to everyone. That helped me immensely to focus on my weak areas and strengthen them with time',
            paragraph2:
              'Their strategy of early completion of syllabus has provided one of the biggest advantages by giving me 2 years of time only for practice, revision and test series enabling me to constantly improve my scores. The Full Syllabus Tests helped me understand the concepts that I had forgotten with time and also the topics and chapters in which I need to practice more. The professors clarified all my NEET doubts from time to time, making my revision and practice process effective and efficient. Paathshala and Photon Ecademy’s Mistakes Analysis’ Report has been an amazing tool in helping me find out topics and chapters, where I needed more practice and revision. I have given 200 to 250 NEET Full Syllabus Tests. Solving these many FSTs greatly improved my time management skills and also my ability to stay calm and confident in an exam environment',
            paragraph3:
              'I would recommend Paathshala and Photon Ecademy’s Educational services to all future aspirants. The personal attention they deliver is the key to success in competitive entrance exams',

            admission:
              'Secured Admission At King Edward Memorial Hospital and Seth Gordhandas Sunderdas Medical College, Mumbai for M.B.B.S | NEET(UG)',
            video: 'https://www.youtube.com/embed/zPMn_QZb7jE',
          },
          {
            id: 'saurabh',
            name: 'Saurabh Parekh',
            college: 'B-TECH | IIT BOMBAY',
            ranks: `JEE Advanced All India Rank 674 <br> JEE Advanced 273/366 <br> JEE Main Score 276 <br> JEE Main All India  Rank 2067 <br> BITSAT 390 <br> MHTCET 179 <br> Boards 89% Eligible for Admission at – All the Top 7 IITs, Top 3 NITs, BITS Pilani <br> Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering`,
            profile: '/images/testimonial/70/saurabh-parekh.jpg',
            paragraph1:
              'My experience at Paathshala and Photon Ecademy was very wonderful. I have learnt a lot here. The professors here are very helpful. Due to their personalized teaching mode, I was able to clear all my doubts effectively. Getting my doubts clarified on time improved my practice test scores. I would strongly recommend JEE Advanced and JEE Main aspirants to enroll with Paathshala and Photon Ecademy Before joining Paathshala and Photon Ecademy, my JEE Advanced test scores were not good. After I have enrolled here, my scores have increased consistently',
            paragraph2:
              'The professors here have great expertise in the subject. They have provided amazing tips and techniques, that helped me with fast solving. I would give the Paathshala and Photon Ecademy professors a perfect 10/10 rating',
            paragraph3:
              '<b>Saurabh’s Study Routine</b> – I have been serious about academics since the very beginning. I study everyday since my school days (X Standard, mainly). During my JEE preparation, I used to study and practice questions for at least 5 to 6 hours each and everyday (this is apart from the classes duration). I used to give equal importance to all the three subjects – Physics, Chemistry and Mathematics. I was good at Mathematics. Physics was challenging for me, so I used to study Physics for more duration. Whatever used to be taught in the class, I developed the habit of going home and revising it on the same day',
            paragraph4:
              '<b>Saurabh’s Tips For JEE Aspirants</b> – When you give your practice tests, make sure to avoid silly mistakes. If this habit is not consciously developed, there is likeliness of losing marks to silly mistakes in the final exam. Every mark is precious. Learn to manage time well. This is a very important skill to be developed and nurtured when you give your Full Syllabus Tests. The professors at Paathshala and Photon Ecademy helped me a lot with gaining the skillset needed to crack the JEE Advanced exam',
            paragraph5:
              '<b>Saurabh’s Career Plans</b>  – I want to pursue Mechanical Engineering from IIT Bombay',
            paragraph6:
              '<b>Paathshala and Photon’s Post Exam Counselling</b> - In this one-to-one post exam session by Paathshala and Photon Ecademy, I have come to know a lot about the career opportunities available to me, about IITs, IIT Bombay, from where I am planning to pursue Mechanical Engineering, it was very insightful and I learnt a lot from the session',
            paragraph7:
              '<b>Alumni Spotlight</b> <br> <ul><li>Saurabh is pursuing his MS in Computer Science at Stony Brook University, New York, United States</li> <li>He has also interned at IIM Bengaluru as a Blockchain Developer Intern, OYO as a Project Associate Intern, Amazon Web Services (AWS) as a Software Development Engineering Intern, and worked at Zomato Full time as a Software Development Engineer before pursuing his Masters at Stony Brook</li><li>Saurabh has done his Dual Minors in Computer Science and Data Science at IIT Bombay</li></ul>',

            admission:
              'Eligible for Admission at – All the Top 7 IITs, Top 3 NITs, BITS Pilani <br> Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering',
            video: 'https://www.youtube.com/embed/hGLVnI7766c',
          },
          {
            id: '',
            name: 'Mr. Jayesh Parekh | Father of Saurabh Parekh',
            college: 'B-TECH | IIT BOMBAY',

            profile: '/images/testimonial/70/saurabh-parekh.jpg',
            paragraph1:
              'When we took admission at Paathshala and Photon Ecademy, we had the aim of JEE Advanced exam and were aware of Saurabh’s ability to crack the exam. But, what we were looking for was someone who could push forward Saurabh’s JEE Advanced rank as best as possible. We were confident that only Paathshala and Photon Ecademy could do that',
            paragraph2:
              'We have achieved that today because of Paathshala and Photon Ecademy!',
            paragraph3:
              'Every doubt of Saurabh has been cleared very effectively via the Paathshala and Photon’s doubts system and all his weak areas have been identified and strengthened with time. This has benefitted Saurabh a lot and improved his confidence',
            paragraph4:
              '<b>Mr Parekh’s Tips to JEE Aspirants’ Parents</b> – When you enroll your ward in a coaching institute setup, wherein students are taught in batches, he/she is not going to get any personalized attention from that system. Even if your ward has good grasping and understanding abilities, he/she will not be able to ask doubts and will eventually keep those doubts to themselves which will keep piling with time affecting their confidence and morale',
            paragraph5:
              'At Paathshala and Photon Ecademy, because of the personalized attention mode and the amazing doubts-solving system in place, all of Saurabh’s doubts were clarified on time',
            paragraph6:
              'I would give 100% credit to Paathshala and Photon Ecademy for the invaluable contribution to Saurabh’s journey to IIT Bombay',
            paragraph7:
              'We are proud to have been associated with Paathshala and Photon Ecademy!',

            admission:
              'His ward Saurabh Parekh Secured Admission at IIT Bombay for B-Tech in Mechanical Engineering',
            video: 'https://www.youtube.com/embed/hGLVnI7766c',
          },

          {
            id: '',
            name: 'Nihar Mhapankar',
            college: 'M.B.B.S | LOKMANYA TILAK GENERAL MEDICAL COLLEGE',

            profile: '/images/testimonial/70/nihar-mhapankar.jpg',
            paragraph1:
              '<b>To merely explain my experience and emotions with Paathshala and Photon Ecademy with a few words? Oh Boy! It’s going to be a task between the Devil and the Deep Blue Sea. My 2-year experience here was an adventure.</b> Professors here helped me a lot in teaching, doubts, and concept clarification. I would say that they are true experts in their subjects. <b>The professors here are the best! The environment and ambiance of the classrooms were far beyond my expectation. Good infrastructure, comfortable benches, quality teaching facilities, you name it! Learning here was fun and the environment maintained by the teachers was the cherry on the cake</b> Our senior students also gave us the information about the mighty class in our 11 Standard. I was also given the right guidance about the books to be referred to, in addition to the study materials provided. I would rest my case on a final note that, if Paathshala and Photon Ecademy is given the opportunity to compete at the higher level, it would gain all the honors and respect it truly deserves!!',

            admission:
              'Secured Admission At Lokmanya Tilak General Medical College for M.B.B.S',
            video: 'https://www.youtube.com/embed/qIJripnZVig',
          },
          {
            id: '',
            name: 'Dr. Tushar Mhapankar | ENT Surgeon | Father of Nihar Mhapankar',
            college: 'M.B.B.S | LOKMANYA TILAK GENERAL MEDICAL COLLEGE',

            profile: '/images/testimonial/70/dr-tushar-mhapankar.png',
            paragraph1:
              'My experience with Paathshala and Photon Ecademy has been absolutely fantastic. At the beginning itself, (Professor) Sagar Sir had given Nihar a view of the goal and how to reach that goal, and how to start. Taking admission here did wonders for Nihar. The way of teaching by the professors here was very good. Nihar was very enthusiastic about attending Paathshala and Photon Ecademy and loved going to classes without missing even a single class. All the credit for Nihar’s success in the exams goes to the staff and professors of Paathshala and Photon Ecademy',

            admission:
              'Secured Admission At Lokmanya Tilak General Medical College for M.B.B.S',
            video: 'https://www.youtube.com/embed/qIJripnZVig',
          },
          {
            id: '',
            name: 'Sachit Shanbhag',
            college: 'B-TECH | IIT BOMBAY',

            profile: '/images/testimonial/70/sachit-shanbhag.jpg',
            paragraph1:
              'My experience at Paathshala and Photon Ecademy was very good. The most powerful thing about Paathshala and Photon Ecademy is that we students got one-to-one teaching and mentoring here, that helped me excel in all the three subjects',
            paragraph2:
              'Paathshala and Photon Ecademy’s Professors are highly experienced. They could deliver us in-depth knowledge of the concepts needed for the preparation of JEE',
            paragraph3:
              '<b>Before joining Paathshala and Photon Ecademy</b>, I was weak at Physics and Chemistry. I have also faced difficulty in time management. I did not how much had to be spent for concepts I was weak at, time to be dedicated for practising problems from ongoing topics',
            paragraph4:
              '<b>After enrolling at Paathshala and Photon Ecademy</b>, the professors helped me overcome my weaknesses in these subjects and I could see my practice tests scores improve. I have been taught many tricks and tips for faster problem solving which has been a great help. I was guided about how to utilize my time on a daily basis and manage it efficiently without being confused or overwhelmed',
            paragraph5:
              '<b>Sachit’s Tips to JEE Aspirants</b>, Cover all the topics of the syllabus without leaving out anything. Paathshala and Photon’s learning resources are very well curated for problem practice. While solving the questions, start at the basic level and go the advanced level of problems. Make sure you clarify your doubts on time',
            paragraph6:
              'During class sessions, stay fully focused and pay complete attention to what the professsors are teaching',
            paragraph7:
              'For questions practice, Paathshala and Photon Ecademy’s class notes and learning resources have been great for my preparation',
            paragraph8:
              'Paathshala and Photon Ecademy’s efficient doubt-solving system helped me a lot in gaining confidence in the concepts',
            paragraph9:
              'The professors at Paathshala and Photon Ecademy have been very supportive',
            paragraph10:
              'They have given their 200% and helped me excel in my subjects',
            paragraph11:
              '<b>Paathshala and Photon Ecademy played a great role in this achievement of mine. I would give 100% credit to Paathshala and Photon Ecademy for my success in JEE Advanced</b>',
            paragraph12:
              '<b>Alumni Spotlight</b> <br> <ul><li>Sachit works as a Data Science Engineer at Inito</li> <li>Inito is the world’s first comprehensive at-home diagnostics device that allows diagnostic tests for fertility, diabetes, vitamins, thyroid, and dozens more on a single device connected to a smartphone</li><li>Inito is backed by the best investors in the world – Y Combinator and many others in US, Singapore, and India</li><li>Sachit has also interned at Ernst & Young and Daticore</li></ul>',

            admission:
              'Secured Admission At IIT Bombay for B-Tech in Chemical Engineering',
            video: 'https://www.youtube.com/embed/qBxlFrOsGQo',
          },
          {
            id: '',
            name: 'Mr. Subhash Shanbhag | IIT BHU Alumnus | Father of Sachit Shanbhag',
            college: 'B-TECH | IIT BOMBAY',

            profile: '/images/testimonial/70/mr-subhash-shanbhag.png',
            paragraph1:
              'When I have enrolled Sachit at Paathshala and Photon Ecademy,<b> it was comforting to know that this is the place where what Sachit needs will be provided – personalized attention, clarifying his doubts and getting the best JEE Advanced rank possible and yes, that proved out to be case with Sachit securing a rank in JEE Advanced</b>',
            paragraph2:
              '<b>Mr Shanbhag’s tips to parents of JEE Aspirants</b> – JEE is not just about knowledge, its also about managing temper, time, ability to focus in a seemingly stressful situation. Before the difficult questions are attempted, the concepts have to be mastered. Increase the difficulty level of the practice questions gradually, starting from the basic/easy level of questions',

            admission:
              'His ward Sachit Shanbhag Secured Admission At IIT Bombay for B-Tech in Chemical Engineering',
            video: 'https://www.youtube.com/embed/qBxlFrOsGQo',
          },
          {
            id: '',
            name: 'Rijushree Saha',
            college: 'M.B.B.S | KASTURBA MEDICAL COLLEGE, MANIPAL UNIVERSITY',

            profile: '/images/testimonial/70/rijushree-saha.jpg',
            paragraph1:
              'To begin with, I would like to say – <b>Paathshala and Photon Ecademy is a highly unique place.</b> It is different from coaching classes that we students attend. It has been a unique experience. <b>We were taught in a different environment, with a different approach. Also, it is a personalized one-to-one teaching that is provided at Paathshala and Photon Ecademy.</b> It really helped me understand the core concepts of the subjects and that helped me crack the questions in the NEET exam with greater ease',
            paragraph2:
              'When we think about a competitive exam like NEET, we students mostly tend to be Biology-oriented. Paathshala and Photon Ecademy has guided me about how Physics is a rank-differentiator in NEET, although all the three subjects are important. This is generally not told to the students. Most students are unaware of this',
            paragraph3:
              '<b>The professors at Paathshala and Photon Ecademy helped me gain acumen in the subjects.</b> I have been encouraged to and made to practice a lot of questions. I have been given access to the Paathshala and Photon Ecademy’s learning resources',
            paragraph4:
              '<b>Additionally, I would like to appreciate the administration of the company</b>, which was very serious about students’ academics. They have also given me a personal space, where I could comfortably sit and practice questions everyday. This really helped me gain confidence and expertise in the subject and positively contributed to my score',
            paragraph5:
              'Paathshala and Photon Ecademy’s professors also helped me a lot with Organic Chemistry, which is another challenging subject like Physics. The books I have been suggested for Organic Chemistry practice and the material given to me by Paathshala and Photon Ecademy helped me gain exposure to different types of questions. There were also previous years’ competitive exams’ questions present in the Paathshala and Photon Ecademy practice set. That along with the solved examples helped me a lot. <b>There were some questions, which I can tell you, that were asked in my NEET exam which are, as if directly taken from the Paathshala and Photon Ecademy material. I would like to give credit to the material for it</b>',
            paragraph6:
              '<b>Rijushree’s Tips to NEET Aspirants</b> – NEET is a time-oriented exam, so you need to be very well-prepared for the exam. You should know how to crack the questions in a proper order. Read NCERT of every subject very thoroughly to become perfect with the theory aspect of the subjects, including Physics, because sometimes theory questions are also asked in Physics. Solve previous years’ NEET/AIPMT question papers. This is very important. The more you solve, the better will be the exposure you gain to the type of questions asked in the NEET exam. There are many questions that are repeated from previous years’ NEET exams as well. Try not to stick with just one material. Solve as many models of questions as possible. Paathshala and Photon Ecademy gives you access to a variety of amazing and well-curated learning resources, across varying difficulty levels. Make sure your concepts are strong. This will enable you to crack NEET with flying colours. I would like to wish the best to all the NEET aspirants out there and would want them to do very well in the exam and get into their dream medical college in the first attempt itself',
            paragraph7:
              '<b>Alumni Spotlight</b> <br> <ul><li>Kasturba Medical College has been named in the Top 10 Medical Colleges in India as per the prestigious NIRF 2021 Rankings by the Ministry of Education, Government of India</li> <li>Riju has accomplished a Special Mention at the Idea Exposition Hackathon 2019 hosted by NIT Suratkal</li></ul>',

            admission:
              'Rijushree has also been offered admission at Indian Institute of Science Education and Research (IISER), Bhopal <br><br> Secured Admission At Kasturba Medical College, Manipal University for M.B.B.S in NEET-UG',
            video: 'https://www.youtube.com/embed/erfVT0l2AjE',
          },
          {
            id: 'owais',
            name: 'Owais Chunawala',
            college: 'B-TECH | IIT BOMBAY',
            ranks: `JEE Advanced AIR 2636* <br> BITSAT 330 <br> MHTCET 177 <br> Eligible for Admission at – All the Top 7 IITs, Top 10 NITs, BITS Pilani`,

            profile: '/images/testimonial/70/owais-chunawala.jpg',
            paragraph1:
              'I have always wanted to study at an IIT and <b>Paathshala and Photon Ecademy has played a significant role in my achievement. I was guided every step of the way by Paathshala and Photon Ecademy’s professors and mentors.</b> All my doubts were cleared very effectively and on-time',
            paragraph2:
              'I was given numerous tips, tricks and techniques for efficient preparation, fast problem-solving and was made to solve 100s of questions from the Paathshala and Photon Ecademy learning sources, in a structured and systematic manner, and that greatly impacted my test scores and helped me gain confidence',
            paragraph3:
              'I was allocated a comfortable space where I could sit and solve questions all day, right from morning till late night',
            paragraph4:
              '<b>Company’s administration has been extremely supportive</b>',
            paragraph5:
              'The post exam counselling session at Paathshala and Photon Ecademy after JEE gave me in-depth knowledge about career opportunities available to me. <b>I was grateful to have received such phenomenal guidance, support, help from Paathshala and Photon Ecademy – the professors, admin executives, mentors without whom this milestone would not have been possible</b>',
            paragraph6:
              '<b>Alumni Spotlight</b> <br> <ul><li>Owais is the CEO and Co-founder of Augle AI</li> <li>Augle AI provides Computer Vision-based Automation Solutions. Their product portfolio consists of Face Recognition (Attendance, Access Control, Customer Recognition, APIs), Crowd Analysis (through Drones, UAVs, CCTV Cameras), OCR, and Object Detection and Automation</li><li>Owais has been the Convener of Electronics and Robotics Club at IIT Bombay. It is the largest Robotics Club in India</li><li>Owais has also done his Minor in Entrepreneurship at IIT Bombay</li></ul>',

            admission:
              'Secured Admission At IIT Bombay for B-Tech in Metallurgical Engineering and Material Science',
          },
          {
            id: '',
            name: 'Dhwani Kakkad',
            profile: '/images/testimonial/70/dhwani-kakkad.png',
            college:
              'M.B.B.S | HBT MEDICAL COLLEGE AND DR. R N COOPER MUNICIPAL GENERAL HOSPITAL, MUMBAI',
            paragraph1:
              'I have given approximately 100 Full Syllabus Tests and have assessed my tests using the <b>Paathshala and Photon Ecademy Mistakes Analysis Model.</b> The reports help us understand what we do not know and hence where we need to focus our efforts',
            paragraph2:
              '<b>Completing the syllabus early at Paathshala and Photon Ecademy has been greatly helpful</b>',
            paragraph3:
              'For Inorganic Chemistry, I have studied from NCERT, hand-made short notes, revised the concepts multiple times, practiced many questions',
            paragraph4:
              'For Biology, I used to revise concepts from NCERT everyday. Almost all Biology questions asked in NEET were from NCERT, except for 1 or 2 maybe. Biology NCERT is pretty straight-forward to prepare from and revise. We completed Biology also very early, around June-July. The earlier the syllabus completion, the better. <b>I have revised the entire NCERT Biology almost 6 times</b>',
            paragraph5:
              '<b>Teaching is very effective and efficient in Paathshala and Photon Ecademy’s personalized one-to-one teaching mode and add to that highly experienced and amazing professors, we get the maximum possible academic value</b>',
            ranks:
              'NEET 625 / 720 <br> NEET Physics 99.12 Percentile <br> NEET Chemistry 99.37 Percentile <br> NEET Biology (Botany and Zoology) 99.24 Percentile',
            admission:
              'Secured Admission at HBT Medical College And Dr. R N Cooper Municipal General Hospital, Juhu, Mumbai for M.B.B.S',
          },
          {
            id: '',
            name: 'Devansh B',
            profile: '/images/testimonial/70/devansh-b.jpg',
            college: 'B-TECH | IIT BOMBAY',
            paragraph1:
              'Irrespective of the exam I was preparing for, be it JEE Main, JEE Advanced, BITSAT, I was mentored and guided by the Paathshala and Photon Ecademy’s professors about how I can crack the exam with ease. They taught me how to manage time effectively while solving questions. The professors cleared all my conceptual doubts in such a way that I could apply the concepts effectively while solving numericals',
            paragraph2:
              'Devansh’s Tips to JEE Aspirants – study all the concepts that are part of your syllabus without leaving anything. Revise whatever you have learnt thoroughly and solve as many numericals as possible',
            paragraph3:
              '<b>Alumni Spotlight</b> <br> <ul><li>Devansh completed his Research Internship at Stockholm University, Swedan</li> <li>He has also done his Research Internship with Purdue University, United States</li><li>Devansh served as an Editor of Insight, IIT Bombay’s Official Student Media Body</li></ul>',
            admission:
              'Secured Admission At IIT Bombay for B-Tech in Energy Sciences',
            video: 'https://www.youtube.com/embed/SWDIbwlqZoU',
          },
          {
            id: '',
            name: 'Mr Prashant B | Father of Devansh B',
            profile: '/images/testimonial/70/devansh-b.jpg',
            college: 'B-TECH | IIT BOMBAY',
            paragraph1:
              'We had a wonderful and happy experience at Paathshala and Photon Ecademy. (Professor) SPP Sir taught and guided Devansh and us, parents with utmost dedication. Because of his and Paathshala and Photon Ecademy’s efforts, Devansh could achieve the desired result in JEE Advanced. JEE Main and Advanced being exams with negative markings, it is important for the student to know what questions to solve and what questions to leave, and when to leave. Devansh was extensively guided about such exam strategies by professionals at Paathshala and Photon Ecademy. The executives at Paathshala and Photon Ecademy had many sessions with us, where we were explained in-depth and in detail about what topics to study, how to study, how to practice problems, how to give the Paathshala and Photon Ecademy Test Series and how to analyze the mistakes in the Exams. Because of such expert guidance from Paathshala and Photon Ecademy, Devansh was able to score minimum negative marks in his JEE Main and JEE Advanced Exams. We express our deepest gratitude to Paathshala and Photon Ecademy for being an incredible part of Devansh’s JEE journey and for him getting into IIT Bombay',

            admission:
              'His ward Devansh Has Secured Admission At IIT Bombay for B-Tech in Energy Sciences',
            video: 'https://www.youtube.com/embed/SWDIbwlqZoU',
          },
          {
            id: '',
            name: 'Mrs Padmapriya B | Mother of Devansh B',
            profile: '/images/testimonial/70/devansh-b.jpg',
            college: 'B-TECH | IIT BOMBAY',
            paragraph1:
              'At every step, all the professors of Paathshala and Photon Ecademy especially (Professor) SPP Sir and PDC Ma’am have helped and guided us throughout the course. This played a crucial role in Devansh achieving his success in JEE Advanced. After gauging Devansh’s potential, (Professor) SPP Sir guided us strategically about how to study and practice more in less time. It is very important for any student to be thorough with concepts, definitions, and formulae and Paathshala and Photon Ecademy ensured that. We would like to thank Paathshala and Photon Ecademy for being a part of Devansh’s journey and the academic milestone of getting into IIT Bombay, that he has accomplished',

            admission:
              'Her ward Devansh Has Secured Admission At IIT Bombay for B-Tech in Energy Sciences',
            video: 'https://www.youtube.com/embed/SWDIbwlqZoU',
          },
          {
            id: '',
            name: 'Soumil Kelkar',
            profile: '/images/testimonial/70/soumil-kelkar.jpg',
            college:
              'BSMS | IISER (INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH), PUNE',
            paragraph1:
              'The professors at Paathshala and Photon Ecademy were very good; they helped me in learning the concepts really well. The classrooms and infrastructure radiate the concept of education and that kept us focused on our studies all the time. The Academics and the Test modules were very helpful. I had no idea of what type of questions would be asked. These modules helped me focus not only on how to solve the paper but also on time management. The Academics modules helped me understand the concepts well for my college exams as well',
            paragraph2:
              '<b>Soumil’s Tips to JEE Aspirants</b> – Do not panic or be stressed out. One has to only study hard, understand the concepts well and solve the maximum number of previous years’ questions. I motivated myself to prepare well for the exams without getting stressed out; listening to music in my spare time was a booster. Some of my school friends used to ask me questions from other institutes’ modules which I could easily answer. So, by being a student of Paathshala and Photon Ecademy, I had a competitive advantage over students from other institutes',
            ranks:
              'JEE Main 98.96 Percentile <br> JEE Advanced Score 159 <br> JEE Advanced Rank 4721 <br> IISER 134/180 <br> BITSAT 340 <br> MHCET 178/200 <br> XII Boards CBSE 95.6% <br> Eligible For BITS Pilani <br> Selected for IIT Kharagpur | B-Tech',

            admission:
              'Secured Admission At IISER, Pune (Indian Institute of Science Education and Research) for BSMS Dual Degree in Physics',
            video: 'https://www.youtube.com/embed/Nl_h7ACy6As',
          },
          {
            id: '',
            name: 'Aditi Goyal',
            profile: '/images/testimonial/70/aditi-goyal.jpg',
            college: 'B-TECH | INSTITUTE OF CHEMICAL TECHNOLOGY (ICT) MATUNGA',
            paragraph1:
              'At college, I was not able to understand the concepts clearly and I used to have a lot of doubts, which went uncleared. After joining Paathshala and Photon Ecademy, I got personalized attention from the Professors here and I got all the concepts cleared. The professors had great command over the subject and were able to make me understand all the topics. I found myself in a stronger position academically. I wish I had joined Paathshala and Photon Ecademy earlier',
            paragraph3:
              '<b>Alumni Spotlight</b> <br> <ul><li>Aditi is a batch of 2023 MBA Student at XLRI, Jamshedpur</li><li>Aditi worked at Pidilite Industries Limited as a Technical Services Executive</li><li>She has also interned at 3M as a Research Intern and PolyOne as a Research Intern</li><li>Aditi is a 2022 Summer Associate Intern at Boston Consulting Group (BCG)</li><li>Aditi has been awarded with the M.V Joshi Platinum Jubilee Endowment Award by the Institute of Chemical Technology</li><li>She has also been honoured with the Dr. Balwant Joshi Award for Top Rank in B.Tech (for the First Year) by the Institute of Chemical Technology</li></ul>',
            admission:
              'Secured Admission At IIT Bombay for B-Tech in Energy Sciences',

            ranks: 'JEE Advanced AIR 13124 <br> JEE Main Score 180',

            admission:
              'Secured Admission At Institute of Chemical Technology (ICT) Matunga for B-Tech in Polymer/Plastics Engineering',
            video: 'https://www.youtube.com/embed/CxZb3K7u3Yo',
          },
          {
            id: '',
            name: 'Mr and Mrs Koparkar | Chartered Accountants | Parents of Advait Koparkar',
            profile: '/images/testimonial/70/mr-and-mrs-koparkar.jpg',
            college: 'BE | BITS PILANI GOA',
            paragraph1:
              'The most striking thing you experience with the professors of Paathshala and Photon Ecademy is their passion for teaching and the mastery over the subject that makes a huge difference from the perspective of a student. They are very interactive with the students. The professors could clear the conceptual doubts of each student. They connect well with the students in solving their doubts. The Professors are also very frank in their feedback without mincing words – Mr. and Mrs. Koparkar',
            paragraph2:
              '<b>Alumni Spotlight</b> <br> <ul><li>Advait graduated with an overall CGPA of 9.73/10.0 from BITS Pilani Goa and is also the Top Ranker of the Electronics and Electrical Department</li><li>He has done his Masters in Electrical and Computer Science Engineering from Georgia Institute of Technology, United States securing an overall CGPA of 4.0/4.0</li><li>Advait has Interned at Nanyang Technological University (Summer Research Intern), Indian Institute of Science (IISc) (Research Intern)</li><li>Advait is working as a Machine Learning Software Engineer at Qualcomm in the San Francisco Bay Area</li></ul>',
            admission:
              'Secured Admission At IIT Bombay for B-Tech in Energy Sciences',

            admission:
              'Their ward Advait has Secured Admission At BITS Pilani Goa for BE in Electrical Engineering',
            video: 'https://www.youtube.com/embed/Q0D8P6tW4ps',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped></style>
