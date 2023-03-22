<template>
    <div class="mt-8 h-screen max-w-lg flex flex-col justify-center mx-auto">

        <!-- standars -->
        <div class="mb-3">

            <multiselect class="w-full" v-model="selectedStandard" :options="standards.map(i => i.label)">
            </multiselect>

        </div>
        <!-- preferece -->
        <div class="mb-3">

            <multiselect class="w-full" v-model="selectedPrefernce" :options="prefernces.map(i => i.label)">
            </multiselect>
        </div>
        <!-- budget -->
        <div class="mb-3">

            <multiselect class="w-full" v-model="selectedBudget" :options="budgets.map(i => i.label)">
            </multiselect>
        </div>
        <!-- learning outcome sought -->
        <div class="mb-3">

            <multiselect class="w-full" v-model="selectedLearningOutcome" :options="learningOutcomes.map(i => i.label)">
            </multiselect>
        </div>
        <!-- learning outcome deadline -->
        <!-- date comp -->

        <button @click="showDatePicker = !showDatePicker">Date</button>
        <div v-show="showDatePicker">
            <date-picker v-model="date" mode="dateTime" :timezone="timezone" :is-dark="false"
            :disabled-dates='{ weekdays: [1, 7] }'>
            </date-picker>
        </div>
        

        <!-- free time slots -->
        <!-- date comp -->
    </div>
</template>
  

<script setup>
import Multiselect from 'vue-multiselect'
import { ref } from 'vue';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';

const showDatePicker = ref(false);

const standards = [
    { key: 'begineer', label: "Beginer L1" },
    { key: 'intermediate', label: "Intermediate L2" },
    { key: 'advanced', label: "Advanced L3" },
]
const selectedStandard = ref(null)

const prefernces = [
    { key: 'male', label: "Male" },
    { key: 'female', label: "Female" },
    { key: 'any', label: "Any" },
]
const selectedPrefernce = ref(null);

const budgets = [
    { key: 'full-course', label: "Full Course" },
    { key: 'hourly', label: "Hourly" },
    { key: 'any', label: "Any" },
]
const selectedBudget = ref(null);

const learningOutcomes = [
    { key: 'enahncing-subject-knowlegde', label: "Enahncing subject knowlegde" },
    { key: 'enahncing-grades-and-marks', label: "Enahncing Grades and Marks" },
    { key: 'cracking-entrance-exams', label: "Cracking Entrance Exams" },
    { key: 'assignement-help', label: "Assignement Help" },
]
const selectedLearningOutcome = ref(null);

const learningOutcomeDeadline = ref(new Date());

const freeSlots = ref([])
// Standards/Grade  (single select)
// Level (beg-L1/intermediate-L2/advanced-L3)

// prefernce male/female/any (single select)

// budget -> (single select)
//     full course (range)
//     hourly

// use a lib
// learning outcome sought (multi select)
//     enahncing subject knowlegde
//     enahncing grades and marks in general
//     cracking entrance exams
//     assignement help

// learning outcome deadline
//   single date or date range

// free time slots (multi select)
//   time of the day
//   time of the week
</script>

<!-- <style src="vue-multiselect/dist/vue-multiselect.min.css"></style> -->