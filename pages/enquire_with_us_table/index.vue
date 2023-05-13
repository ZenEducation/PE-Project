<template>
    <div class="dark:bg-black bg-white">
        <div class=" mx-auto bg-white dark:bg-black flex flex-col justify-center  items-center">
            <courseheader>
                <template v-slot:title>Enquire-With-Us-Table</template>
            </courseheader>

            <table class="my-16">
                <thead class="text-white bg-blue-900">
                    <tr>
                        <th>SR No</th>
                        <th>Student Name</th>
                        <th>Student Email ID</th>
                        <th>Student Phone Number</th>
                        <th>Courses</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody class="bg-purple-900/20" v-for="(student, index) in studentData" :key="index">
                    <tr class="dark:text-white">
                        <td>{{ index+1 }}</td>
                        <td>{{ student.name }}</td>
                        <td>{{ student.emailID }}</td>
                        <td>{{ student.phoneNumber }}</td>
                        <td>{{ student.courses }}</td>
                        <td>{{ student.message }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "frontend",
});

import { enquireWithUsData } from '@/stores/Enquire_With_Us_data.js';

const studentEnquiryData = enquireWithUsData()
const studentData = computed(() => studentEnquiryData.students);

// export default {
// data:()=>({
//   students: [
//       {
//         name: 'Matt Daniel',
//         emailID: 'mattdaniel@gmail.com',
//         phoneNumber: '+123 456 7890',
//         courses: '09',
//         message: 'I will like to pay for future additional courses',
//       }
//   ]
// })
// }

</script>