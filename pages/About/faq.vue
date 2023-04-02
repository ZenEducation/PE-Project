<template>
    <div class=" dark:bg-black bg-white">
        <div class="mx-auto bg-white dark:bg-black">
            <courseheader>
                <template v-slot:title>FAQ Page</template>
            </courseheader>
            <div>
                <h1 class="text-center text-3xl mt-8 dark:text-white">Frequently Asked Question</h1>
                <div class="grid grid-cols-2 gap-2">
                    <div class="grid grid-cols-1 gap-2 mb-2 mt-5">
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData(1)" :class="{ 'bg-[#20ad96] text-white': Data1 }">
                                <h3 class="font-bold">How Do I Take Admission at Paathshala Education</h3>
                                <div>
                                    <i v-if="Data1" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data1">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> Go to the contact tab on www.paathshala.world
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Fill up the Enquire with us section</p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Submit the form by clicking on Enquire
                                        Now
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Paathshala representatives will get in
                                        touch
                                        with you to understand your requirement</p>
                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify text-gray-800">Go to the contact tab on www.paathshala.world</p>
                                    <p class="text-justify text-gray-800 pt-3">Fill up the Enquire with us section</p>
                                    <p class="text-justify text-gray-800 pt-3">Submit the form by clicking on Enquire Now
                                    </p>
                                    <p class="text-justify text-gray-800 pt-3">Paathshala representatives will get in touch
                                        with
                                        you to understand your requirement</p>
                                </div>

                            </div>
                        </div>
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData(2)" :class="{ 'bg-[#20ad96] text-white': Data2 }">
                                <h3 class="font-bold">What are the services offered by Paathshala Education</h3>
                                <div>
                                    <i v-if="Data2" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data2">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> Paathshala Education services include
                                        teaching for JEE, NEET, AIIMS, science entrances aspirants, CBSE, ICSE Boards,
                                        Olympiads, Academics Counselling, Homework Checking, Student Mentoring, Academics
                                        Planning</p>

                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify text-gray-800">Paathshala Education services include teaching for
                                        JEE, NEET, AIIMS, science entrances aspirants, CBSE, ICSE Boards, Olympiads,
                                        Academics Counselling, Homework Checking, Student Mentoring, Academics Planning</p>

                                </div>

                            </div>
                        </div>
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData(3)" :class="{ 'bg-[#20ad96] text-white': Data3 }">
                                <h3 class="font-bold">How will I be Taught</h3>
                                <div>
                                    <i v-if="Data3" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data3">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> At Paathshala, we believe that every student is unique and so are his/her learning requirements.
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Student will be taught in an exclusive one to one manner</p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> One Student – One Professor</p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> This is the best personalized service that any student can dream of If you have reached till here, you are at the right place</p>
                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800">At Paathshala, we believe that every student is unique and so are his/her learning requirements.
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3">Student will be taught in an exclusive one to one manner</p>
                                    <p class="text-justify dark:text-gray-800 pt-3">One Student – One Professor</p>
                                    <p class="text-justify dark:text-gray-800 pt-3">This is the best personalized service that any student can dream of If you have reached till here, you are at the right place</p>
                                </div>

                            </div>
                        </div>
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData(4)" :class="{ 'bg-[#20ad96] text-white': Data4 }">
                                <h3 class="font-bold">In what mode are the classes taken</h3>
                                <div>
                                    <i v-if="Data4" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data4">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> Classes are taken online in a one to one manner i.e. one student – one professor. The students can have amazing learning experience without the hassle of extensive travel and enjoy being taught, where ever they are, in the world</p>

                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify text-gray-800">Classes are taken online in a one to one manner i.e. one student – one professor. The students can have amazing learning experience without the hassle of extensive travel and enjoy being taught, where ever they are, in the world</p>

                                </div>

                            </div>
                        </div>
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData(5)" :class="{ 'bg-[#20ad96] text-white': Data5 }">
                                <h3 class="font-bold">How are the exams conducted?</h3>
                                <div>
                                    <i v-if="Data5" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data5">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> Paathshala has an extensive and personalized exams portal exclusively for Paathshala students
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Paathshala exams are curated by experts in such a way that students would actually love to give more exams and improve themselves with each exam</p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> After each exam, the students would receive detailed analytics about their performance in the exam which would empower the students to focus on areas they need to strengthen</p>
                                    
                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800">Paathshala has an extensive and personalized exams portal exclusively for Paathshala students
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3">Paathshala exams are curated by experts in such a way that students would actually love to give more exams and improve themselves with each exam</p>
                                    <p class="text-justify dark:text-gray-800 pt-3">After each exam, the students would receive detailed analytics about their performance in the exam which would empower the students to focus on areas they need to strengthen</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-2 mb-2 mt-5 mr-2">
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData1(11)" :class="{ 'bg-[#20ad96] text-white': Data11 }">
                                <h3 class="font-bold">What is the Fee for the Courses?</h3>
                                <div>
                                    <i v-if="Data11" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data11">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> The fee for the course depends upon the requirement of the student. The student can customize the course as per his/her requirement</p>
                                    
                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> The fee for the course depends upon the requirement of the student. The student can customize the course as per his/her requirement</p>
                                </div>

                            </div>
                        </div>
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData1(12)" :class="{ 'bg-[#20ad96] text-white': Data12 }">
                                <h3 class="font-bold">Can I Enroll for only 1 or 2 Chapters?</h3>
                                <div>
                                    <i v-if="Data12" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data12">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> <strong>Absolutely.</strong> The student can enroll for 1 or 2 chapters as well</p>

                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> <strong>Absolutely.</strong> The student can enroll for 1 or 2 chapters as well</p>

                                </div>

                            </div>
                        </div>
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData1(13)" :class="{ 'bg-[#20ad96] text-white': Data13 }">
                                <h3 class="font-bold">How Do I Register for Paathshala Test Series</h3>
                                <div>
                                    <i v-if="Data13" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data13">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> You have to send your requirement to us by clicking on the Contact tab on www.paathshala.world
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Our representatives will get in touch with you<br> They will guide you about how to enroll for test series<br> After you officially enroll for the test series, you will be given an official ID to login to the Paathshala official exams portal</p>
                                    
                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> You have to send your requirement to us by clicking on the Contact tab on www.paathshala.world
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Our representatives will get in touch with you<br> They will guide you about how to enroll for test series<br> After you officially enroll for the test series, you will be given an official ID to login to the Paathshala official exams portal</p>
                                </div>

                            </div>
                        </div>
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData1(14)" :class="{ 'bg-[#20ad96] text-white': Data14 }">
                                <h3 class="font-bold">How can I Get a Paathshala Student Mentor</h3>
                                <div>
                                    <i v-if="Data14" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data14">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> ‘Paathshala Student Mentor’ is a premium service available for enrollment for Paathshala students only</p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> More information about this premium service shall be provided the company representatives</p>

                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> ‘Paathshala Student Mentor’ is a premium service available for enrollment for Paathshala students only</p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> More information about this premium service shall be provided the company representatives</p>

                                </div>

                            </div>
                        </div>
                        <div class=" flex justify-center flex-col px-10">
                            <div class="container border flex justify-between items-center text-black bg-[#f8f8f8] dark:bg-[#161821] dark:text-white dark:border-none dark:hover:bg-[#20ad96] hover:cursor-pointer hover:bg-[#20ad96] hover:text-white transition-all ease-in-out duration-300  mx-10 p-3"
                                @click="setActiveData1(15)" :class="{ 'bg-[#20ad96] text-white': Data15 }">
                                <h3 class="font-bold">How to enroll for the Paathshsla Foundation Course - Prayaag</h3>
                                <div>
                                    <i v-if="Data15" class="fa-solid fa-angle-up"></i>
                                    <i v-else class="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="container border flex mx-10 p-3 dark:text-white dark:border-none" v-if="Data15">

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> Go to the <strong>contact tab</strong> on www.paathshala.world
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Fill up the <strong>Enquire with us</strong> section</p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Submit the form by clicking on <strong>Enquire Now</strong></p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Paathshala representatives will get in touch with you to understand your requirement</p>
                                    
                                </div>

                            </div>
                            <div class="container border hidden mx-10 p-3" v-else>

                                <div class="m-10">
                                    <p class="text-justify dark:text-gray-800"><i class="fa-solid fa-circle-dot"></i> Go to the <strong>contact tab</strong> on www.paathshala.world
                                    </p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Fill up the <strong>Enquire with us</strong> section</p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Submit the form by clicking on <strong>Enquire Now</strong></p>
                                    <p class="text-justify dark:text-gray-800 pt-3"><i class="fa-solid fa-circle-dot"></i> Paathshala representatives will get in touch with you to understand your requirement</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#f8f8f8] dark:bg-[#161821] p-3 my-3">
                <BecomeTutor/>
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
            Data11: true,
            Data12: false,
            Data13: false,
            Data14: false,
            Data15: false,
            
        }
    },
    methods: {
        setActiveData(num) {
            for (let i = 1; i <= 5; i++) {
                this[`Data${i}`] = false;

            }
            this[`Data${num}`] = true;
        },
        setActiveData1(num) {
            for (let i = 11; i <= 15; i++) {
                this[`Data${i}`] = false;

            }
            this[`Data${num}`] = true;
        },


    }
}
</script>

<style lang="scss" scoped></style>