<template>
    <div class=" dark:bg-black bg-white">
        <div class="mx-auto bg-white dark:bg-black">
            <courseheader>
                <template v-slot:title>Why Choose Us?</template>
            </courseheader>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(1)" :class="{ 'bg-[#20ad96] text-white': Data1 }">
                    <h3 class="font-bold">We Value Your Uniqueness</h3>
                    <div>
                        <i v-if="Data1" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data1">
                    <img src="/images/about/why-choose-us/img1.png" alt="img1">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">The courses and academic models are designed in such a way
                            that they cater to all categories of students and their cognitive grasping capabilities. We have
                            kept in mind the unique learning requirements of different types of students while preparing
                            these courses. We also upgrade our courses from time to time, add additional content and latest
                            exams’ solutions and link it back to our previously taught theory and problems. We value the
                            feedback that students provide us and maintain content quality of the pre-recorded video
                            lectures in accordance with the students’ needs and what we deem to be the most optimal for the
                            students’ learning requirements</p>
                    </div>

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <img src="/images/about/why-choose-us/img1.png" alt="img1">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">The courses and academic models are designed in such a way
                            that they cater to all categories of students and their cognitive grasping capabilities. We have
                            kept in mind the unique learning requirements of different types of students while preparing
                            these courses. We also upgrade our courses from time to time, add additional content and latest
                            exams’ solutions and link it back to our previously taught theory and problems. We value the
                            feedback that students provide us and maintain content quality of the pre-recorded video
                            lectures in accordance with the students’ needs and what we deem to be the most optimal for the
                            students’ learning requirements</p>
                    </div>

                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(2)" :class="{ 'bg-[#20ad96] text-white': Data2 }">
                    <h3 class="font-bold">Study From The Comfort of Your Home</h3>
                    <div>
                        <i v-if="Data2" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data2">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Travelling to a coaching class can be messy, tiring, and might
                            suck up your energy and enthusiasm. Many a times, it drains the student of energy, which could
                            have been better utilized for studying at home from Paathshala Education’s finest quality online
                            video lectures & Paathshala’s online teachers helping the student at each step, in explaining
                            the concepts and solving questions in order to get the optimal result that the student truly is
                            capable of achieving.</p>
                        <p class="text-justify text-gray-800">With Paathshala’s expert guidance & Paathshala Education’s
                            classic academic modules and courses at your fingertips, you don’t have to travel anywhere to
                            achieve excellent academic success. You can achieve it from the comfort of your homes.
                            We have to learn to be wise in today’s Information & Technology Age, and focus on smart work,
                            not only
                            hard work.</p>
                    </div>
                    <img src="/images/about/why-choose-us/img2.jpg" alt="img2">

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Travelling to a coaching class can be messy, tiring, and might
                            suck up your energy and enthusiasm. Many a times, it drains the student of energy, which could
                            have been better utilized for studying at home from Paathshala Education’s finest quality online
                            video lectures & Paathshala’s online teachers helping the student at each step, in explaining
                            the concepts and solving questions in order to get the optimal result that the student truly is
                            capable of achieving.</p>
                        <p class="text-justify text-gray-800">With Paathshala’s expert guidance & Paathshala Education’s
                            classic academic modules and courses at your fingertips, you don’t have to travel anywhere to
                            achieve excellent academic success. You can achieve it from the comfort of your homes.
                            We have to learn to be wise in today’s Information & Technology Age, and focus on smart work,
                            not only
                            hard work.</p>
                    </div>
                    <img src="/images/about/why-choose-us/img2.jpg" alt="img1">

                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(3)" :class="{ 'bg-[#20ad96] text-white': Data3 }">
                    <h3 class="font-bold">Zero Travelling</h3>
                    <div>
                        <i v-if="Data3" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data3">
                    <img src="/images/about/why-choose-us/img3.png" alt="img3">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Travelling to a coaching class can be messy, tiring, and might
                            suck up your energy and enthusiasm. Many a times, it drains the student of energy, which could
                            have been better utilized for studying at home from Paathshala Education finest quality online
                            video lectures and solving questions in order to get the optimal result that the student truly
                            is capable of achieving.</p>
                        <p class="text-justify text-gray-800">With Paathshala Education’s classic academic modules and
                            courses at your fingertips, you don’t have to travel anywhere to achieve excellent academic
                            success. You can achieve it from the comfort of your homes. We have to learn to be wise in
                            today’s Information & Technology Age, and focus on smart work, not only hard work.</p>
                    </div>

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <img src="/images/about/why-choose-us/img3.png" alt="img1">
                    <div class="m-10">

                        <p class="text-justify text-gray-800">Travelling to a coaching class can be messy, tiring, and might
                            suck up your energy and enthusiasm. Many a times, it drains the student of energy, which could
                            have been better utilized for studying at home from Paathshala Education finest quality online
                            video lectures and solving questions in order to get the optimal result that the student truly
                            is capable of achieving.</p>
                        <p class="text-justify text-gray-800">With Paathshala Education’s classic academic modules and
                            courses at your fingertips, you don’t have to travel anywhere to achieve excellent academic
                            success. You can achieve it from the comfort of your homes. We have to learn to be wise in
                            today’s Information & Technology Age, and focus on smart work, not only hard work.</p>
                    </div>


                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(4)" :class="{ 'bg-[#20ad96] text-white': Data4 }">
                    <h3 class="font-bold">Learn Anytime - Anywhere</h3>
                    <div>
                        <i v-if="Data4" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data4">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">The freedom to learn is now yours! 2:00 AM? 5:00 AM? 11:00 PM?
                            Learn whenever you want.</p>
                        <p class="text-justify text-gray-800">Want to revise concepts while traveling or commuting? While in
                            washroom? Your wish is granted. Learn wherever you want, whenever you want.</p>
                    </div>
                    <img src="/images/about/why-choose-us/img4.jpg" alt="img4">

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <div class="m-10">
                        <p class="text-justify text-gray-800">The freedom to learn is now yours! 2:00 AM? 5:00 AM? 11:00 PM?
                            Learn whenever you want.</p>
                        <p class="text-justify text-gray-800">Want to revise concepts while traveling or commuting? While in
                            washroom? Your wish is granted. Learn wherever you want, whenever you want.</p>
                    </div>
                    <img src="/images/about/why-choose-us/img4.jpg" alt="img1">

                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(5)" :class="{ 'bg-[#20ad96] text-white': Data5 }">
                    <h3 class="font-bold">Journey towards your dream without distractions</h3>
                    <div>
                        <i v-if="Data5" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data5">
                    <img src="/images/about/why-choose-us/img5.jpg" alt="img5">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Most often, especially in coaching classes, the students
                            compare their performance with their peers and often feel stressed about it. Most students
                            develop either superiority complex or inferiority complex as a result of this self-comparison
                            with their classmates. This further leads to performance pressure which may lead to the
                            students, failing to perform to the best of their ability.</p>
                        <p class="text-justify text-gray-800">With our academic modules, our students stay fully focused on
                            what is actually required thereby leaving no opportunity for unnecessary distractions</p>
                    </div>

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <img src="/images/about/why-choose-us/img5.jpg" alt="img5">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Most often, especially in coaching classes, the students
                            compare their performance with their peers and often feel stressed about it. Most students
                            develop either superiority complex or inferiority complex as a result of this self-comparison
                            with their classmates. This further leads to performance pressure which may lead to the
                            students, failing to perform to the best of their ability.</p>
                        <p class="text-justify text-gray-800">With our academic modules, our students stay fully focused on
                            what is actually required thereby leaving no opportunity for unnecessary distractions</p>
                    </div>


                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(6)" :class="{ 'bg-[#20ad96] text-white': Data6 }">
                    <h3 class="font-bold">Best Teaching. Best Mentoring. Best Academic Modules</h3>
                    <div>
                        <i v-if="Data6" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data6">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">All the courses, curriculum, academic modules of Paathshala
                            Education have been designed by highly experienced, expert professors, IITians, and PhDs. Our
                            Professors also have deep and unique insights about the learning pattern and behavior of
                            students and have created the Academic Modules keeping these know-how’s in mind.</p>
                        <p class="text-justify text-gray-800">Besides having a great learning experience, our students are
                            mentored by their live online Professors and some of the best counselors in the education space,
                            who actually care about the students and their aspirations! We do not focus only on toppers, but
                            give equal attention to one and all.</p>
                    </div>
                    <img src="/images/about/why-choose-us/img6.png" alt="img6">

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <div class="m-10">
                        <p class="text-justify text-gray-800">All the courses, curriculum, academic modules of Paathshala
                            Education have been designed by highly experienced, expert professors, IITians, and PhDs. Our
                            Professors also have deep and unique insights about the learning pattern and behavior of
                            students and have created the Academic Modules keeping these know-how’s in mind.</p>
                        <p class="text-justify text-gray-800">Besides having a great learning experience, our students are
                            mentored by their live online Professors and some of the best counselors in the education space,
                            who actually care about the students and their aspirations! We do not focus only on toppers, but
                            give equal attention to one and all.</p>
                    </div>
                    <img src="/images/about/why-choose-us/img6.png" alt="img6">

                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(7)" :class="{ 'bg-[#20ad96] text-white': Data7 }">
                    <h3 class="font-bold">No Entry Barriers</h3>
                    <div>
                        <i v-if="Data7" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data7">
                    <img src="/images/about/why-choose-us/img7.jpg" alt="img7">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Typically, in a coaching class setup, there are a lot of entry
                            barriers to obtain the attention of the top notch professors and learn from them. The students
                            are judged by various Tests and Intra Exams to gauge the mental ability of the student to assess
                            whether he/she will be eligible for pursuing their dream. Such intermittent with mostly
                            unfamiliar, untaught, unlearnt concepts should not have the decisive power over the student’s
                            life’s aims.</p>
                        <p class="text-justify text-gray-800">All the students need to have is the passion, to become a
                            scientist, doctor, engineer and an unbreakable will power! That’s it! Paathshala Education
                            welcomes you! The path to the light of learning and knowledge is at your fingertips. You have to
                            just grasp it with all your wit and let your efforts make you sail onto the shores of success.
                        </p>
                    </div>

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <img src="/images/about/why-choose-us/img7.jpg" alt="img7">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Typically, in a coaching class setup, there are a lot of entry
                            barriers to obtain the attention of the top notch professors and learn from them. The students
                            are judged by various Tests and Intra Exams to gauge the mental ability of the student to assess
                            whether he/she will be eligible for pursuing their dream. Such intermittent with mostly
                            unfamiliar, untaught, unlearnt concepts should not have the decisive power over the student’s
                            life’s aims.</p>
                        <p class="text-justify text-gray-800">All the students need to have is the passion, to become a
                            scientist, doctor, engineer and an unbreakable will power! That’s it! Paathshala Education
                            welcomes you! The path to the light of learning and knowledge is at your fingertips. You have to
                            just grasp it with all your wit and let your efforts make you sail onto the shores of success.
                        </p>
                    </div>


                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(8)" :class="{ 'bg-[#20ad96] text-white': Data8 }">
                    <h3 class="font-bold">Powerful and Technology Enhanced Learning Management Methodology</h3>
                    <div>
                        <i v-if="Data8" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data8">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Whether the student requires fast, slow, medium paced
                            teaching; easy, moderate, difficult levels to begin with, Paathshala Education’s innovative,
                            unprecedented teaching methodology accommodates every aspirant’s learning requirements</p>

                    </div>
                    <img src="/images/about/why-choose-us/img8.jpg" alt="img8">

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Whether the student requires fast, slow, medium paced
                            teaching; easy, moderate, difficult levels to begin with, Paathshala Education’s innovative,
                            unprecedented teaching methodology accommodates every aspirant’s learning requirements</p>
                    </div>
                    <img src="/images/about/why-choose-us/img8.jpg" alt="img8">

                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(9)" :class="{ 'bg-[#20ad96] text-white': Data9 }">
                    <h3 class="font-bold">We believe in the ideology 'Practice makes a human perfect'</h3>
                    <div>
                        <i v-if="Data9" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data9">
                    <img src="/images/about/why-choose-us/img9.png" alt="img9">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Paathshala Education’s team comprising of expert professors,
                            IITians, PhDs, industry professionals, have created amazing questions practice sets for each
                            topic of each chapter of each subject that will make the aspirant a pro at problem solving
                            thereby enhancing the aspirants’ confidence, leading to the aspirants securing a rank in their
                            dream entrance exam. We map our Practice Question Sets & Assignments with the pattern and
                            difficulty levels of the targeted exams, giving a one to one correspondence with the syllabus
                            and the exam like environment that is stimulated while practicing from our Academic Practice
                            Modules.</p>

                    </div>

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <img src="/images/about/why-choose-us/img9.png" alt="img9">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Paathshala Education’s team comprising of expert professors,
                            IITians, PhDs, industry professionals, have created amazing questions practice sets for each
                            topic of each chapter of each subject that will make the aspirant a pro at problem solving
                            thereby enhancing the aspirants’ confidence, leading to the aspirants securing a rank in their
                            dream entrance exam. We map our Practice Question Sets & Assignments with the pattern and
                            difficulty levels of the targeted exams, giving a one to one correspondence with the syllabus
                            and the exam like environment that is stimulated while practicing from our Academic Practice
                            Modules.</p>
                    </div>


                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(10)" :class="{ 'bg-[#20ad96] text-white': Data10 }">
                    <h3 class="font-bold">Test Series designed with precision, expertise and years of experience</h3>
                    <div>
                        <i v-if="Data10" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data10">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Full Syllabus Test Series is the most important element that
                            enhances the students’ rank in their dream entrance exam.</p>
                        <p class="text-justify text-gray-800">Paathshala Education’s students get access to over 100 Full
                            Syllabus Test Series of their dream entrance exam. Apart from that, the students gain access to
                            a plethora of tests: Chapter Wise Tests, Section Wise Tests and what not. Statistically
                            speaking, if the student were to give one test a day, it would take the student over 1000 days
                            to complete just the tests. So, more the number of tests the student gives, the better! The
                            Paathshala Education’s Tests’ Treasure is theirs, to utilize and master!</p>
                        <p class="text-justify text-gray-800">Such unprecedented testing is hardly seen on any other
                            platform, and the students should take maximum benefit of such extensive test series module and
                            secure the best possible rank they can via solving as many Full Syllabus Tests as they possibly
                            can.</p>

                    </div>
                    <img src="/images/about/why-choose-us/img10.png" alt="img10">

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Full Syllabus Test Series is the most important element that
                            enhances the students’ rank in their dream entrance exam.</p>
                        <p class="text-justify text-gray-800">Paathshala Education’s students get access to over 100 Full
                            Syllabus Test Series of their dream entrance exam. Apart from that, the students gain access to
                            a plethora of tests: Chapter Wise Tests, Section Wise Tests and what not. Statistically
                            speaking, if the student were to give one test a day, it would take the student over 1000 days
                            to complete just the tests. So, more the number of tests the student gives, the better! The
                            Paathshala Education’s Tests’ Treasure is theirs, to utilize and master!</p>
                        <p class="text-justify text-gray-800">Such unprecedented testing is hardly seen on any other
                            platform, and the students should take maximum benefit of such extensive test series module and
                            secure the best possible rank they can via solving as many Full Syllabus Tests as they possibly
                            can.</p>
                    </div>
                    <img src="/images/about/why-choose-us/img10.png" alt="img10">

                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(11)" :class="{ 'bg-[#20ad96] text-white': Data11 }">
                    <h3 class="font-bold">Impersonal Video Lectures focused on concepts</h3>
                    <div>
                        <i v-if="Data11" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data11">
                    <img src="/images/about/why-choose-us/img11.png" alt="img11">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Paathshala Education video lectures focus on the learning of
                            concepts in the most optimal manner and are engaging and stimulating to the brain. The concepts
                            developed are useful for not only test preparation, entrance exams, but also for life in
                            general, and lead to cognitive and neural brain development of the student if they just go
                            through all the modules sincerely with zeal and perseverance.</p>

                    </div>

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <img src="/images/about/why-choose-us/img11.png" alt="img11">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Paathshala Education video lectures focus on the learning of
                            concepts in the most optimal manner and are engaging and stimulating to the brain. The concepts
                            developed are useful for not only test preparation, entrance exams, but also for life in
                            general, and lead to cognitive and neural brain development of the student if they just go
                            through all the modules sincerely with zeal and perseverance.</p>
                    </div>


                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(12)" :class="{ 'bg-[#20ad96] text-white': Data12 }">
                    <h3 class="font-bold">Join the Learning Revolution</h3>
                    <div>
                        <i v-if="Data12" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data12">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Paathshala Education believes in the potential of every
                            student, takes pride in their passion, creates equal, impartial, powerful learning avenues for
                            EVERY student.</p>
                        <p class="text-justify text-gray-800 font-semibold">Your child is special and one of a kind. So are
                            we!</p>


                    </div>
                    <img src="/images/about/why-choose-us/img12.jpg" alt="img12">

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Paathshala Education believes in the potential of every
                            student, takes pride in their passion, creates equal, impartial, powerful learning avenues for
                            EVERY student.</p>
                        <p class="text-justify text-gray-800 font-semibold">Your child is special and one of a kind. So are
                            we!</p>
                    </div>
                    <img src="/images/about/why-choose-us/img12.jpg" alt="img12">

                </div>
            </div>
            <div class=" flex justify-center flex-col px-10">
                <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                    @click="setActiveData(13)" :class="{ 'bg-[#20ad96] text-white': Data13 }">
                    <h3 class="font-bold">Clarify Doubts, and Excel</h3>
                    <div>
                        <i v-if="Data13" class="fa-solid fa-angle-up"></i>
                        <i v-else class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data13">
                    <img src="/images/about/why-choose-us/img13.png" alt="img13">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Discuss doubts with you peers and mentors during the online
                            lecture sessions and learn to excel in competitive exams and in your career.</p>
                        <p class="text-justify text-gray-800">We at Paathshala believe that anything that seems difficult at
                            first can become easy over time with dedication, determination, persistence that leads to
                            desensitization of the process knowledge acquisition that leads a beginner level learner become
                            intermediate and then an expert.</p>
                        <p class="text-justify text-gray-800">We at Paathshala believe that anything that seems difficult at
                            first can become easy over time with dedication, determination, persistence that leads to
                            desensitization of the process knowledge acquisition that leads a beginner level learner become
                            intermediate and then an expert.</p>


                    </div>

                </div>
                <div class="container border hidden mx-10 p-3" v-else>
                    <img src="/images/about/why-choose-us/img13.png" alt="img13">
                    <div class="m-10">
                        <p class="text-justify text-gray-800">Discuss doubts with you peers and mentors during the online
                            lecture sessions and learn to excel in competitive exams and in your career.</p>
                        <p class="text-justify text-gray-800">We at Paathshala believe that anything that seems difficult at
                            first can become easy over time with dedication, determination, persistence that leads to
                            desensitization of the process knowledge acquisition that leads a beginner level learner become
                            intermediate and then an expert.</p>
                        <p class="text-justify text-gray-800">We at Paathshala believe that anything that seems difficult at
                            first can become easy over time with dedication, determination, persistence that leads to
                            desensitization of the process knowledge acquisition that leads a beginner level learner become
                            intermediate and then an expert.</p>
                    </div>

                </div>
            </div>

        </div>
        <div class="bg-[#f8f8f8] dark:bg-[#161821] px-3 pt-3 mt-3">
            <BecomeTutor />
        </div>

    </div>
</template>

<script>
definePageMeta({
    layout: "frontend",
});

export default {
    data() {
        return {
            Data1: true,
            Data2: false,
            Data3: false,
            Data4: false,
            Data5: false,
            Data6: false,
            Data7: false,
            Data8: false,
            Data9: false,
            Data10: false,
            Data11: false,
            Data12: false,
            Data13: false,
        }
    },
    methods: {
        setActiveData(num) {
            for (let i = 1; i <= 13; i++) {
                this[`Data${i}`] = false;
            }
            this[`Data${num}`] = true;
        }
    }


}

</script>

<style lang="scss" scoped></style>