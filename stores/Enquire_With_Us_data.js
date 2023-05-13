
// Pinia Store Data

import { defineStore } from "pinia";

const state = () => ({
    students:[
        {
            name: 'Matt Daniel',
            emailID: 'mattdaniel@gmail.com',
            phoneNumber: '+123 456 7890',
            courses: 9,
            message: 'I will like to pay for future additional courses',
        },
        {
            name: 'John Doe',
            emailID: 'johndoe@gmail.com',
            phoneNumber: '+123 456 7890',
            courses: 12,
            message: 'I will like to drop few courses',
        },
        {
            name: 'Krish Bathran',
            emailID: 'krishbathran@gmail.com',
            phoneNumber: '+123 456 7890',
            courses: 5,
            message: 'Still waiting on your feedback',
        },
        {
            name: 'Elon Musk',
            emailID: 'elonmusk@gmail.com',
            phoneNumber: '+123 456 7890',
            courses: 3,
            message: 'Advice on additional courses',
        },
        {
            name: 'Sarah Noah',
            emailID: 'sarahnoah@gmail.com',
            phoneNumber: '+123 456 7890',
            courses: 18,
            message: 'What are the criteria for the reduction of courses?',
        },
    ]
})

export const enquireWithUsData = defineStore('category', {
    state
  })